'use strict';

var config = require('./config2.cjs');
require('./features2.cjs');
require('./helpers2.cjs');
require('./patterns2.cjs');
require('./rules2.cjs');
require('./tsRuleNames2.cjs');

/* eslint-disable import/no-import-module-exports */
module.exports = config.config;
