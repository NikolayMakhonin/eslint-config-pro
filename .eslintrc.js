'use strict'

module.exports = {
	'extends': ['./index.js'],
	env      : {
		node: true,
		es6 : true
	},
	overrides: [
		{
			files: ['test/**/*.js', 'tests/**/*.js'],
			env  : {mocha: true}
		}
	]
}
