/* eslint-disable guard-for-in */
import {config} from './config'
import {ESLint} from 'eslint'
import {Rules, rules, rulesOrig} from './rules'
import tsPluginRules from '@typescript-eslint/eslint-plugin/dist/rules'
import globby from 'globby'
import path from 'path'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const esPluginRules = require(path.resolve('./node_modules/eslint', 'lib/rules/index'))

describe('basic', function () {
  function isObject(obj) {
    return typeof obj === 'object' && obj !== null
  }

  it('test basic properties of config', function () {
    assert.ok(isObject(config.rules))
  })
})

describe('validate-config', function () {
  this.timeout(60000)

  it('load config in eslint to validate all rule syntax is correct', async function () {
    const files = await globby([
      '{{src,env,tools}/**/,}*.{js,cjs,mjs,ts,tsx,svelte,html}',
    ])
    console.log(files)
    const eslint = new ESLint({
      useEslintrc: true,
    })
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
      const log = JSON.stringify(result, null, 2)
      assert.strictEqual(result.length, files.length, log)
      assert.strictEqual(result[0].errorCount, 0, log)
    }
  })
})

describe('validate rules', function () {
  function jsKeyIsValid(jsKey: string) {
    if (/^\w+\//.test(jsKey)) {
      return true
    }
    return !jsKey.startsWith('@typescript-eslint/')
      && !!esPluginRules.get(jsKey)
  }

  function tsKeyIsValid(tsKey: string) {
    const jsKey = tsKey.replace(/^@typescript-eslint\//, '')
    return tsKey !== jsKey && !!tsPluginRules[jsKey]
  }

  function getRuleLevel(rule: string | string[]) {
    return Array.isArray(rule) ? rule[0] : rule
  }

  const options = {
    ignoreRuleEquals: {
      'no-shadow'           : true,
      'no-use-before-define': true,
    },
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
        assert.ok(tsRule, `TS: ${tsKey} should be specified`)
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
        assert.ok(!(jsKey in tsRules), `TS: ${jsKey} should not be specified`)
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
})
