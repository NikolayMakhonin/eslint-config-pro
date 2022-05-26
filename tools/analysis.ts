import * as fs from 'fs'
import * as fse from 'fs-extra'
import * as lodash from 'lodash'
import * as path from 'path'
import multimatch from 'multimatch'
import * as globby from 'globby'
import json5 from 'json5'

function customMerge(dest, src) {
  if (Array.isArray(dest)) {
    if (!Array.isArray(src)) {
      return dest
    }
    for (let i = 0, len = src.length; i < len; i++) {
      const item = src[i]
      if (!dest.includes(item)) {
        dest.push(item)
      }
    }
    return dest
  }
}

// const result = lodash.mergeWith({x: [1, 2, {a: [3], b: 4}]}, {x: [2, 3, {a: [4], c: 5}]}, (dest, src) => {
//   if (Array.isArray(dest)) {
//     return dest.concat(src);
//   }
// })
// console.log(JSON.stringify(result))
type PathWithStat = { name: string, path: string, stat: fs.Stats }

async function getPaths(
  dirs: string | string[],
  filter: (path: PathWithStat) => boolean,
  allPaths: PathWithStat[] = [],
) {
  if (Array.isArray(dirs)) {
    await Promise.all(dirs.map(o => getPaths(o, filter, allPaths)))
    return allPaths
  }
  const paths: string[] = await fse.readdir(dirs)
  let pathsExt = await Promise.all(paths
    .map(async name => {
      const _path = path.resolve(dirs, name)
      try {
        return {
          name,
          path: _path,
          stat: await fse.stat(_path),
        }
      } catch (err) {
        console.error(err)
      }
    }))
  pathsExt = pathsExt.filter(o => o).filter(filter)
  pathsExt.forEach(o => {
    if (o.stat.isFile()) {
      allPaths.push(o)
    }
  })
  await Promise.all(pathsExt.map(async _path => {
    if (_path.stat.isDirectory()) {
      await getPaths(_path.path, filter, allPaths)
    }
  }))
  return allPaths
}

async function runWithCache<T>(
  format: 'string' | 'json',
  cacheFile: string,
  func: () => Promise<T> | T,
): Promise<T> {
  if (fse.existsSync(cacheFile)) {
    switch (format) {
      case 'json':
        return fse.readJSON(cacheFile)
      case 'string':
        return fse.readFile(cacheFile, {encoding: 'utf-8'}) as any
      default:
        throw new Error('Unknown format: ' + format)
    }
  }

  const dir = path.dirname(cacheFile)
  if (!fse.existsSync(dir)) {
    await fse.mkdirp(dir)
  }

  const result = await func()

  switch (format) {
    case 'json':
      await fse.writeJSON(cacheFile, result)
      break
    case 'string':
      await fse.writeFile(cacheFile, result, {encoding: 'utf-8'})
      break
    default:
      throw new Error('Unknown format: ' + format)
  }

  return result
}

async function findPaths({
  cacheFile,
  dirs,
  patterns,
  excludeDirNames,
}: {
  cacheFile: string,
  dirs: string[],
  patterns: string[],
  excludeDirNames: string[],
}) {
  const paths = await runWithCache('json', cacheFile, async () => {
    const excludeDirNamesSet = new Set(excludeDirNames)
    const paths = await getPaths(dirs, ({name, path: _path, stat}) => {
      if (stat.isSymbolicLink()) {
        return false
      } else if (stat.isDirectory()) {
        if (excludeDirNamesSet.has(name)) {
          return false
        }
      } else {
        if (!multimatch([_path], patterns, {dot: true, nocase: true}).length) {
          return false
        }
      }
      return true
    })
    return paths
  })
  return paths
}

