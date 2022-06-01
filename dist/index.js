'use strict';

var config = require('./config.js');
require('./features.js');
require('./helpers.js');
require('./patterns.js');
require('./rules.js');
require('./tsRuleNames.js');

/* eslint-disable import/no-import-module-exports */
module.exports = config.config;
