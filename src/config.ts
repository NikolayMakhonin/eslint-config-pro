'use strict'
/* eslint-disable dot-notation, quote-props */
const rules = require('./rules')
const {moduleExists} = require('./helpers')

const features = {
  svelte: moduleExists('eslint-plugin-svelte3'),
  html  : moduleExists('eslint-plugin-html'),
}

module.exports = {
  extends: [
    'eslint:recommended',
  ],
  plugins: ['import'],
  rules  : {
    ...rules.common.js,
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
  ignorePatterns: [
    !features.svelte && '**/*.svelte',
    !features.html && '**/*.{html,htm}',
  ].filter(o => o),
  overrides: [
    // region *.cjs
    {
      files  : ['**/*.cjs'],
      plugins: ['node'],
      rules  : {
        'global-require': 'off',
      },
      parserOptions: {
        sourceType: 'script',
      },
    },
    // endregion
    // region *.js
    {
      files  : ['**/*.js'],
      plugins: ['node'],
      rules  : {
        'global-require': 'off',
        'strict'        : 'off',
      },
    },
    // endregion
    // region *.mjs
    {
      files  : ['**/*.mjs'],
      plugins: ['node'],
      rules  : {
        'global-require': 'error',
      },
    },
    // endregion
    // region Scripts
    {
      files: [
        features.html && '**/*.{html,htm}',
      ].filter(o => o),
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
      files: [
        '**/*.{ts,tsx}',
        features.svelte && '**/*.svelte',
      ].filter(o => o),
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parser : '@typescript-eslint/parser',
      plugins: [
        '@typescript-eslint',
      ],
      parserOptions: {
        tsconfigRootDir    : process.cwd(),
        project            : './tsconfig.json',
        extraFileExtensions: [
          features.svelte && '.svelte',
        ].filter(o => o),
      },
      rules: {
        ...rules.common.ts,
        // 'no-undef': 'off', // due to: https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
      },
    },
    // endregion
    // region Svelte
    features.svelte && {
      files    : ['**/*.svelte'],
      processor: 'svelte3/svelte3',
      env      : {
        es6    : true,
        node   : false,
        browser: true,
      },
      plugins: ['svelte3'],
      rules  : {
        ...rules.svelte.js,
        ...rules.svelte.ts,
      },
      settings: {
        'svelte3/typescript'     : true,
        'svelte3/ignore-warnings': warn => {
          return rules.svelte.ignore[warn.code]
        },
      },
    },
    // endregion
    // region Html
    features.html && {
      files: ['**/*.{html,htm}'],
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
        '**/*.{test,perf,e2e}.*',
        '**/{test,tests}/**',
      ],
      env: {
        mocha: true,
      },
      rules: {
        ...rules.tests.js,
      },
      overrides: [{
        files: ['**/*.{ts,tsx}'],
        rules: {
          ...rules.tests.ts,
        },
      }],
    },
    // endregion
    // region EnvTools
    {
      files: ['./{env,tools,deploy}/**', './*', './**/.*', '**/*.config.*'],
      rules: {
        ...rules.envTools.js,
      },
      overrides: [{
        files: ['**/*.{ts,tsx}'],
        rules: {
          ...rules.envTools.ts,
        },
      }],
    },
    // endregion
  ].filter(o => o?.files?.length),
}