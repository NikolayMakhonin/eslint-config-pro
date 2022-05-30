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
  '**/*.test.{js,cjs,mjs,ts}',
  '**/*.perf.{js,cjs,mjs,ts}',
  '**/*.e2e.{js,cjs,mjs,ts}',
  '**/test/**/*.{js,cjs,mjs,ts}',
  '**/tests/**/*.{js,cjs,mjs,ts}',
]
// const jsTsExtensions = ['js', 'jsx', 'cjs', 'mjs', 'ts', 'tsx']
export const envTools = [
  './env/**/*.{js,cjs,mjs,ts}',
  './tools/**/*.{js,cjs,mjs,ts}',
  './deploy/**/*.{js,cjs,mjs,ts}',
  './*.{js,cjs,mjs,ts}',
  '**/.*.{js,cjs,mjs,ts}',
  '**/*.config.{js,cjs,mjs,ts}',
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
