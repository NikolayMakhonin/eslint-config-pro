'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
    '**/*.test.{js,cjs,mjs,ts}',
    '**/*.perf.{js,cjs,mjs,ts}',
    '**/*.e2e.{js,cjs,mjs,ts}',
    '**/test/**/*.{js,cjs,mjs,ts}',
    '**/tests/**/*.{js,cjs,mjs,ts}',
];
// const jsTsExtensions = ['js', 'jsx', 'cjs', 'mjs', 'ts', 'tsx']
const envTools = [
    './env/**/*.{js,cjs,mjs,ts}',
    './tools/**/*.{js,cjs,mjs,ts}',
    './deploy/**/*.{js,cjs,mjs,ts}',
    './*.{js,cjs,mjs,ts}',
    '**/.*.{js,cjs,mjs,ts}',
    '**/*.config.{js,cjs,mjs,ts}',
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
