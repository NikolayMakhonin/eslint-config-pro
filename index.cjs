'use strict'
/* eslint-disable dot-notation, quote-props */

// region rulesJavaScript
// doc: https://eslint.org/docs/rules/
const rulesJavaScript = {
  // region eslint:recommended copy

  'capitalized-comments'  : 'off',
  'complexity'            : 'off',
  'constructor-super'     : 'error',
  'for-direction'         : 'error',
  'getter-return'         : 'error',
  'id-blacklist'          : 'off',
  'id-length'             : 'off',
  'id-match'              : 'off',
  'indent-legacy'         : 'off',
  'jsx-quotes'            : 'off',
  'line-comment-position' : 'off',
  'lines-around-directive': 'off',
  'max-classes-per-file'  : 'off',
  'max-depth'             : 'off',
  'max-len'               : [
    'warn', {
      tabWidth              : 2,
      code                  : 120,
      comments              : 123,
      ignoreTrailingComments: true,
      ignoreUrls            : true,
      ignoreStrings         : true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals  : true,
    },
  ],
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
  'no-dupe-else-if'                : 'error',
  'no-duplicate-case'              : 'error',
  'no-empty-character-class'       : 'error',
  'no-empty-pattern'               : 'error',
  'no-eq-null'                     : 'off',
  'no-ex-assign'                   : 'error',
  'no-extra-boolean-cast'          : 'error',
  // 'no-extra-semi'                  : 'error',
  'no-fallthrough'                 : 'error',
  'no-func-assign'                 : 'error',
  'no-global-assign'               : 'error',
  'no-import-assign'               : 'error',
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
  'no-throw-literal'               : 'error',
  'no-unexpected-multiline'        : 'error',
  'no-unsafe-finally'              : 'error',
  'no-unsafe-negation'             : 'error',
  'no-unused-labels'               : 'error',
  'no-useless-escape'              : 'warn',
  'no-useless-return'              : 'off',
  'no-void'                        : 'off',
  'padding-line-between-statements': 'off',
  'prefer-promise-reject-errors'   : 'off',
  'prefer-reflect'                 : 'off',
  'require-jsdoc'                  : 'off',
  'require-unicode-regexp'         : 'off',
  'require-yield'                  : 'warn',
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
  'no-await-in-loop'         : 'off',
  'no-console'               : 'off',
  'no-control-regex'         : 'off',
  'no-debugger'              : 'warn',
  'no-extra-parens'          : [
    'off',
    'all',
    {
      returnAssign                      : false,
      nestedBinaryExpressions           : false,
      enforceForArrowConditionals       : false,
      enforceForNewInMemberExpressions  : false,
      enforceForFunctionPrototypeMethods: true,
    },
  ],
  'no-misleading-character-class': 'error',
  'no-prototype-builtins'        : 'error',
  'no-template-curly-in-string'  : 'error',
  'no-unreachable'               : 'warn',
  'require-atomic-updates'       : ['error', { allowProperties: true }],
  'no-new-func'                  : 'error',

  // endregion

  // region Best Practices

  'accessor-pairs'        : ['error', {setWithoutGet: true}],
  'array-callback-return' : 'error',
  'block-scoped-var'      : 'error',
  'class-methods-use-this': 'off',
  'consistent-return'     : ['off', {treatUndefinedAsUnspecified: false}],
  curly                   : ['error', 'all'],
  'default-case'          : 'error',
  eqeqeq                  : ['error', 'always', {'null': 'ignore'}],
  'guard-for-in'          : 'warn',
  'no-caller'             : 'error',
  'no-alert'              : 'warn',
  'no-else-return'        : ['warn', {allowElseIf: false}],
  'no-empty'              : 'warn',
  'no-empty-function'     : 'off',
  'no-eval'               : 'error',
  'no-extend-native'      : 'error',
  'no-extra-bind'         : 'error',
  'no-extra-label'        : 'error',
  'no-floating-decimal'   : 'error',
  'no-implicit-coercion'  : [
    'error',
    {
      allow : ['!!'],
      string: false,
    },
  ],
  'no-implicit-globals': 'error',
  'no-implied-eval'    : 'error',
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
        Property          : true,
        ImportDeclaration : false,
      },
      ignoreEOLComments: false,
    },
  ],
  'no-multi-str'                : 'error',
  'no-new'                      : 'warn',
  'no-new-wrappers'             : 'off',
  'no-octal-escape'             : 'error',
  'no-proto'                    : 'error',
  'no-return-assign'            : ['error', 'except-parens'],
  'no-return-await'             : 'error',
  'no-script-url'               : 'error',
  'no-self-compare'             : 'off',
  'no-sequences'                : 'error',
  'no-unmodified-loop-condition': 'error',
  'no-unused-expressions'       : 'warn',
  'no-useless-call'             : 'error',
  'no-useless-catch'            : 'warn',
  'no-useless-concat'           : 'warn',
  'no-warning-comments'         : [
    'warn',
    {
      terms   : ['TODO', 'FIXME'],
      location: 'start',
    },
  ],
  'no-with'      : 'error',
  radix          : 'error',
  'require-await': 'error',
  'vars-on-top'  : 'error',
  'wrap-iife'    : ['error', 'inside'],
  yoda           : ['off', 'never', {exceptRange: true}],

  'no-loss-of-precision'      : 'error',
  'no-promise-executor-return': 'warn',
  'no-setter-return'          : 'warn',
  'no-unreachable-loop'       : 'warn',
  'no-useless-backreference'  : 'warn',
  'default-param-last'        : 'off',
  'grouped-accessor-pairs'    : 'warn',
  'no-constructor-return'     : 'error',
  'no-invalid-this'           : 'off',
  'prefer-named-capture-group': 'off',
  'prefer-regex-literals'     : ['error', {disallowRedundantWrapping: true}],

  // endregion

  // region Strict Mode

  strict: ['error', 'safe'],

  // endregion

  // region Variables

  'init-declarations': ['off', 'never', {ignoreForLoopInit: true}],
  'no-label-var'     : 'error',
  'no-shadow'        : [
    'warn',
    {
      builtinGlobals: false,
      hoist         : 'functions',
      allow         : [],
    },
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
      caughtErrors      : 'all',
    },
  ],
  'no-use-before-define': [
    'error',
    {
      variables: true,
      functions: false,
      classes  : true,
    },
  ],

  // endregion

  // region Node.js and CommonJS

  'callback-return'      : ['off', ['done', 'cb', 'next', 'resolve', 'reject', 'callback', 'callbackfn', 'handler']],
  'global-require'       : 'off',
  'handle-callback-err'  : ['error', '^(err|error)$'],
  'no-buffer-constructor': 'error',
  'no-mixed-requires'    : [
    'error',
    {
      grouping : false,
      allowCall: true,
    },
  ],
  'no-new-require' : 'error',
  'no-path-concat' : 'error',
  'no-process-env' : 'off',
  'no-process-exit': 'off',
  'no-sync'        : 'off',

  // endregion

  // region Stylistic Issues

  'array-bracket-newline': [
    'warn',
    'consistent',
  ],
  'array-bracket-spacing': [
    'warn',
    'never',
    {
      singleValue    : false,
      arraysInArrays : false,
      objectsInArrays: false,
    },
  ],
  'array-element-newline': [
    'error',
    'consistent',
  ],
  'block-spacing': ['warn', 'always'],
  'brace-style'  : ['warn', 'stroustrup', {allowSingleLine: false}],
  // camelcase      : [ 'error', { ignoreDestructuring: true }],
  'comma-dangle' : [
    'error',
    {
      arrays   : 'always-multiline',
      objects  : 'always-multiline',
      imports  : 'always-multiline',
      exports  : 'always-multiline',
      functions: 'always-multiline',
    },
  ],
  'comma-spacing': [
    'warn',
    {
      before: false,
      after : true,
    },
  ],
  'comma-style'              : ['error', 'last'],
  'computed-property-spacing': ['warn', 'never'],
  // 'consistent-this'          : [ 'error', 'self' ],
  'eol-last'                 : ['error', 'always'],
  'func-call-spacing'        : ['error', 'never'],
  'func-name-matching'       : ['error', 'always'],
  'func-names'               : ['warn', 'always', {generators: 'always'}],
  'func-style'               : ['off', 'declaration', {allowArrowFunctions: true}],
  'function-paren-newline'   : ['warn', 'multiline'],
  'implicit-arrow-linebreak' : ['off', 'beside'],
  indent                     : [
    'warn',
    2,
    {
      SwitchCase         : 1,
      VariableDeclarator : 1,
      outerIIFEBody      : 1,
      MemberExpression   : 1,
      FunctionDeclaration: {
        body      : 1,
        parameters: 1,
      },
      FunctionExpression: {
        body      : 1,
        parameters: 1,
      },
      CallExpression          : {arguments: 1},
      ArrayExpression         : 1,
      ObjectExpression        : 1,
      ImportDeclaration       : 1,
      flatTernaryExpressions  : false,
      offsetTernaryExpressions: false,
      ignoreComments          : false,
    },
  ],
  'key-spacing': [
    'warn',
    {
      singleLine: {
        beforeColon: false,
        afterColon : true,
        mode       : 'strict',
      },
      multiLine: {
        beforeColon: false,
        afterColon : true,
        align      : 'colon',
      },
    },
  ],
  'keyword-spacing'     : 'warn',
  'linebreak-style'     : ['error', 'unix'],
  'lines-around-comment': [
    'off',
    {
      beforeLineComment: false,
      afterLineComment : false,

      beforeBlockComment: true,
      afterBlockComment : false,

      allowBlockStart : true,
      allowBlockEnd   : true,
      allowClassStart : true,
      allowClassEnd   : true,
      allowObjectStart: true,
      allowObjectEnd  : true,
      allowArrayStart : true,
      allowArrayEnd   : true,

      applyDefaultIgnorePatterns: true,
    },
  ],
  'lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }],
  'multiline-comment-style'    : ['off', 'separate-lines'],
  'multiline-ternary'          : ['off', 'always-multiline'],
  'new-cap'                    : [
    'error',
    {
      newIsCap  : false,
      capIsNew  : true,
      properties: true,
      // newIsCapExceptionPattern: '^type$',
    },
  ],
  'new-parens'          : 'error',
  'no-array-constructor': 'error',
  'no-continue'         : 'off',
  'no-lonely-if'        : 'error',
  'no-mixed-operators'  : [
    'error',
    {
      groups: [
        // [ '&&', '||' ],
        ['%', '**'],
        ['*', '**'],
        ['/', '**'],
        ['&', '^', '~', '<<', '>>', '>>>', '==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['|', '~', '<<', '>>', '>>>', '==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['in', 'instanceof'],
      ],
      allowSamePrecedence: true,
    },
  ],
  'no-mixed-spaces-and-tabs': 'error',
  'no-multiple-empty-lines' : [
    'error',
    {
      max   : 2,
      maxEOF: 1,
    },
  ],
  'no-negated-condition': 'off',
  'no-nested-ternary'   : 'off',
  'no-new-object'       : 'error',
  'no-tabs'             : ['off', {allowIndentationTabs: true}],
  'no-trailing-spaces'  : [
    'warn',
    {
      skipBlankLines: true,
      ignoreComments: true,
    },
  ],
  'no-underscore-dangle': [
    'off',
    {
      allowAfterThis : true,
      allowAfterSuper: true,
    },
  ],
  'no-unneeded-ternary'             : 'error',
  'no-whitespace-before-property'   : 'error',
  'nonblock-statement-body-position': ['error', 'beside'],
  'object-curly-newline'            : [
    'warn',
    {
      ObjectExpression: {
        consistent   : true,
        minProperties: 6,
      },
      ObjectPattern: {
        consistent   : true,
        minProperties: 6,
      },
      ImportDeclaration: {
        consistent   : true,
        minProperties: 6,
      },
      ExportDeclaration: {
        consistent   : true,
        minProperties: 6,
      },
    },
  ],
  'object-curly-spacing': [
    'off',
    'never',
    {
      objectsInObjects: false,
      arraysInObjects : false,
    },
  ],
  'object-property-newline': ['warn', {
    allowAllPropertiesOnSameLine: true,
  }],
  'one-var'                     : ['error', 'never'],
  'one-var-declaration-per-line': ['error', 'always'],
  'operator-assignment'         : ['error', 'always'],
  'operator-linebreak'          : [
    'error', 'before', {
      overrides: {'=': 'after'},
    },
  ],
  'padded-blocks'       : ['off', 'never'],
  'prefer-object-spread': 'error',
  'quote-props'         : [
    'warn',
    'as-needed',
    {
      keywords   : true,
      numbers    : true,
      unnecessary: true,
    },
  ],
  quotes         : ['warn', 'single', {avoidEscape: true}],
  'no-extra-semi': 'error',
  semi           : ['error', 'never', {beforeStatementContinuationChars: 'always'}],
  'semi-spacing' : [
    'warn',
    {
      before: false,
      after : true,
    },
  ],
  'semi-style'                 : ['error', 'first'],
  'space-before-blocks'        : ['warn', 'always'],
  'space-before-function-paren': [
    'warn', {
      anonymous : 'always',
      named     : 'never',
      asyncArrow: 'always',
    },
  ],
  'space-in-parens': ['warn', 'never', {exceptions: []}],
  'space-infix-ops': ['error', {int32Hint: true}],
  'space-unary-ops': [
    'error',
    {
      words   : true,
      nonwords: false,
    },
  ],
  'spaced-comment': [
    'warn',
    'always',
    {
      line: {
        markers   : ['/'],
        exceptions: ['/'],
      },
      block: {
        markers   : ['!'],
        exceptions: ['*'],
        balanced  : true,
      },
    },
  ],
  'switch-colon-spacing': [
    'warn',
    {
      before: false,
      after : true,
    },
  ],
  'template-tag-spacing': ['warn', 'always'],
  'unicode-bom'         : ['error', 'never'],
  'dot-location'        : ['warn', 'property'],
  'dot-notation'        : [
    'warn', {
      allowKeywords: true,
    },
  ],

  'default-case-last'             : 'warn',
  camelcase                       : 'off',
  'consistent-this'               : 'off',
  'function-call-argument-newline': ['off', 'consistent'],
  'id-denylist'                   : 'off',
  'newline-per-chained-call'      : ['off', {ignoreChainWithDepth: 2}],
  'prefer-exponentiation-operator': 'warn',

  // endregion

  // region ECMAScript 6

  'arrow-body-style': ['off', 'as-needed', { requireReturnForObjectLiteral: false }],
  'arrow-parens'    : ['off', 'as-needed'],
  'arrow-spacing'   : [
    'warn',
    {
      before: true,
      after : true,
    },
  ],
  'generator-star-spacing': [
    'warn',
    {
      before: true,
      after : false,
    },
  ],
  'no-confusing-arrow'     : ['off', {allowParens: true}],
  'no-duplicate-imports'   : ['error', {includeExports: false}],
  'no-useless-computed-key': 'error',
  'no-useless-constructor' : 'off',
  'no-useless-rename'      : 'error',
  'no-var'                 : 'error',
  'object-shorthand'       : [
    'off',
    'always',
    {
      avoidQuotes              : true,
      ignoreConstructors       : true,
      avoidExplicitReturnArrows: true,
    },
  ],
  'prefer-arrow-callback': ['off', {allowUnboundThis: true}],
  'prefer-const'         : [
    'warn',
    {
      destructuring         : 'all',
      ignoreReadBeforeAssign: true,
    },
  ],
  'prefer-destructuring': [
    'off',
    {
      VariableDeclarator: {
        array : false,
        object: true,
      },
      AssignmentExpression: {
        array : false,
        object: true,
      },
    },
    {enforceForRenamedProperties: false},
  ],
  'prefer-numeric-literals': 'error',
  'prefer-rest-params'     : 'off',
  'prefer-spread'          : 'off',
  'prefer-template'        : 'off',
  'rest-spread-spacing'    : ['warn', 'never'],
  'symbol-description'     : 'error',

  // Temporary disabled: TypeError: Cannot read property 'value' of null (waiting for update babel-eslint)
  'template-curly-spacing': ['warn', 'never'],

  'yield-star-spacing'   : ['warn', 'after'],
  'no-restricted-exports': 'off',

  // endregion
}
// endregion

