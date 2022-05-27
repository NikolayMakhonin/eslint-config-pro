'use strict'

module.exports = {
  require: [
    'tsconfig-paths/register',
    'ts-node/register',
    './src/helpers/test/register.ts',
  ],
  'watch-files': ['./src/**'],
  exclude      : ['**/*.d.ts'],
  'node-option': [

  ],
}
