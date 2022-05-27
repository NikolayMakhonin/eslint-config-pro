'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var helpers = require('./helpers.js');

const svelte = helpers.moduleExists('eslint-plugin-svelte3');
const html = helpers.moduleExists('eslint-plugin-html');

exports.html = html;
exports.svelte = svelte;