// region rulesTypeScript
// docs: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/
const rulesTypeScript = {
  'no-extra-parens'                   : 'off',
  '@typescript-eslint/no-extra-parens': [
    'off',
    'all',
    {
      ...rulesJavaScript['no-extra-parens'][2],
    },
  ],

  'no-shadow'                   : 'off',
  '@typescript-eslint/no-shadow': [
    'error',
    {
      ...rulesJavaScript['no-shadow'][1],
      hoist                                     : 'never',
      ignoreTypeValueShadow                     : false,
      ignoreFunctionTypeParameterNameValueShadow: true,
    },
  ],

  'no-use-before-define'                   : 'off',
  '@typescript-eslint/no-use-before-define': [
    'error',
    {
      ...rulesJavaScript['no-use-before-define'][1],
      classes             : false,
      enums               : true,
      typedefs            : false,
      ignoreTypeReferences: true,
    },
  ],

  indent                     : 'off',
  '@typescript-eslint/indent': [
    'warn',
    2,
    {
      ...rulesJavaScript['indent'][2],
    },
  ],

  'no-unused-vars'                   : 'off',
  '@typescript-eslint/no-unused-vars': [
    'warn',
    {
      ...rulesJavaScript['no-unused-vars'][1],
    },
  ],

  '@typescript-eslint/ban-types': [
    'error', {
      types: {
        object: false,
        '{}'  : false,
      },
    },
  ],

  'no-dupe-class-members'                   : 'off',
  '@typescript-eslint/no-dupe-class-members': 'error',

  'no-redeclare'                   : 'off',
  '@typescript-eslint/no-redeclare': 'off',

  'no-empty-function'                   : 'off',
  '@typescript-eslint/no-empty-function': 'off',

  'no-extra-semi'                   : 'off',
  '@typescript-eslint/no-extra-semi': ['error'],

  '@typescript-eslint/no-misused-promises': [
    'error',
    {
      checksConditionals: false,
      checksVoidReturn  : { },
      checksSpreads     : true,
    },
  ],
  '@typescript-eslint/consistent-type-assertions': [
    'warn',
    {
      assertionStyle             : 'as',
      objectLiteralTypeAssertions: 'allow-as-parameter',
    },
  ],

  '@typescript-eslint/no-non-null-assertion'         : 'error',
  '@typescript-eslint/no-unsafe-assignment'          : 'off',
  '@typescript-eslint/no-unsafe-member-access'       : 'off',
  '@typescript-eslint/no-unsafe-call'                : 'off',
  '@typescript-eslint/ban-ts-comment'                : 'off',
  '@typescript-eslint/no-var-requires'               : 'warn',
  '@typescript-eslint/no-this-alias'                 : 'off',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/no-useless-constructor'        : 'off',
  '@typescript-eslint/no-inferrable-types'           : 'off',
  '@typescript-eslint/no-empty-interface'            : 'off',
  '@typescript-eslint/no-explicit-any'               : 'off',
}
// endregion

