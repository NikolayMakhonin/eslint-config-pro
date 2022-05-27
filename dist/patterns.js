'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const js = ['**/*.js'];
const jsx = ['**/*.jsx'];
const cjs = ['**/*.cjs'];
const mjs = ['**/*.cjs'];
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
const envTools = [
    './env/**',
    './tools/**',
    './deploy/**',
    './*',
    './**/.*',
    '**/*.config.*',
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