async function mergeEsLintConfigs({
  dirs,
  patterns,
  excludeDirNames,
}: {
  dirs: string[],
  patterns: string[],
  excludeDirNames: string[],
}) {
  const paths = await findPaths({
    cacheFile: './tmp/esLintConfigsPaths.json',
    dirs,
    patterns,
    excludeDirNames,
  })

  const configs = await runWithCache('json', './tmp/configs.json', async () => {
    const errorPaths: string[] = []
    const configs = await Promise.all(paths.map<Promise<PathWithStat & { content: any }>>(async o => {
      try {
        if (/\.([cm]?js)$/.test(o.path)) {
          const _module = require(o.path)
          return {
            ...o,
            content: _module,
          }
        }
        const text = await fse.readFile(o.path, {encoding: 'utf-8'})
        const json = json5.parse(text)
        return {
          ...o,
          content: json,
        }
      } catch (err) {
        errorPaths.push(o.path)
        console.error(o.path, err)
        return null
      }
    }))
    if (errorPaths.length) {
      console.error('errorPaths: ', errorPaths)
    }
    return configs.filter(o => o?.content)
  })

  await runWithCache('string', './tmp/configPro.json', async () => {
    const configsPro = configs.filter(o => o.content.extends?.includes('pro'))
    const configPro = {}
    configsPro
      // .filter(o => !/\b(test|env|temp|old)\b/.test(o.path))
      .filter(o => /\b(tests?)\b/.test(o.path))
      .map(o => o.content)
      .forEach(o => {
        o.overrides = o?.overrides?.reduce((a, o) => {
          a[o.files?.join(', ') || ''] = o
          return a
        }, {})
        lodash.mergeWith(configPro, o, customMerge)
      })
    return JSON.stringify(configPro, null, 2)
  })

  // console.log(paths)
}

async function mergeEsLintInline({
  dirs,
  patterns,
  excludeDirNames,
}: {
  dirs: string[],
  patterns: string[],
  excludeDirNames: string[],
}) {
  const paths = await findPaths({
    cacheFile: './tmp/tsFilesPaths.json',
    dirs,
    patterns,
    excludeDirNames,
  })

  const configs = await runWithCache('string', './tmp/rules.txt', async () => {
    const errorPaths: string[] = []
    const rulesMap = new Map<string, { rule: string, path: string }>()
    await Promise.all(paths
      .filter(o => /\b(tests?)\b/.test(o.path))
      .map(async file => {
        try {
          const text = await fse.readFile(file.path, {encoding: 'utf-8'})
          text.match(/(?<=eslint-disable((-next)?-line)?\s+)([^\r\n]+?)(?=[\r\n]|\*\/)/g)?.forEach(o => {
            const rules = o
              .split(',')
              .map(o => o.trim())
              .forEach(rule => {
                if (rule) {
                  rulesMap.set(rule, { rule, path: file.path})
                }
              })
          })
        } catch (err) {
          errorPaths.push(file.path)
          console.error(file.path, err)
          return null
        }
      }))
    if (errorPaths.length) {
      console.error('errorPaths: ', errorPaths)
    }
    return Array.from(rulesMap.values())
      .sort((o1, o2) => {
        return o1.rule > o2.rule ? 1 : -1
      })
      .map(o => `${o.rule} // ${o.path}`)
      .join('\n')
  })
}

Promise.all([
  mergeEsLintConfigs({
    // dirs: ['D:/projects/#temp/eslint'],
    dirs: ['I:/Work/_GIT/GitHub/NodeJs', 'D:/projects/my', 'D:/projects/work'],
    patterns: ['**/*eslintrc*', '!**/*.{yml,html}', '!**/eslint-config-pro/**'],
    excludeDirNames: ['node_modules', '.git', 'dist', 'tmp'],
  }),
  mergeEsLintInline({
    // dirs: ['D:/projects/#temp/eslint'],
    dirs: ['I:/Work/_GIT/GitHub/NodeJs', 'D:/projects/my', 'D:/projects/work'],
    patterns: ['**/*.{ts,js,cjs,mjs}'],
    excludeDirNames: ['node_modules', '.git', 'dist', 'tmp', 'public', 'build', 'static'],
  }),
])
  .catch(err => console.error(err))
