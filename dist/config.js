'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var features = require('./features.js');
var patterns = require('./patterns.js');
var rules = require('./rules.js');
require('./helpers.js');

/* eslint-disable dot-notation, quote-props */
const config = {
    extends: [
        'eslint:recommended',
    ],
    plugins: ['import'],
    rules: Object.assign({}, rules.rules.common.js),
    env: {
        es6: true,
        node: true,
        browser: true,
    },
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    ignorePatterns: [
        '!**/.*',
        ...!features.svelte ? patterns.svelte : [],
        ...!features.html ? patterns.html : [],
    ],
    overrides: [
        // region *.cjs
        {
            files: patterns.cjs,
            plugins: ['node'],
            rules: {
                'global-require': 'off',
            },
            parserOptions: {
                sourceType: 'script',
            },
        },
        // endregion
        // region *.js
        {
            files: patterns.js,
            plugins: ['node'],
            rules: {
                'global-require': 'off',
                'strict': 'off',
            },
        },
        // endregion
        // region *.mjs
        {
            files: patterns.mjs,
            plugins: ['node'],
            rules: {
                'global-require': 'error',
            },
        },
        // endregion
        // region Scripts
        {
            files: [
                ...features.html ? patterns.html : [],
            ],
            parserOptions: {
                sourceType: 'script',
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
                ...features.svelte ? patterns.svelte : [],
            ],
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],
            parser: '@typescript-eslint/parser',
            plugins: [
                '@typescript-eslint',
            ],
            parserOptions: {
                tsconfigRootDir: process.cwd(),
                project: './tsconfig.json',
                extraFileExtensions: [
                    features.svelte && '.svelte',
                ].filter(o => o),
            },
            rules: Object.assign({}, rules.rules.common.ts),
        },
        // endregion
        // region Svelte
        features.svelte && {
            files: patterns.svelte,
            processor: 'svelte3/svelte3',
            env: {
                es6: true,
                node: false,
                browser: true,
            },
            plugins: ['svelte3'],
            rules: Object.assign(Object.assign({}, rules.rules.svelte.js), rules.rules.svelte.ts),
            settings: {
                'svelte3/typescript': true,
                'svelte3/ignore-warnings': warn => {
                    return rules.rules.svelte.ignore[warn.code];
                },
            },
        },
        // endregion
        // region Html
        features.html && {
            files: patterns.html,
            rules: {
                'semi': ['error', 'always'],
                'semi-style': ['error', 'last'],
                'no-extra-semi': 'off',
                'prefer-rest-params': 'off',
                'no-var': 'off',
                'vars-on-top': 'off',
                'strict': ['error', 'global'],
                'comma-dangle': 'off',
            },
            env: {
                es6: false,
                node: false,
                browser: true,
            },
            plugins: ['html'],
            parser: 'espree',
            settings: {
                'html/indent': '+2',
                'html/report-bad-indent': 'warn',
                'html/html-extensions': [
                    '.htm',
                    '.html',
                    features.svelte && '.svelte',
                ].filter(o => o),
            },
            parserOptions: {
                ecmaVersion: 5,
                sourceType: 'script',
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
        // region Tests
        {
            files: patterns.tests,
            env: {
                mocha: true,
            },
            rules: Object.assign({}, rules.rules.tests.js),
            overrides: [{
                    files: patterns.typeScript,
                    rules: Object.assign({}, rules.rules.tests.ts),
                }],
        },
        // endregion
        // region EnvTools
        {
            files: patterns.envTools,
            rules: Object.assign({}, rules.rules.envTools.js),
            overrides: [{
                    files: patterns.typeScript,
                    rules: Object.assign({}, rules.rules.envTools.ts),
                }],
        },
        // endregion
    ].filter(o => { var _a; return (_a = o === null || o === void 0 ? void 0 : o.files) === null || _a === void 0 ? void 0 : _a.length; }),
};

exports.config = config;
