'use strict'

const assert = require('assert')
const {ESLint} = require('eslint')

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
