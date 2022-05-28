import {config} from './config'
import {ESLint} from 'eslint'
import {Rules, rules} from './rules'
import tsPluginRules from '@typescript-eslint/eslint-plugin/dist/rules'
import path from 'path'
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
  this.timeout(10000)

  it('load config in eslint to validate all rule syntax is correct', async function () {
    const eslint = new ESLint({
      useEslintrc: false,
    })

    const code = '\'use strict\'\n'

    const result = await eslint.lintText(code)
    console.log(JSON.stringify(result))
    const log = JSON.stringify(result, null, 2)
    assert.strictEqual(result.length, 1, log)
    assert.strictEqual(result[0].errorCount, 0, log)
  })
})

describe('validate typescript configs', function () {
  function jsKeyIsValid(key: string) {
    if (/^\w+\//.test(key)) {
      return true
    }
    return !!esPluginRules.get(key)
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
    for (const jsKey in jsRules) {
      const jsRule = jsRules[jsKey]
      assert.ok(jsKeyIsValid(jsKey), `JS: ${jsKey} is invalid`)
      const tsKey = '@typescript-eslint/' + jsKey
      if (tsKeyIsValid(tsKey)) {
        const tsRule = tsRules[tsKey]
        const jsRuleInTs = tsRules[jsKey]
        if (tsRule || jsRuleInTs) {
          assert.ok(tsRule, `TS: ${tsKey} should be specified`)
          if (getRuleLevel(tsRule) !== 'off') {
            assert.ok(jsRuleInTs, `TS: ${jsKey} should be specified`)
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

  it('test basic properties of config', function () {
    checkTypescriptRules([
      rules.common,
    ])
    checkTypescriptRules([
      rules.common,
      rules.svelte,
    ])
    checkTypescriptRules([
      rules.common,
      rules.envTools,
    ])
    checkTypescriptRules([
      rules.common,
      rules.tests,
    ])
    checkTypescriptRules([
      rules.common,
      rules.svelte,
      rules.tests,
    ])
  })
})
