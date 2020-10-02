'use strict'

module.exports = {
	'extends': ['./index.js'],

	rules: {
		strict                              : 'off',
		'@typescript-eslint/no-var-requires': 'off',
	},

	env: {
		node: true,
		es6 : true,
	},

	parser: 'babel-eslint',

	// parser       : '@typescript-eslint/parser',
	// parserOptions: {
	// 	ecmaVersion                : 6,
	// 	sourceType                 : 'module',
	// 	allowImportExportEverywhere: false,
	// 	codeFrame                  : true,
	// 	project                    : 'tsconfig.eslint.json',
	// 	// babelOptions               : {
	// 	// 	configFile: './env/babel/configs/minimal.js'
	// 	// },
	// },

	plugins: [
		'@typescript-eslint',
	],
}
