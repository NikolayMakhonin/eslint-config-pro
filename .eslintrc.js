'use strict'

module.exports = {
	'extends': ['./index.js'],

	rules: {
		strict: 'off',
		'@typescript-eslint/no-var-requires': 'off',
	},

	env: {
		node: true,
		es6 : true,
	},

	parser       : 'babel-eslint',

	plugins: [
		'@typescript-eslint',
	],

	overrides: [
		{
			files: ['test/**/*.js', 'tests/**/*.js'],
			env  : {mocha: true},
		},
	],
}
