export const js    = ['**/*.js']
export const jsx    = ['**/*.jsx']
export const cjs   = ['**/*.cjs']
export const mjs   = ['**/*.cjs']
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
export const envTools = [
  './env/**',
  './tools/**',
  './deploy/**',
  './*',
  './**/.*',
  '**/*.config.*',
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
]