module.exports = {
  extends: [
    'eslint:recommended',
  ],
  // plugins  : ['node'],
  rules: {
    ...rulesJavaScript,
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
        ...rulesTypeScript,
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
    {
      files: ['**/*.md'],
      rules: {
        'no-undef'      : 'off',
        'no-unused-vars': 'off',
      },
    },
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
        'func-names'                       : 'off',
        'no-shadow'                        : 'off',
        '@typescript-eslint/no-shadow'     : 'off',
        'no-unused-vars'                   : 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'array-bracket-newline'            : 'off',
        'consistent-return'                : ['off', {treatUndefinedAsUnspecified: false}],
        'func-name-matching'               : ['warn', 'always'],
        'function-paren-newline'           : 'off',
        'new-cap'                          : 'off',
        'no-debugger'                      : 'off',
        'no-empty'                         : 'off',
        'no-eval'                          : 'off',
        'no-loop-func'                     : 'warn',
        'no-new'                           : 'off',
        'no-new-func'                      : 'off',
        'no-throw-literal'                 : 'off',
        'no-useless-call'                  : 'off',
        'no-useless-catch'                 : 'off',
        'prefer-const'                     : 'off',
        'no-useless-concat'                : 'off',
        'lines-between-class-members'      : 'off',
      },
    },
    // endregion
  ],
}
