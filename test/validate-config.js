'use strict'

const assert = require( 'assert' )
const eslint = require( 'eslint' )

describe( 'validate-config', function () {
	it( 'load config in eslint to validate all rule syntax is correct', function () {
		const { CLIEngine } = eslint

		const cli = new CLIEngine({
			useEslintrc: false,
			configFile : '.eslintrc.js'
		})

		const code = '\'use strict\'\r\n\r\n'
			+ 'const foo = 1\r\n'
			+ 'function bar ( x ) {\r\n'
			+ '\treturn x * x\r\n'
			+ '}\r\n'
			+ 'bar( foo )\r\n'

		const result = cli.executeOnText( code )
		console.log( JSON.stringify( result ) )
		assert.strictEqual( result.errorCount, 0, JSON.stringify( result ) )
	})
})
