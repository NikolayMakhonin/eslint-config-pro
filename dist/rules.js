'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tsRuleNames = require('./tsRuleNames.js');

/* eslint-disable quote-props */
// region rulesJavaScript
// doc: https://eslint.org/docs/rules/
const rulesJavaScript = {
    // region eslint:recommended copy
    'capitalized-comments': 'off',
    'complexity': 'off',
    'constructor-super': 'error',
    'for-direction': 'error',
    'getter-return': 'error',
    // 'id-blacklist'          : 'off', // deprecated
    'id-length': 'off',
    'id-match': 'off',
    // 'indent-legacy'         : 'off', // deprecated
    'jsx-quotes': 'off',
    'line-comment-position': 'off',
    // 'lines-around-directive': 'off', // deprecated
    'max-classes-per-file': 'off',
    'max-depth': 'off',
    'max-len': [
        'warn', {
            tabWidth: 2,
            code: 120,
            comments: 123,
            ignoreComments: true,
            ignoreTrailingComments: true,
            ignoreUrls: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreRegExpLiterals: true,
        },
    ],
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'max-nested-callbacks': 'off',
    'max-params': 'off',
    'max-statements': 'off',
    'max-statements-per-line': 'off',
    // 'newline-after-var'              : 'off', // deprecated
    // 'newline-before-return'          : 'off', // deprecated
    'no-bitwise': 'off',
    'no-case-declarations': 'error',
    // 'no-catch-shadow'                : 'off', // deprecated
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-const-assign': 'error',
    'no-constant-condition': ['warn', { checkLoops: false }],
    'no-delete-var': 'error',
    'no-div-regex': 'off',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-dupe-else-if': 'error',
    'no-duplicate-case': 'error',
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-eq-null': 'off',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    // 'no-extra-semi'                  : 'warn',
    'no-fallthrough': 'error',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-import-assign': 'error',
    'no-inline-comments': 'off',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-magic-numbers': 'off',
    'no-multi-assign': 'off',
    // 'no-native-reassign'             : 'off', // deprecated
    // 'no-negated-in-lhs'              : 'off', // deprecated
    'no-new-symbol': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-restricted-globals': 'off',
    'no-restricted-imports': 'off',
    // 'no-restricted-modules'          : 'off', // deprecated
    'no-restricted-properties': 'off',
    'no-restricted-syntax': 'off',
    'no-self-assign': 'error',
    // 'no-spaced-func'                 : 'off', // deprecated
    'no-sparse-arrays': 'error',
    'no-ternary': 'off',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-unexpected-multiline': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unused-labels': 'error',
    'no-useless-escape': 'warn',
    'no-useless-return': 'off',
    'no-void': 'off',
    'padding-line-between-statements': 'off',
    'prefer-promise-reject-errors': 'off',
    // 'prefer-reflect'                 : 'off', // deprecated
    // 'require-jsdoc'                  : 'off', // deprecated
    'require-unicode-regexp': 'off',
    'require-yield': 'warn',
    'sort-imports': 'off',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'use-isnan': 'error',
    // 'valid-jsdoc'                    : 'off', // deprecated
    'valid-typeof': 'error',
    'wrap-regex': 'off',
    'prefer-object-has-own': 'off',
    // endregion
    // region Possible Errors
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'off',
    'no-console': 'off',
    'no-control-regex': 'off',
    'no-debugger': 'warn',
    'no-extra-parens': [
        'off',
        'all',
        {
            returnAssign: false,
            nestedBinaryExpressions: false,
            enforceForArrowConditionals: false,
            enforceForNewInMemberExpressions: false,
            enforceForFunctionPrototypeMethods: true,
        },
    ],
    'no-misleading-character-class': 'error',
    'no-prototype-builtins': 'error',
    'no-template-curly-in-string': 'error',
    'no-unreachable': 'warn',
    'require-atomic-updates': ['error', { allowProperties: true }],
    'no-new-func': 'error',
    'no-constant-binary-expression': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-unused-private-class-members': 'off',
    // endregion
    // region Best Practices
    'accessor-pairs': ['error', { setWithoutGet: true }],
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'class-methods-use-this': 'off',
    'consistent-return': ['off', { treatUndefinedAsUnspecified: false }],
    curly: ['error', 'all'],
    'default-case': 'error',
    eqeqeq: ['error', 'always', { 'null': 'ignore' }],
    'guard-for-in': 'warn',
    'no-caller': 'error',
    'no-alert': 'warn',
    'no-else-return': ['warn', { allowElseIf: false }],
    'no-empty': 'warn',
    'no-empty-function': 'off',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': [
        'error',
        {
            allow: ['!!'],
            string: false,
        },
    ],
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'off',
    'no-loop-func': 'error',
    'no-multi-spaces': [
        'warn',
        {
            exceptions: {
                VariableDeclarator: true,
                BinaryExpression: true,
                Property: true,
                ImportDeclaration: false,
            },
            ignoreEOLComments: false,
        },
    ],
    'no-multi-str': 'error',
    'no-new': 'warn',
    'no-new-wrappers': 'off',
    'no-octal-escape': 'error',
    'no-proto': 'error',
    'no-return-assign': ['error', 'except-parens'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'off',
    'no-sequences': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': ['warn', { 'allowShortCircuit': true }],
    'no-useless-call': 'error',
    'no-useless-catch': 'warn',
    'no-useless-concat': 'warn',
    'no-warning-comments': [
        'warn',
        {
            terms: ['TODO', 'FIXME'],
            location: 'start',
        },
    ],
    'no-with': 'error',
    radix: 'error',
    'require-await': 'error',
    'vars-on-top': 'error',
    'wrap-iife': ['error', 'inside'],
    yoda: ['off', 'never', { exceptRange: true }],
    'no-loss-of-precision': 'error',
    'no-promise-executor-return': 'warn',
    'no-setter-return': 'warn',
    'no-unreachable-loop': 'warn',
    'no-useless-backreference': 'warn',
    'default-param-last': 'off',
    'grouped-accessor-pairs': 'warn',
    'no-constructor-return': 'error',
    'no-invalid-this': 'off',
    'prefer-named-capture-group': 'off',
    'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
    // endregion
    // region Strict Mode
    strict: ['error', 'safe'],
    // endregion
    // region Variables
    'init-declarations': ['off', 'never', { ignoreForLoopInit: true }],
    'no-label-var': 'error',
    'no-shadow': [
        'off',
        {
            builtinGlobals: false,
            hoist: 'functions',
            allow: [],
        },
    ],
    'no-shadow-restricted-names': 'error',
    'no-undef': ['error', { 'typeof': true }],
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-unused-vars': [
        'warn',
        {
            vars: 'all',
            args: 'none',
            ignoreRestSiblings: false,
            caughtErrors: 'none',
        },
    ],
    'no-use-before-define': [
        'error',
        {
            variables: true,
            functions: false,
            classes: true,
        },
    ],
    // endregion
    // region Node.js and CommonJS
    // 'callback-return'      : ['off', ['done', 'cb', 'next', 'resolve', 'reject', 'callback', 'callbackfn', 'handler']], // deprecated
    'node/global-require': 'off',
    // 'handle-callback-err'  : ['error', '^(err|error)$'], // deprecated
    // 'no-buffer-constructor': 'error', // deprecated
    // 'no-mixed-requires'    : [
    //   'error',
    //   {
    //     grouping : false,
    //     allowCall: true,
    //   },
    // ], // deprecated
    // 'no-new-require' : 'error', // deprecated
    // 'no-path-concat' : 'error', // deprecated
    // 'no-process-env' : 'off', // deprecated
    // 'no-process-exit': 'off', // deprecated
    // 'no-sync'        : 'off', // deprecated
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
            singleValue: false,
            arraysInArrays: false,
            objectsInArrays: false,
        },
    ],
    'array-element-newline': [
        'error',
        'consistent',
    ],
    'block-spacing': ['warn', 'always'],
    'brace-style': ['warn', 'stroustrup', { allowSingleLine: false }],
    // camelcase      : [ 'error', { ignoreDestructuring: true }],
    'comma-dangle': [
        'warn',
        {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'always-multiline',
        },
    ],
    'comma-spacing': [
        'warn',
        {
            before: false,
            after: true,
        },
    ],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['warn', 'never'],
    // 'consistent-this'          : [ 'error', 'self' ],
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'func-name-matching': ['off', 'always'],
    'func-names': ['warn', 'always', { generators: 'always' }],
    'func-style': ['off', 'declaration', { allowArrowFunctions: true }],
    'function-paren-newline': ['warn', 'multiline-arguments'],
    'implicit-arrow-linebreak': ['off', 'beside'],
    indent: [
        'warn',
        2,
        {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            MemberExpression: 1,
            FunctionDeclaration: {
                body: 1,
                parameters: 1,
            },
            FunctionExpression: {
                body: 1,
                parameters: 1,
            },
            CallExpression: { arguments: 1 },
            ArrayExpression: 1,
            ObjectExpression: 1,
            ImportDeclaration: 1,
            flatTernaryExpressions: false,
            offsetTernaryExpressions: false,
            ignoreComments: false,
        },
    ],
    'key-spacing': [
        'warn',
        {
            singleLine: {
                beforeColon: false,
                afterColon: true,
                mode: 'strict',
            },
            multiLine: {
                beforeColon: false,
                afterColon: true,
                align: 'colon',
            },
        },
    ],
    'keyword-spacing': 'warn',
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': [
        'off',
        {
            beforeLineComment: false,
            afterLineComment: false,
            beforeBlockComment: true,
            afterBlockComment: false,
            allowBlockStart: true,
            allowBlockEnd: true,
            allowClassStart: true,
            allowClassEnd: true,
            allowObjectStart: true,
            allowObjectEnd: true,
            allowArrayStart: true,
            allowArrayEnd: true,
            applyDefaultIgnorePatterns: true,
        },
    ],
    'lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }],
    'multiline-comment-style': ['off', 'separate-lines'],
    'multiline-ternary': ['off', 'always-multiline'],
    'new-cap': [
        'error',
        {
            newIsCap: false,
            capIsNew: true,
            properties: true,
            // newIsCapExceptionPattern: '^type$',
        },
    ],
    'new-parens': 'error',
    'no-array-constructor': 'error',
    'no-continue': 'off',
    'no-lonely-if': 'error',
    'no-mixed-operators': [
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
    'no-multiple-empty-lines': [
        'error',
        {
            max: 2,
            maxEOF: 1,
        },
    ],
    'no-negated-condition': 'off',
    'no-nested-ternary': 'off',
    'no-new-object': 'error',
    'no-tabs': ['off', { allowIndentationTabs: true }],
    'no-trailing-spaces': [
        'warn',
        {
            skipBlankLines: true,
            ignoreComments: true,
        },
    ],
    'no-underscore-dangle': [
        'off',
        {
            allowAfterThis: true,
            allowAfterSuper: true,
        },
    ],
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': ['error', 'beside'],
    'object-curly-newline': [
        'warn',
        {
            ObjectExpression: {
                consistent: true,
                minProperties: 6,
            },
            ObjectPattern: {
                consistent: true,
                minProperties: 6,
            },
            ImportDeclaration: {
                consistent: true,
                minProperties: 6,
            },
            ExportDeclaration: {
                consistent: true,
                minProperties: 6,
            },
        },
    ],
    'object-curly-spacing': [
        'off',
        'never',
        {
            objectsInObjects: false,
            arraysInObjects: false,
        },
    ],
    'object-property-newline': ['warn', {
            allowAllPropertiesOnSameLine: true,
        }],
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': ['error', 'always'],
    'operator-assignment': ['off', 'always'],
    'operator-linebreak': [
        'warn',
        'before',
        {
            overrides: { '=': 'after' },
        },
    ],
    'padded-blocks': ['off', 'never'],
    'prefer-object-spread': 'error',
    'quote-props': [
        'warn',
        'as-needed',
        {
            keywords: true,
            numbers: true,
            unnecessary: true,
        },
    ],
    quotes: ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'no-extra-semi': 'warn',
    semi: ['warn', 'never', { beforeStatementContinuationChars: 'always' }],
    'semi-spacing': [
        'warn',
        {
            before: false,
            after: true,
        },
    ],
    'semi-style': ['warn', 'first'],
    'space-before-blocks': ['warn', 'always'],
    'space-before-function-paren': [
        'warn', {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
        },
    ],
    'space-in-parens': ['warn', 'never', { exceptions: [] }],
    // disabled because it can't ignore Promise<void>|void
    'space-infix-ops': ['off', { int32Hint: true }],
    'space-unary-ops': [
        'error',
        {
            words: true,
            nonwords: false,
        },
    ],
    'spaced-comment': [
        'warn',
        'always',
        {
            line: {
                markers: ['/'],
                exceptions: ['/'],
            },
            block: {
                markers: ['!'],
                exceptions: ['*'],
                balanced: true,
            },
        },
    ],
    'switch-colon-spacing': [
        'warn',
        {
            before: false,
            after: true,
        },
    ],
    'template-tag-spacing': ['warn', 'always'],
    'unicode-bom': ['error', 'never'],
    'dot-location': ['warn', 'property'],
    // doe to this error: https://github.com/standard/eslint-config-standard-with-typescript/issues/303
    'dot-notation': 'off',
    // 'dot-notation'        : [
    //   'warn', {
    //     allowKeywords: true,
    //   },
    // ],
    'default-case-last': 'warn',
    camelcase: 'off',
    'consistent-this': 'off',
    'function-call-argument-newline': ['off', 'consistent'],
    'id-denylist': 'off',
    'newline-per-chained-call': ['off', { ignoreChainWithDepth: 2 }],
    'prefer-exponentiation-operator': 'warn',
    // endregion
    // region ECMAScript 6
    'arrow-body-style': ['off', 'as-needed', { requireReturnForObjectLiteral: false }],
    'arrow-parens': ['off', 'as-needed'],
    'arrow-spacing': [
        'warn',
        {
            before: true,
            after: true,
        },
    ],
    'generator-star-spacing': [
        'warn',
        {
            before: true,
            after: false,
        },
    ],
    'no-confusing-arrow': ['off', { allowParens: true }],
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'off',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': [
        'off',
        'always',
        {
            avoidQuotes: true,
            ignoreConstructors: true,
            avoidExplicitReturnArrows: true,
        },
    ],
    'prefer-arrow-callback': ['off', { allowUnboundThis: true }],
    'prefer-const': [
        'warn',
        {
            destructuring: 'all',
            ignoreReadBeforeAssign: true,
        },
    ],
    'prefer-destructuring': [
        'off',
        {
            VariableDeclarator: {
                array: false,
                object: true,
            },
            AssignmentExpression: {
                array: false,
                object: true,
            },
        },
        { enforceForRenamedProperties: false },
    ],
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'off',
    'prefer-spread': 'off',
    'prefer-template': 'off',
    'rest-spread-spacing': ['warn', 'never'],
    'symbol-description': 'error',
    // Temporary disabled: TypeError: Cannot read property 'value' of null (waiting for update babel-eslint)
    'template-curly-spacing': ['warn', 'never'],
    'yield-star-spacing': ['warn', 'after'],
    'no-restricted-exports': 'off',
    // endregion
    // region import
    // 'no-duplicate-imports'     : ['off', {includeExports: false}], // deprecated
    'import/no-duplicates': ['error', { considerQueryString: false }],
    'import/no-dynamic-require': 'off',
    'import/no-unresolved': 'off',
    // endregion
    // region node
    'node/no-deprecated-api': ['error', {
            ignoreModuleItems: [
                'fs.exists',
            ],
            ignoreGlobalItems: [
                'new Buffer()',
                'process.binding',
            ],
        }],
    // endregion
};
// endregion
// region rulesTypeScript
// docs: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/
const rulesTypeScript = {
    '@typescript-eslint/comma-dangle': [
        'warn',
        Object.assign(Object.assign({}, rulesJavaScript['comma-dangle'][1]), { enums: 'always-multiline', generics: 'always-multiline', tuples: 'always-multiline' }),
    ],
    '@typescript-eslint/no-shadow': [
        'off',
        Object.assign(Object.assign({}, rulesJavaScript['no-shadow'][1]), { hoist: 'never', ignoreTypeValueShadow: false, ignoreFunctionTypeParameterNameValueShadow: true }),
    ],
    '@typescript-eslint/no-use-before-define': [
        'error',
        Object.assign(Object.assign({}, rulesJavaScript['no-use-before-define'][1]), { classes: false, enums: true, typedefs: false, ignoreTypeReferences: true }),
    ],
    '@typescript-eslint/ban-types': [
        'error', {
            types: {
                object: false,
                '{}': false,
            },
        },
    ],
    '@typescript-eslint/no-misused-promises': [
        'off',
        {
            checksConditionals: false,
            checksVoidReturn: {},
            checksSpreads: true,
        },
    ],
    '@typescript-eslint/consistent-type-assertions': [
        'off',
        {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'allow-as-parameter',
        },
    ],
    // TypeError: Cannot read property '0' of undefined Occurred while linting
    // https://github.com/typescript-eslint/typescript-eslint/blob/1d55a7511b38d8e2b2eabe59f639e0a865e6c93f/packages/eslint-plugin/src/rules/unbound-method.ts#L272
    // decl.parameters is undefined
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-var-requires': 'warn',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/adjacent-overload-signatures': 'warn',
    '@typescript-eslint/array-type': 'off',
    '@typescript-eslint/ban-tslint-comment': 'warn',
    '@typescript-eslint/class-literal-property-style': 'off',
    '@typescript-eslint/consistent-indexed-object-style': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/consistent-type-exports': 'warn',
    '@typescript-eslint/consistent-type-imports': ['off', { prefer: 'type-imports' }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': ['warn', { accessibility: 'no-public' }],
    // requireLast should be multiline
    '@typescript-eslint/member-delimiter-style': ['off', {
            'multiline': {
                'delimiter': 'comma',
                'requireLast': true,
            },
            'singleline': {
                'delimiter': 'comma',
                'requireLast': true,
            },
            'multilineDetection': 'brackets',
            'overrides': {
                'interface': {
                    'multiline': {
                        'delimiter': 'none',
                        'requireLast': true,
                    },
                },
            },
        }],
    '@typescript-eslint/member-ordering': 'off',
    '@typescript-eslint/method-signature-style': ['warn', 'method'],
    '@typescript-eslint/naming-convention': 'off',
    // should allow any/unknown types
    '@typescript-eslint/no-base-to-string': 'off',
    '@typescript-eslint/no-confusing-non-null-assertion': 'warn',
    '@typescript-eslint/no-confusing-void-expression': 'warn',
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    '@typescript-eslint/no-dynamic-delete': 'off',
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-extraneous-class': ['warn', {
            allowConstructorOnly: true,
            allowEmpty: true,
            allowWithDecorator: true,
        }],
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-invalid-void-type': 'warn',
    '@typescript-eslint/no-meaningless-void-operator': 'warn',
    '@typescript-eslint/no-misused-new': 'warn',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'warn',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
    '@typescript-eslint/no-redundant-type-constituents': 'warn',
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-type-alias': 'off',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
    '@typescript-eslint/no-unnecessary-condition': ['off', {
            allowConstantLoopConditions: true,
            allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: true,
        }],
    '@typescript-eslint/no-unnecessary-qualifier': 'warn',
    '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
    '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
    '@typescript-eslint/no-unnecessary-type-constraint': 'warn',
    '@typescript-eslint/no-useless-empty-export': 'warn',
    '@typescript-eslint/non-nullable-type-assertion-style': 'off',
    '@typescript-eslint/parameter-properties': ['warn', { 'prefer': 'class-property' }],
    '@typescript-eslint/prefer-as-const': 'off',
    '@typescript-eslint/prefer-enum-initializers': 'off',
    '@typescript-eslint/prefer-for-of': 'off',
    '@typescript-eslint/prefer-function-type': 'warn',
    '@typescript-eslint/prefer-includes': 'warn',
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/prefer-optional-chain': 'off',
    '@typescript-eslint/prefer-readonly': 'warn',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    '@typescript-eslint/prefer-reduce-type-parameter': 'off',
    '@typescript-eslint/prefer-regexp-exec': 'off',
    '@typescript-eslint/prefer-return-this-type': 'warn',
    '@typescript-eslint/prefer-string-starts-ends-with': 'off',
    '@typescript-eslint/prefer-ts-expect-error': 'warn',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/require-array-sort-compare': 'off',
    '@typescript-eslint/return-await': ['warn', 'in-try-catch'],
    '@typescript-eslint/sort-type-union-intersection-members': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/switch-exhaustiveness-check': 'warn',
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/type-annotation-spacing': [
        'warn',
        {
            'before': true,
            'after': true,
            overrides: {
                colon: { before: false, after: true },
                arrow: { before: true, after: true },
            },
        },
    ],
    '@typescript-eslint/typedef': 'off',
    '@typescript-eslint/unified-signatures': 'warn',
};
// endregion
// region rulesTestsAndEnv
const rulesTestsAndEnv = {
    js: {
        'func-names': 'off',
        'no-shadow': 'off',
        'no-unused-vars': 'off',
        'array-bracket-newline': 'off',
        'consistent-return': ['off', { treatUndefinedAsUnspecified: false }],
        'func-name-matching': ['off', 'always'],
        'function-paren-newline': 'off',
        'new-cap': 'off',
        'no-debugger': 'warn',
        'no-empty': 'off',
        'no-eval': 'off',
        'no-loop-func': 'warn',
        'no-new': 'off',
        'no-new-func': 'off',
        'no-useless-call': 'off',
        'no-useless-catch': 'off',
        'prefer-const': 'off',
        'no-useless-concat': 'off',
        'lines-between-class-members': 'off',
        'max-len': 'off',
        'lines-around-comment': 'off',
        'require-await': 'warn',
        'no-unmodified-loop-condition': 'warn',
        'no-return-await': 'off',
        'no-lonely-if': 'off',
        'no-else-return': 'off',
    },
    ts: {
        '@typescript-eslint/no-unnecessary-condition': 'off',
    },
};
// endregion
// region rulesTests
const rulesTests = {
    js: Object.assign(Object.assign({}, rulesTestsAndEnv.js), { 'no-throw-literal': 'off', 'require-await': 'off', 'no-debugger': 'off' }),
    ts: Object.assign(Object.assign({}, rulesTestsAndEnv.ts), { '@typescript-eslint/no-floating-promises': 'off', '@typescript-eslint/await-thenable': 'warn' }),
};
// endregion
// region rulesSvelte
const rulesSvelte = {
    js: {
        'no-self-assign': 'off',
        'no-unused-expressions': ['off', { 'allowShortCircuit': true }],
        'no-multiple-empty-lines': 'off',
        'no-unused-vars': 'off',
        'prefer-const': 'off',
        'brace-style': ['warn', 'stroustrup', { allowSingleLine: true }],
        'no-sequences': 'off',
        'no-return-assign': 'off',
        'no-use-before-define': 'off',
        'comma-dangle': [
            'warn',
            Object.assign(Object.assign({}, rulesJavaScript['comma-dangle'][1]), { functions: 'only-multiline' }),
        ],
    },
    ts: {
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/comma-dangle': [
            'warn',
            Object.assign(Object.assign({}, rulesTypeScript['@typescript-eslint/comma-dangle'][1]), { functions: 'only-multiline' }),
        ],
        '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
    },
    ignore: {
        'unused-export-let': true,
        'a11y-missing-attribute': true,
        'a11y-img-redundant-alt': true,
        'a11y-label-has-associated-control': true,
        'a11y-media-has-caption': true,
        'a11y-missing-content': true,
        'a11y-mouse-events-have-key-events': true,
    },
};
// endregion
// region rulesEnvTools
// docs: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/
const rulesEnvTools = {
    js: Object.assign({}, rulesTestsAndEnv.js),
    ts: Object.assign({}, rulesTestsAndEnv.ts),
};
// endregion
function jsRulesToTs(jsRules) {
    const tsRules = {};
    for (const jsKey in jsRules) {
        if (Object.prototype.hasOwnProperty.call(jsRules, jsKey)
            && tsRuleNames.tsRuleNames.has(jsKey)) {
            const tsKey = '@typescript-eslint/' + jsKey;
            tsRules[jsKey] = 'off';
            tsRules[tsKey] = jsRules[jsKey];
        }
    }
    return tsRules;
}
function correctTsRules(rules) {
    return Object.assign(Object.assign({}, rules), { ts: Object.assign(Object.assign({}, jsRulesToTs(rules.js)), rules.ts) });
}
const rulesOrig = {
    common: {
        js: rulesJavaScript,
        ts: rulesTypeScript,
    },
    tests: rulesTests,
    envTools: rulesEnvTools,
    svelte: rulesSvelte,
};
const rules = {
    common: correctTsRules(rulesOrig.common),
    tests: correctTsRules(rulesOrig.tests),
    envTools: correctTsRules(rulesOrig.envTools),
    svelte: correctTsRules(rulesOrig.svelte),
};

exports.jsRulesToTs = jsRulesToTs;
exports.rules = rules;
exports.rulesOrig = rulesOrig;
