/* eslint-disable guard-for-in */
import {config} from './config'
import {ESLint} from 'eslint'
import {Rules, rules, rulesOrig} from './rules'
import tsPluginRules from '@typescript-eslint/eslint-plugin/dist/rules'
import globby from 'globby'
import path from 'path'
import {createTestVariants} from '@flemist/test-variants'
import {rules as esPluginRulesNode} from 'eslint-plugin-node'
import {rules as esPluginRulesImport} from 'eslint-plugin-import'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const esPluginRules = Array.from(require(path.resolve('./node_modules/eslint', 'lib/rules/index')))
  .reduce<any>((a: any, [key, value]) => {
    a[key] = value
    return a
  }, {})

Object.keys(esPluginRulesNode).forEach(key => {
  esPluginRules['node/' + key] = esPluginRulesNode[key]
})

Object.keys(esPluginRulesImport).forEach(key => {
  esPluginRules['import/' + key] = esPluginRulesImport[key]
})

describe('basic', function () {
  function isObject(obj) {
    return typeof obj === 'object' && obj !== null
  }

  it('test basic properties of config', function () {
    assert.ok(isObject(config.rules))
  })
})

describe('validate rules', function () {
  const options = {
    ignoreRuleEquals: {
      'no-shadow'           : true,
      'no-use-before-define': true,
      'comma-dangle'        : true,
      'no-redeclare'        : true,
    },
    errorRules: {
      '@typescript-eslint/indent': true,
    },
  }

  function jsKeyIsValid(jsKey: string) {
    if (options.errorRules[jsKey]) {
      return false
    }
    if (jsKey.startsWith('@typescript-eslint/')) {
      return false
    }
    const rule = esPluginRules[jsKey]
    return rule && !rule.meta.deprecated
  }

  function tsKeyIsValid(tsKey: string) {
    if (options.errorRules[tsKey]) {
      return false
    }
    const jsKey = tsKey.replace(/^@typescript-eslint\//, '')
    if (tsKey === jsKey) {
      return false
    }
    const rule = tsPluginRules[jsKey]
    return rule && !rule.meta.deprecated
  }

  function getRuleLevel(rule: string | string[]) {
    return Array.isArray(rule) ? rule[0] : rule
  }

  function checkTypescriptRules(rules: {js: Rules, ts: Rules}[]) {
    const jsRules = Object.assign({}, ...rules.map(o => o.js))
    const tsRules = Object.assign({}, ...rules.map(o => o.ts))
    const jsTsRules = Object.assign({}, ...rules.flatMap(o => [o.js, o.ts]))
    for (const jsKey in jsRules) {
      const jsRule = jsRules[jsKey]
      assert.ok(jsKeyIsValid(jsKey), `JS: ${jsKey} is invalid`)
      const tsKey = '@typescript-eslint/' + jsKey
      assert.ok(jsKey in jsTsRules)
      if (tsKeyIsValid(tsKey)) {
        const tsRule = tsRules[tsKey]
        const jsTsRule = jsTsRules[tsKey]
        const jsRuleInTs = tsRules[jsKey]
        const jsInJsTsRule = jsTsRules[jsKey]
        assert.ok(tsRule, `TS: ${tsKey} should be specified` + JSON.stringify(tsPluginRules[jsKey], null, 2))
        assert.ok(jsTsRule, `TS: ${tsKey} should be specified`)
        assert.strictEqual(
          Array.isArray(jsInJsTsRule) ? jsInJsTsRule[0] : jsInJsTsRule,
          'off',
          `JS+TS: ${jsKey} should be off`,
        )
        assert.strictEqual(tsRule, jsTsRule)
        if (getRuleLevel(tsRule) !== 'off') {
          assert.ok(jsRuleInTs, `TS: ${jsKey} should be specified`)
          assert.ok(jsInJsTsRule, `TS: ${jsKey} should be specified`)
          assert.strictEqual(
            Array.isArray(jsRuleInTs) ? jsRuleInTs[0] : jsRuleInTs,
            'off',
            `TS: ${jsKey} should be off`,
          )
          if (!options.ignoreRuleEquals[jsKey]) {
            assert.deepStrictEqual(
              Array.isArray(jsRule) ? jsRule.slice(1) : jsRule,
              Array.isArray(tsRule) ? tsRule.slice(1) : tsRule,
              `TS: js['${jsKey}'] and ts['${tsKey}'] should be equals`,
            )
          }
        }
      }
      else {
        assert.ok(!(tsKey in tsRules), `TS: ${tsKey} is not valid`)
        if (!jsKey.includes('/')) {
          assert.ok(!(jsKey in tsRules), `TS: ${jsKey} should not be specified`)
        }
      }
    }

    for (const tsKey in tsRules) {
      const jsKey = tsKey.replace(/^@typescript-eslint\//, '')
      if (tsKey === jsKey) {
        assert.ok(jsKeyIsValid(jsKey), `TS: ${jsKey} is invalid`)
      }
      else {
        assert.ok(tsKeyIsValid(tsKey), `TS: ${tsKey} is invalid`)
        if (jsKeyIsValid(jsKey)) {
          assert.ok(jsRules[jsKey], `JS: ${jsKey} should be specified`)
        }
      }
    }
  }

  it('rules', function () {
    // console.log(JSON.stringify(Object.keys(tsPluginRules), null, 2))
    checkTypescriptRules([
      rules.common,
    ])
    checkTypescriptRules([
      rules.common,
      rules.svelte,
    ])
    checkTypescriptRules([
      rules.common,
      rules.tests,
    ])
    checkTypescriptRules([
      rules.common,
      rules.envTools,
    ])
    checkTypescriptRules([
      rules.common,
      rules.tests,
      rules.envTools,
    ])
    checkTypescriptRules([
      rules.common,
      rules.svelte,
      rules.tests,
    ])
    checkTypescriptRules([
      rules.common,
      rules.svelte,
      rules.envTools,
    ])
    checkTypescriptRules([
      rules.common,
      rules.svelte,
      rules.tests,
      rules.envTools,
    ])
  })

  function checkRulesOrig(rulesOrig) {
    for (const key in rulesOrig.ts) {
      assert.ok(rulesOrig.ts[key])
      if (key.startsWith('@typescript-eslint/')) {
        const jsKey = key.replace(/^@typescript-eslint\//, '')
        assert.ok(!rulesOrig.ts[jsKey], `TS: ${jsKey} should be deleted`)
        if (jsKeyIsValid(jsKey)) {
          assert.ok(rulesOrig.js[jsKey], `JS: ${jsKey} should be specified`)
          assert.notDeepStrictEqual(rulesOrig.ts[key], rulesOrig.js[jsKey], `TS: ${key} should be deleted`)
        }
        // assert.notStrictEqual(
        //   getRuleLevel(rulesOrig.ts[key]) === 'off',
        //   getRuleLevel(tsRules[jsKey]) === 'off',
        //   `TS: ${key} should be deleted`,
        // )
      }
    }
  }

  it('rulesOrig', function () {
    checkRulesOrig(rulesOrig.common)
    checkRulesOrig(rulesOrig.tests)
    checkRulesOrig(rulesOrig.svelte)
    checkRulesOrig(rulesOrig.envTools)
  })

  it('new or deprecated rules', function () {
    const deprecatedRules = []
    const newRules = []
    for (const key in esPluginRules) {
      if (!jsKeyIsValid(key) || tsPluginRules[key]?.meta.deprecated) {
        if (rules.common.js[key]) {
          deprecatedRules.push(key)
        }
      }
      else {
        if (!rules.common.js[key]) {
          newRules.push(`${key}\n${
            esPluginRules[key].meta.docs.category
          }\n${
            esPluginRules[key].meta.docs.description
          }\n${
            esPluginRules[key].meta.docs.url
          }\n`)
        }
      }
    }
    for (const key in tsPluginRules) {
      const tsKey = '@typescript-eslint/' + key
      if (!tsKeyIsValid(tsKey)) {
        if (rules.common.ts[tsKey]) {
          deprecatedRules.push(tsKey)
        }
      }
      else {
        if (!rules.common.ts[tsKey]) {
          newRules.push(`${key}\n${
            tsPluginRules[key].meta.docs.category
          }\n${
            tsPluginRules[key].meta.docs.description
          }\n${
            tsPluginRules[key].meta.docs.url
          }\n`)
        }
      }
    }

    assert.ok(deprecatedRules.length === 0, `deprecated on invalid rules (${deprecatedRules.length}):\n${deprecatedRules.join('\n')}`)
    assert.ok(newRules.length === 0, `new rules (${newRules.length}):\n${newRules.join('\n')}`)
  })
})

describe('validate-config', function () {
  this.timeout(60000)

  async function checkFileFilter({
    eslint,
    file,
    type,
    test,
    envTools,
  }: {
    eslint: ESLint,
    file: string,
    type?: 'js' | 'cjs' | 'mjs' | 'ts' | 'svelte' | 'html',
    test?: boolean,
    envTools?: boolean,
  }) {
    const absolutePath = path.resolve(file)
    const config = await eslint.calculateConfigForFile(absolutePath)

    const ruleNames = Object.keys(config.rules)
    const isTypeScript = type === 'ts' || type === 'svelte'

    // cjs
    assert.deepStrictEqual(config.parserOptions.sourceType, type === 'cjs' || type === 'html' ? 'script' : 'module')

    // mjs
    assert.deepStrictEqual(config.rules['node/global-require'], type === 'mjs' ? ['error'] : ['off'])

    // ts
    assert.strictEqual(ruleNames.some(o => o.startsWith('@typescript-eslint/')), isTypeScript)

    // svelte
    assert.strictEqual(!!config.settings['svelte3/typescript'], type === 'svelte')

    // html
    assert.deepStrictEqual(config.rules['semi-style'], type === 'html' ? ['error', 'last'] : ['warn', 'first'])
    assert.deepStrictEqual(config.parserOptions.ecmaVersion, type === 'html' ? 5 : 'latest')

    assert.strictEqual(config.env.es6, type !== 'html')
    assert.strictEqual(config.env.browser, type === 'html' || type === 'js' || isTypeScript)
    assert.strictEqual(config.env.node, !(type === 'svelte' || type === 'html'))

    // test
    assert.deepStrictEqual(
      config.rules[isTypeScript ? '@typescript-eslint/no-throw-literal' : 'no-throw-literal']?.[0] === 'off',
      test,
    )
    assert.strictEqual(!!config.env.mocha, test)

    // envTools
    assert.deepStrictEqual(
      config.rules[isTypeScript ? 'func-names' : 'func-names']?.[0] === 'off',
      test || envTools,
      JSON.stringify([
        config.rules['func-names'],
        config.rules['@typescript-eslint/func-names'],
      ]),
    )
  }
  
  const testVariants = createTestVariants(checkFileFilter)

  let eslint: ESLint
  before(function () {
    eslint = new ESLint({
      useEslintrc: false,
      baseConfig : config,
    })
  })

  it('validate config filters', async function () {
    await testVariants({
      eslint  : [eslint],
      type    : ['js', 'cjs', 'mjs', 'ts', 'html', 'svelte'],
      envTools: [false, true],
      test    : [false, true],
      ext     : ({type}) => {
        const exts: string[] = [type]
        if (type === 'js' || type === 'ts') {
          exts.push(type + 'x')
        }
        return exts
      },
      file({type, ext, envTools, test}) {
        const files = []
        if (envTools && !test) {
          files.push('file.' + ext)
          files.push('dir/.file.' + ext)
          files.push('dir/dir/.file.' + ext)
          files.push('env/file.' + ext)
          files.push('tools/file.' + ext)
          files.push('deploy/file.' + ext)
        }
        else if (test && !envTools) {
          files.push('dir/file.test.' + ext)
          files.push('dir/file.e2e.' + ext)
          files.push('dir/file.perf.' + ext)
          files.push('test/file.' + ext)
          files.push('tests/file.' + ext)
        }
        else if (!test && !envTools) {
          files.push('dir/file.' + ext)
          files.push('dir/dir/file.' + ext)
          // if (type === 'html' || type === 'svelte' || ext === 'jsx' || ext === 'tsx') {
          //   files.push('file.' + ext)
          //   files.push('file.test.' + ext)
          //   files.push('file.e2e.' + ext)
          //   files.push('file.config.' + ext)
          //   files.push('test/file.' + ext)
          //   files.push('env/file.' + ext)
          // }
        }
        return files
      },
    })
  })

  it('load config in eslint to validate all rule syntax is correct', async function () {
    const files = (await globby([
      '{{src,env,tools}/**/,}*.{js,cjs,mjs,ts,tsx,svelte,html}',
    ]))
      .map(file => path.resolve(file))
    console.log(files)
    // const eslint = new ESLint({
    //   useEslintrc: true,
    // })
    // for (const file of files) {
    //   try {
    //     const config = await eslint.calculateConfigForFile(file)
    //     console.log(config.rules['dot-notation'])
    //   }
    //   catch (err) {
    //     console.error(file)
    //     throw err
    //   }
    // }

    for (let i = 0; i < 10; i++) {
      const result = await eslint.lintFiles(files)
      // console.log(JSON.stringify(result))
      assert.strictEqual(result.length, files.length)
      const errors = result.filter(o => o.errorCount > 0 || o.warningCount > 0)
      assert.strictEqual(errors.length, 0, JSON.stringify(errors, null, 2))
    }
  })
})
