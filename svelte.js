import svelte from 'eslint-plugin-svelte'
import svelteParser from 'svelte-eslint-parser'

export default [
  {
    languageOptions: {
      parserOptions: {
        extraFileExtensions: ['.svelte'],
        project: true
      },
      sourceType: 'module'
    }
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelteParser
    },
    plugins: {
      svelte
    },
    processor: 'svelte/svelte'
  }
]
