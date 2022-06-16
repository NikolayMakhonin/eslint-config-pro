'use strict';

var features = require('./features2.js');

const js = ['**/*.js'];
const jsx = ['**/*.jsx'];
const cjs = ['**/*.cjs'];
const mjs = ['**/*.mjs'];
const ts = ['**/*.ts'];
const tsx = ['**/*.tsx'];
const md = ['**/*.md'];
const html = ['**/*.html', '**/*.htm'];
const svelte = ['**/*.svelte'];
const tests = [
    '**/*.test.*',
    '**/*.perf.*',
    '**/*.e2e.*',
    '**/test/**',
    '**/tests/**',
];
// const jsTsExtensions = ['js', 'jsx', 'cjs', 'mjs', 'ts', 'tsx']
const envTools = [
    './env/**',
    './tools/**',
    './deploy/**',
    './*',
    '**/.*',
    '**/*.config.*',
    '**/*.build.*',
    '**/*.env.*',
    '**/*.tool.*',
    '**/*.tools.*',
];
const javaScript = [
    ...js,
    ...jsx,
    ...cjs,
    ...mjs,
];
const typeScript = [
    ...ts,
    ...tsx,
    ...features.svelte ? svelte : [],
];

exports.cjs = cjs;
exports.envTools = envTools;
exports.html = html;
exports.javaScript = javaScript;
exports.js = js;
exports.jsx = jsx;
exports.md = md;
exports.mjs = mjs;
exports.svelte = svelte;
exports.tests = tests;
exports.ts = ts;
exports.tsx = tsx;
exports.typeScript = typeScript;