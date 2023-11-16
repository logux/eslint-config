let ts = require('./ts')

module.exports = {
  ...ts,
  overrides: [
    ...ts.overrides,
    {
      extends: ['plugin:svelte/recommended'],
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      },
      rules: {
        'import/first': 'off',
        'no-undef-init': 'off',
        'no-use-before-define': 'off',
        'svelte/block-lang': ['error', { script: 'ts' }],
        'svelte/infinite-reactive-loop': 'error',
        'svelte/no-at-debug-tags': 'error',
        'svelte/no-extra-reactive-curlies': 'error',
        'svelte/no-inline-styles': 'error',
        'svelte/no-reactive-literals': 'error',
        'svelte/no-reactive-reassign': 'error',
        'svelte/no-unused-class-name': 'error',
        'svelte/prefer-class-directive': 'error',
        'svelte/require-each-key': 'error',
        'svelte/require-optimized-style-attribute': 'error',
        'svelte/sort-attributes': 'error',
        'svelte/spaced-html-comment': 'error'
      }
    }
  ],
  parserOptions: {
    extraFileExtensions: ['.svelte']
  },
  plugins: [...ts.plugins, '@typescript-eslint']
}
