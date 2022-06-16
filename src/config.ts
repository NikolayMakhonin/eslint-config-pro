/* eslint-disable dot-notation, quote-props */
import * as features from './features'
import * as patterns from './patterns'
import {rules} from './rules'
import {Linter} from 'eslint'

export const config: Linter.Config = {
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
  globals: {
    BigInt: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType : 'module',
  },
  ignorePatterns: [
    '**/.*/**',
    '**/node_modules/**',
    '!**/.*',
    ...!features.svelte ? patterns.svelte : [],
    ...!features.html ? patterns.html : [],
  ],
  'settings': {
    'node': {
      'allowModules' : ['electron', 'svelte'],
      'tryExtensions': ['.js', '.ts', '.node'],
    },
  },
  overrides: [
    // region *.cjs
    {
      files: patterns.cjs,
      env  : {
        browser: false,
      },
      plugins: ['node'],
      rules  : {
        'node/global-require': 'off',
      },
      parserOptions: {
        sourceType: 'script',
      },
    },
    // endregion
    // region *.js
    {
      files  : patterns.js,
      plugins: ['node'],
      rules  : {
        'node/global-require': 'off',
        'strict'             : 'off',
      },
    },
    // endregion
    // region *.mjs
    {
      files: patterns.mjs,
      env  : {
        browser: false,
      },
      plugins: ['node'],
      rules  : {
        'node/global-require': 'error',
      },
    },
    // endregion
    // region Scripts
    {
      files: [
        ...features.html ? patterns.html : [],
      ],
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
        ...patterns.typeScript,
      ],
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
        project            : './tsconfig.eslint.json',
        extraFileExtensions: [
          features.svelte && '.svelte',
        ].filter(o => o),
      },
      rules: {
        ...rules.common.js,
        ...rules.common.ts,
        // 'no-undef': 'off', // due to: https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
      },
    },
    // endregion
    // region Tests
    {
      files: patterns.tests,
      env  : {
        mocha: true,
      },
      globals: {
        assert: true,
        expect: true,
      },
      rules: {
        ...rules.tests.js,
      },
      overrides: [{
        files: patterns.typeScript,
        rules: {
          ...rules.tests.ts,
        },
      }],
    },
    // endregion
    // region EnvTools
    {
      files: patterns.envTools,
      rules: {
        ...rules.envTools.js,
      },
      overrides: [{
        files: patterns.typeScript,
        rules: {
          ...rules.envTools.ts,
        },
      }],
    },
    // endregion
    // region Svelte
    features.svelte && {
      files    : patterns.svelte,
      processor: 'svelte3/svelte3',
      env      : {
        node: false,
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
      files: patterns.html,
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
        es6 : false,
        node: false,
      },
      plugins : ['html'],
      parser  : 'espree',
      settings: {
        'html/indent'           : '+2',
        'html/report-bad-indent': 'warn',
        'html/html-extensions'  : [
          '.htm',
          '.html',
          features.svelte && '.svelte',
        ].filter(o => o),
      },
      parserOptions: {
        ecmaVersion: 5,
        sourceType : 'script',
      },
    },
    // endregion
    // region Markdown
    // {
    //   files: patterns.md,
    //   rules: {
    //     'no-undef'      : 'off',
    //     'no-unused-vars': 'off',
    //   },
    // },
    // endregion
  ],
}

config.overrides = config.overrides.filter(o => o?.files?.length)
