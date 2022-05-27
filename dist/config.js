'use strict';

/* eslint-disable dot-notation, quote-props */
const rules = require('./rules');
const { moduleExists } = require('./helpers');
const features = {
    svelte: moduleExists('eslint-plugin-svelte3'),
    html: moduleExists('eslint-plugin-html'),
};
module.exports = {
    extends: [
        'eslint:recommended',
    ],
    plugins: ['import'],
    rules: Object.assign({}, rules.common.js),
    env: {
        es6: true,
        node: true,
        browser: true,
    },
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    settings: {
        'html/indent': '+2',
        'html/report-bad-indent': 'warn',
        'html/html-extensions': [
            '.html',
            '.svelte',
        ],
    },
    overrides: [
        // region *.cjs
        {
            files: ['**/*.cjs'],
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
            files: ['**/*.js'],
            plugins: ['node'],
            rules: {
                'global-require': 'off',
                'strict': 'off',
            },
        },
        // endregion
        // region *.mjs
        {
            files: ['**/*.mjs'],
            plugins: ['node'],
            rules: {
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
                '**/*.{ts,tsx}',
                features.svelte && '**/*.svelte',
            ].filter(o => o),
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
            rules: Object.assign({}, rules.common.ts),
        },
        // endregion
        // region Svelte
        features.svelte && {
            files: ['**/*.svelte'],
            processor: 'svelte3/svelte3',
            env: {
                es6: true,
                node: false,
                browser: true,
            },
            plugins: ['svelte3'],
            rules: Object.assign(Object.assign({}, rules.svelte.js), rules.svelte.ts),
            settings: {
                'svelte3/typescript': true,
                'svelte3/ignore-warnings': warn => {
                    return rules.svelte.ignore[warn.code];
                },
            },
        },
        // endregion
        // region Html
        features.html && {
            files: ['**/*.{html,htm}'],
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
            parserOptions: {
                ecmaVersion: 5,
                sourceType: 'script',
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
            rules: Object.assign({}, rules.tests.js),
            overrides: [{
                    files: ['**/*.{ts,tsx}'],
                    rules: Object.assign({}, rules.tests.ts),
                }],
        },
        // endregion
        // region EnvTools
        {
            files: ['./{env,tools,deploy}/**', './*', './**/.*', '**/*.config.*'],
            rules: Object.assign({}, rules.envTools.js),
            overrides: [{
                    files: ['**/*.{ts,tsx}'],
                    rules: Object.assign({}, rules.envTools.ts),
                }],
        },
        // endregion
    ].filter(o => { var _a; return (_a = o === null || o === void 0 ? void 0 : o.files) === null || _a === void 0 ? void 0 : _a.length; }),
};
