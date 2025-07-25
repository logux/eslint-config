import svelte from 'eslint-plugin-svelte'
import svelteParser from 'svelte-eslint-parser'
import tseslint from 'typescript-eslint'

import ts from './ts.js'
import { collectRules } from './util.js'

let tsRules = collectRules(
  ts.filter(i => i.files && i.files.includes('**/*.ts'))
)

export default [
  {
    languageOptions: {
      parserOptions: {
        extraFileExtensions: ['.svelte'],
        project: true
      },
      sourceType: 'module'
    },
    name: 'logux/main-svelte'
  },
  ...ts,
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tseslint.parser
      }
    },
    name: 'logux/svelte',
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      svelte
    },
    processor: 'svelte/svelte',
    rules: {
      ...tsRules,
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'import/first': 'off',
      'no-undef-init': 'off',
      'no-use-before-define': 'off',
      'svelte/block-lang': [
        'error',
        { script: 'ts', style: ['postcss', null] }
      ],
      'svelte/infinite-reactive-loop': 'error',
      'svelte/no-add-event-listener': 'error',
      'svelte/no-at-debug-tags': 'error',
      'svelte/no-extra-reactive-curlies': 'error',
      'svelte/no-reactive-literals': 'error',
      'svelte/no-reactive-reassign': 'error',
      'svelte/no-unnecessary-state-wrap': 'error',
      'svelte/no-unused-class-name': 'error',
      'svelte/no-unused-props': 'error',
      'svelte/prefer-class-directive': 'error',
      'svelte/require-each-key': 'error',
      'svelte/require-event-prefix': 'error',
      'svelte/require-optimized-style-attribute': 'error',
      'svelte/sort-attributes': 'warn',
      'svelte/spaced-html-comment': 'warn'
    }
  }
]
