import * as features from './features'

export const js    = ['**/*.js']
export const jsx    = ['**/*.jsx']
export const cjs   = ['**/*.cjs']
export const mjs   = ['**/*.mjs']
export const ts    = ['**/*.ts']
export const tsx   = ['**/*.tsx']
export const md   = ['**/*.md']
export const html  = ['**/*.html', '**/*.htm']
export const svelte = ['**/*.svelte']
export const tests = [
  '**/*.test.*',
  '**/*.perf.*',
  '**/*.e2e.*',
  '**/test/**',
  '**/tests/**',
]
// const jsTsExtensions = ['js', 'jsx', 'cjs', 'mjs', 'ts', 'tsx']
export const envTools = [
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
]
export const javaScript = [
  ...js,
  ...jsx,
  ...cjs,
  ...mjs,
]
export const typeScript = [
  ...ts,
  ...tsx,
  ...features.svelte ? svelte : [],
]
