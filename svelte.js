import svelte from 'eslint-plugin-svelte'
import svelteParser from 'svelte-eslint-parser'
import tseslint from 'typescript-eslint'

import ts from './ts.js'

let tsRules = ts.find(
  config => config.files && config.files.includes('**/*.ts')
).rules

let globals = {}
let cleanedTsConfig = ts.map(config => {
  let cleaned = { ...config }
  if (cleaned.languageOptions && cleaned.languageOptions.globals) {
    globals = { ...globals, ...cleaned.languageOptions.globals }
  }
  delete cleaned.languageOptions
  return cleaned
})

export default [
  {
    languageOptions: {
      globals,
      parserOptions: {
        extraFileExtensions: ['.svelte'],
        project: true
      },
      sourceType: 'module'
    }
  },
  ...cleanedTsConfig,
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tseslint.parser
      }
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      svelte
    },
    processor: 'svelte/svelte',
    rules: {
      ...tsRules,
      'import/first': 'off',
      'no-undef-init': 'off',
      'no-use-before-define': 'off',
      'svelte/block-lang': ['error', { script: 'ts' }],
      'svelte/infinite-reactive-loop': 'error',
      'svelte/no-at-debug-tags': 'error',
      'svelte/no-extra-reactive-curlies': 'error',
      'svelte/no-reactive-literals': 'error',
      'svelte/no-reactive-reassign': 'error',
      'svelte/no-unused-class-name': 'error',
      'svelte/prefer-class-directive': 'error',
      'svelte/require-each-key': 'error',
      'svelte/require-optimized-style-attribute': 'error',
      'svelte/sort-attributes': 'error',
      'svelte/spaced-html-comment': 'error'
    }
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true
      }
    }
  }
]
