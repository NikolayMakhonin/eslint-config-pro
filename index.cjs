'use strict'
/* eslint-disable dot-notation, quote-props */
const rules = require('./rules.cjs')

module.exports = {
  extends: [
    'eslint:recommended',
  ],
  // plugins  : ['node'],
  rules: {
    ...rules.javaScript,
  },
  env: {
    es6    : true,
    node   : true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType : 'module',
  },
  settings: {
    'html/indent'           : '+2',
    'html/report-bad-indent': 'warn',
    'html/html-extensions'  : [
      '.html',
      '.svelte',
    ],
  },
  overrides: [
    // region Common JS
    {
      files: ['*.js', '*.cjs'],
      rules: {
        'global-require': 'off',
      },
      parserOptions: {
        sourceType: 'script',
      },
    },
    // endregion
    // region Scripts
    {
      files        : ['*.js', '*.html'],
      parserOptions: {
        sourceType  : 'script',
        ecmaFeatures: {
          globalReturn: false,
        },
      },
    },
    // endregion
    // region TypeScript
    {
      files  : ['**/*.ts', '**/*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
      ],
      parser : '@typescript-eslint/parser',
      plugins: [
        '@typescript-eslint',
      ],
      parserOptions: {
        project: [
          './tsconfig.json',
        ],
        extraFileExtensions: [
          '.svelte',
        ],
      },
      rules: {
        ...rules.typeScript,
        // 'no-undef': 'off', // due to: https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
      },
    },
    // endregion
    // region Svelte
    {
      files    : ['*.svelte'],
      processor: 'svelte3/svelte3',
      env      : {
        es6    : true,
        node   : false,
        browser: true,
      },
      plugins: ['svelte3'],
      rules  : {
        'no-self-assign'       : 'off',
        'no-unused-expressions': ['warn', { 'allowShortCircuit': true }],
        // "comma-dangle": [
        // 	"error",
        // 	{
        // 		"arrays": "always-multiline",
        // 		"objects": "always-multiline",
        // 		"imports": "always-multiline",
        // 		"exports": "always-multiline"
        // 	},
        // ]
      },
      settings: {
        'svelte3/typescript': true,
      },
    },
    // endregion
    // region Html
    {
      files: ['*.html', '*.htm'],
      rules: {
        'semi'              : ['error', 'always'],
        'semi-style'        : ['error', 'last'],
        'no-extra-semi'     : 'off',
        'prefer-rest-params': 'off',
        'no-var'            : 'off',
        'vars-on-top'       : 'off',
        'strict'            : ['error', 'global'],
        'comma-dangle'      : 'off',
      },
      env: {
        es6    : false,
        node   : false,
        browser: true,
      },
      plugins      : ['html'],
      parser       : 'espree',
      parserOptions: {
        ecmaVersion: 5,
        sourceType : 'script',
      },
    },
    // endregion
    // region Markdown
    // {
    //   files: ['**/*.md'],
    //   rules: {
    //     'no-undef'      : 'off',
    //     'no-unused-vars': 'off',
    //   },
    // },
    // endregion
    // region Tests
    {
      files: [
        '*.{test,perf,e2e}.*',
        '**/{test,tests}/**',
      ],
      env: {
        mocha: true,
      },
      rules: {
        ...rules.tests,
      },
    },
    // endregion
    // region EnvTools
    {
      files: [
        './{env,tools}/**',
      ],
      rules: {
        ...rules.envTools,
      },
    },
    // endregion
  ],
}
