'use strict';

var helpers = require('./helpers2.js');

const svelte = helpers.moduleExists('eslint-plugin-svelte3');
const html = helpers.moduleExists('eslint-plugin-html');

exports.html = html;
exports.svelte = svelte;
