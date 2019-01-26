'use strict'

module.exports = {
	'extends': ['eslint:recommended'],
	// plugins  : ['node'],
	rules    : {		// doc: https://eslint.org/docs/rules/
	// region eslint:recommended copy
		'capitalized-comments'           : 'off',
		complexity                       : 'off',
		'constructor-super'              : 'error',
		'for-direction'                  : 'error',
		'getter-return'                  : 'error',
		'id-blacklist'                   : 'off',
		'id-length'                      : 'off',
		'id-match'                       : 'off',
		'indent-legacy'                  : 'off',
		'jsx-quotes'                     : 'off',
		'line-comment-position'          : 'off',
		'lines-around-directive'         : 'off',
		'max-classes-per-file'           : 'off',
		'max-depth'                      : 'off',
		'max-len'                        : 'off',
		'max-lines'                      : 'off',
		'max-lines-per-function'         : 'off',
		'max-nested-callbacks'           : 'off',
		'max-params'                     : 'off',
		'max-statements'                 : 'off',
		'max-statements-per-line'        : 'off',
		'newline-after-var'              : 'off',
		'newline-before-return'          : 'off',
		'no-bitwise'                     : 'off',
		'no-case-declarations'           : 'error',
		'no-catch-shadow'                : 'off',
		'no-class-assign'                : 'error',
		'no-compare-neg-zero'            : 'error',
		'no-cond-assign'                 : 'error',
		'no-const-assign'                : 'error',
		'no-constant-condition'          : ['error', {checkLoops: false}],
		'no-delete-var'                  : 'error',
		'no-div-regex'                   : 'off',
		'no-dupe-args'                   : 'error',
		'no-dupe-class-members'          : 'error',
		'no-dupe-keys'                   : 'error',
		'no-duplicate-case'              : 'error',
		'no-empty-character-class'       : 'error',
		'no-empty-pattern'               : 'error',
		'no-eq-null'                     : 'off',
		'no-ex-assign'                   : 'error',
		'no-extra-boolean-cast'          : 'error',
		'no-extra-semi'                  : 'error',
		'no-fallthrough'                 : 'error',
		'no-func-assign'                 : 'error',
		'no-global-assign'               : 'error',
		'no-inline-comments'             : 'off',
		'no-inner-declarations'          : 'error',
		'no-invalid-regexp'              : 'error',
		'no-irregular-whitespace'        : 'error',
		'no-magic-numbers'               : 'off',
		'no-multi-assign'                : 'off',
		'no-native-reassign'             : 'off',
		'no-negated-in-lhs'              : 'off',
		'no-new-symbol'                  : 'error',
		'no-obj-calls'                   : 'error',
		'no-octal'                       : 'error',
		'no-param-reassign'              : 'off',
		'no-plusplus'                    : 'off',
		'no-redeclare'                   : 'error',
		'no-regex-spaces'                : 'error',
		'no-restricted-globals'          : 'off',
		'no-restricted-imports'          : 'off',
		'no-restricted-modules'          : 'off',
		'no-restricted-properties'       : 'off',
		'no-restricted-syntax'           : 'off',
		'no-self-assign'                 : 'error',
		'no-spaced-func'                 : 'off',
		'no-sparse-arrays'               : 'error',
		'no-ternary'                     : 'off',
		'no-this-before-super'           : 'error',
		'no-throw-literal'               : 'off',
		'no-unexpected-multiline'        : 'error',
		'no-unsafe-finally'              : 'error',
		'no-unsafe-negation'             : 'error',
		'no-unused-labels'               : 'error',
		'no-useless-escape'              : 'error',
		'no-useless-return'              : 'off',
		'no-void'                        : 'off',
		'padding-line-between-statements': 'off',
		'prefer-promise-reject-errors'   : 'off',
		'prefer-reflect'                 : 'off',
		'require-jsdoc'                  : 'off',
		'require-unicode-regexp'         : 'off',
		'require-yield'                  : 'error',
		'sort-imports'                   : 'off',
		'sort-keys'                      : 'off',
		'sort-vars'                      : 'off',
		'use-isnan'                      : 'error',
		'valid-jsdoc'                    : 'off',
		'valid-typeof'                   : 'error',
		'wrap-regex'                     : 'off',

		// endregion

		// region Possible Errors

		'no-async-promise-executor': 'error',
		'no-await-in-loop'         : 'warn',
		'no-console'               : 'off',
		'no-control-regex'         : 'warn',
		'no-debugger'              : 'warn',
		'no-extra-parens'          : [
			'error',
			'all',
			{
				returnAssign               : false,
				nestedBinaryExpressions    : false,
				enforceForArrowConditionals: false
			}
		],
		'no-misleading-character-class': 'warn',
		'no-prototype-builtins'        : 'warn',
		'no-template-curly-in-string'  : 'warn',
		'no-unreachable'               : 'warn',
		'require-atomic-updates'       : 'error',

		// endregion

		// region Best Practices

		'accessor-pairs'        : ['error', {setWithoutGet: true}],
		'array-callback-return' : 'error',
		'block-scoped-var'      : 'error',
		'class-methods-use-this': 'error',
		'consistent-return'     : ['error', {treatUndefinedAsUnspecified: false}],
		curly                   : ['error', 'all'],
		'default-case'          : 'error',
		'dot-location'          : ['error', 'property'],
		'dot-notation'          : ['error', {allowKeywords: false}],
		eqeqeq                  : ['error', 'always', {'null': 'ignore'}],
		'guard-for-in'          : 'warn',
		'no-caller'             : 'error',
		'no-alert'              : 'warn',
		'no-else-return'        : ['error', {allowElseIf: false}],
		'no-empty'              : 'warn',
		'no-empty-function'     : 'warn',
		'no-eval'               : 'error',
		'no-extend-native'      : 'error',
		'no-extra-bind'         : 'error',
		'no-extra-label'        : 'error',
		'no-floating-decimal'   : 'error',
		'no-implicit-coercion'  : [
			'error',
			{
				allow : ['!!'],
				string: false
			}
		],
		'no-implicit-globals': 'error',
		'no-implied-eval'    : 'error',
		// 'no-invalid-this'    : 'error',
		'no-iterator'        : 'error',
		'no-labels'          : 'error',
		'no-lone-blocks'     : 'error',
		'no-loop-func'       : 'error',
		'no-multi-spaces'    : [
			'warn',
			{
				exceptions: {
					VariableDeclarator: true,
					BinaryExpression  : true,
					Property          : true
				},
				ignoreEOLComments: false
			}
		],
		'no-multi-str'                : 'error',
		'no-new'                      : 'warn',
		'no-new-func'                 : 'error',
		'no-new-wrappers'             : 'error',
		'no-octal-escape'             : 'error',
		'no-proto'                    : 'error',
		'no-return-assign'            : ['error', 'except-parens'],
		'no-return-await'             : 'error',
		'no-script-url'               : 'error',
		'no-self-compare'             : 'error',
		'no-sequences'                : 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unused-expressions'       : 'warn',
		'no-useless-call'             : 'error',
		'no-useless-catch'            : 'error',
		'no-useless-concat'           : 'error',
		'no-warning-comments'         : [
			'error',
			{
				terms   : ['todo', 'fixme'],
				location: 'anywhere'
			}
		],
		'no-with'      : 'error',
		radix          : 'error',
		'require-await': 'error',
		'vars-on-top'  : 'error',
		'wrap-iife'    : ['error', 'inside'],
		yoda           : ['error', 'never', {exceptRange: true}],

		// endregion

		// region Strict Mode

		strict: ['error', 'safe'],

		// endregion

		// region Variables

		'init-declarations': ['off', 'never', {ignoreForLoopInit: true}],
		'no-label-var'     : 'error',
		'no-shadow'        : [
			'error',
			{
				builtinGlobals: true,
				hoist         : 'all',
				allow         : []
			}
		],
		'no-shadow-restricted-names': 'error',
		'no-undef'                  : ['error', {'typeof': true}],
		'no-undef-init'             : 'error',
		'no-undefined'              : 'error',
		'no-unused-vars'            : [
			'warn',
			{
				vars              : 'all',
				args              : 'after-used',
				ignoreRestSiblings: true,
				caughtErrors      : 'all'
			}
		],
		'no-use-before-define': [
			'error',
			{
				variables: true,
				functions: false,
				classes  : true
			}
		],

		// endregion

		// region Node.js and CommonJS

		'callback-return'      : ['error', ['done', 'cb', 'next', 'resolve', 'reject']],
		'global-require'       : 'error',
		'handle-callback-err'  : ['error', '^(err|error)$'],
		'no-buffer-constructor': 'error',
		'no-mixed-requires'    : [
			'error',
			{
				grouping : false,
				allowCall: true
			}
		],
		'no-new-require' : 'error',
		'no-path-concat' : 'error',
		'no-process-env' : 'warn',
		'no-process-exit': 'error',
		'no-sync'        : 'warn',

		// endregion

		// region Stylistic Issues

		'array-bracket-newline': [
			'error',
			{
				multiline: true,
				minItems : null
			}
		],
		'array-bracket-spacing': [
			'warn',
			'never',
			{
				singleValue    : false,
				arraysInArrays : false,
				objectsInArrays: false
			}
		],
		'array-element-newline': [
			'error',
			'consistent'
		],
		'block-spacing': ['warn', 'always'],
		'brace-style'  : ['error', '1tbs', {allowSingleLine: false}],
		// camelcase      : [ 'error', { ignoreDestructuring: true }],
		'comma-dangle' : [
			'error',
			{
				arrays   : 'only-multiline',
				objects  : 'only-multiline',
				imports  : 'only-multiline',
				exports  : 'only-multiline',
				functions: 'never'
			}
		],
		'comma-spacing': [
			'warn',
			{
				before: false,
				after : true
			}
		],
		'comma-style'              : ['error', 'last'],
		'computed-property-spacing': ['warn', 'never'],
		// 'consistent-this'          : [ 'error', 'self' ],
		'eol-last'                 : ['error', 'always'],
		'func-call-spacing'        : ['error', 'never'],
		'func-name-matching'       : ['error', 'always'],
		'func-names'               : 'off',
		// 'func-names'               : [ 'error', 'as-needed', { generators: 'as-needed' }],
		'func-style'               : ['error', 'declaration', {allowArrowFunctions: true}],
		'function-paren-newline'   : ['error', 'multiline'],
		'implicit-arrow-linebreak' : ['error', 'beside'],
		indent                     : [
			'warn',
			'tab',
			{
				SwitchCase         : 1,
				VariableDeclarator : 1,
				outerIIFEBody      : 1,
				MemberExpression   : 1,
				FunctionDeclaration: {
					body      : 1,
					parameters: 1
				},
				FunctionExpression: {
					body      : 1,
					parameters: 1
				},
				CallExpression        : {arguments: 1},
				ArrayExpression       : 1,
				ObjectExpression      : 1,
				ImportDeclaration     : 1,
				flatTernaryExpressions: false,
				ignoreComments        : false
			}
		],
		'key-spacing': [
			'warn',
			{
				singleLine: {
					beforeColon: false,
					afterColon : true,
					mode       : 'strict'
				},
				multiLine: {
					beforeColon: false,
					afterColon : true,
					align      : 'colon'
				}
			}
		],
		'keyword-spacing'     : 'warn',
		'linebreak-style'     : ['error', 'unix'],
		'lines-around-comment': [
			'error',
			{
				beforeBlockComment: true,
				allowBlockStart   : true,
				allowClassStart   : true,
				allowObjectStart  : true,
				allowArrayStart   : true,
				afterBlockComment : false
			}
		],
		'lines-between-class-members': ['error', 'always'],
		'multiline-comment-style'    : ['error', 'separate-lines'],
		'multiline-ternary'          : ['error', 'always-multiline'],
		'new-cap'                    : [
			'error',
			{
				newIsCap  : true,
				capIsNew  : true,
				properties: true
			}
		],
		'new-parens'              : 'error',
		'newline-per-chained-call': 'off',
		// 'newline-per-chained-call': [ 'error', { ignoreChainWithDepth: 0 }], // disabled because ignoreChainWithDepth = 0 is not allowed
		'no-array-constructor'    : 'error',
		'no-continue'             : 'off',
		'no-lonely-if'            : 'error',
		'no-mixed-operators'      : [
			'error',
			{
				groups: [
					// [ '&&', '||' ],
					['%', '**'],
					['&', '|', '^', '~', '<<', '>>', '>>>', '==', '!=', '===', '!==', '>', '>=', '<', '<='],
					['in', 'instanceof']
				],
				allowSamePrecedence: true
			}
		],
		'no-mixed-spaces-and-tabs': 'error',
		'no-multiple-empty-lines' : [
			'error',
			{
				max   : 2,
				maxEOF: 1
			}
		],
		'no-negated-condition': 'off',
		'no-nested-ternary'   : 'error',
		'no-new-object'       : 'error',
		'no-tabs'             : ['off', {allowIndentationTabs: true}],
		'no-trailing-spaces'  : [
			'warn',
			{
				skipBlankLines: true,
				ignoreComments: true
			}
		],
		'no-underscore-dangle': [
			'off',
			{
				allowAfterThis : true,
				allowAfterSuper: true
			}
		],
		'no-unneeded-ternary'             : 'error',
		'no-whitespace-before-property'   : 'error',
		'nonblock-statement-body-position': ['error', 'beside'],
		'object-curly-newline'            : [
			'error',
			{
				ObjectExpression: {
					consistent   : true,
					minProperties: 4
				},
				ObjectPattern: {
					consistent   : true,
					minProperties: 4
				},
				ImportDeclaration: {
					consistent   : true,
					minProperties: 4
				},
				ExportDeclaration: 'always'
			}
		],
		'object-curly-spacing': [
			'warn',
			'never',
			{
				objectsInObjects: false,
				arraysInObjects : false
			}
		],
		'object-property-newline'     : ['error', {allowAllPropertiesOnSameLine: false}],
		'one-var'                     : ['error', 'never'],
		'one-var-declaration-per-line': ['error', 'always'],
		'operator-assignment'         : ['error', 'always'],
		'operator-linebreak'          : ['error', 'before'],
		'padded-blocks'               : ['error', 'never'],
		'prefer-object-spread'        : 'error',
		'quote-props'                 : [
			'error',
			'as-needed',
			{
				keywords   : true,
				numbers    : true,
				unnecessary: true
			}
		],
		quotes        : ['error', 'single', {avoidEscape: true}],
		semi          : ['error', 'never', {beforeStatementContinuationChars: 'never'}],
		'semi-spacing': [
			'warn',
			{
				before: false,
				after : true
			}
		],
		'semi-style'                 : ['error', 'last'],
		'space-before-blocks'        : ['warn', 'always'],
		'space-before-function-paren': [
			'warn', {
				anonymous : 'always',
				named     : 'never',
				asyncArrow: 'always'
			}
		],
		'space-in-parens': ['warn', 'never', {exceptions: []}],
		'space-infix-ops': ['error', {int32Hint: true}],
		'space-unary-ops': [
			'error',
			{
				words   : true,
				nonwords: false
			}
		],
		'spaced-comment'      : ['warn', 'always', {exceptions: []}],
		'switch-colon-spacing': [
			'warn',
			{
				before: false,
				after : true
			}
		],
		'template-tag-spacing': ['warn', 'always'],
		'unicode-bom'         : ['error', 'never'],

		// endregion

		// region ECMAScript 6

		'arrow-body-style': ['error', 'as-needed'],
		'arrow-parens'    : ['error', 'as-needed'],
		'arrow-spacing'   : [
			'warn',
			{
				before: true,
				after : true
			}
		],
		'generator-star-spacing': [
			'error',
			{
				before: false,
				after : true
			}
		],
		'no-confusing-arrow'     : ['error', {allowParens: true}],
		'no-duplicate-imports'   : ['error', {includeExports: true}],
		'no-useless-computed-key': 'error',
		'no-useless-constructor' : 'error',
		'no-useless-rename'      : 'error',
		'no-var'                 : 'error',
		'object-shorthand'       : [
			'error',
			'always',
			{
				avoidQuotes              : true,
				ignoreConstructors       : true,
				avoidExplicitReturnArrows: true
			}
		],
		'prefer-arrow-callback': ['off', {allowUnboundThis: true}],
		'prefer-const'         : [
			'error',
			{
				destructuring         : 'all',
				ignoreReadBeforeAssign: true
			}
		],
		'prefer-destructuring': [
			'error',
			{
				VariableDeclarator: {
					array : false,
					object: true
				},
				AssignmentExpression: {
					array : false,
					object: true
				}
			},
			{enforceForRenamedProperties: false}
		],
		'prefer-numeric-literals': 'error',
		'prefer-rest-params'     : 'error',
		'prefer-spread'          : 'error',
		'prefer-template'        : 'warn',
		'rest-spread-spacing'    : ['warn', 'never'],
		'symbol-description'     : 'error',
		'template-curly-spacing' : ['warn', 'never'],
		'yield-star-spacing'     : ['warn', 'after']

		// endregion
	}
}
