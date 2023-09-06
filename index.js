module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['standard', 'plugin:perfectionist/recommended-alphabetical'],
  overrides: [
    {
      files: ['test/*', 'test/**/*', '*.test.{js,jsx}', '*.test.{ts,tsx}'],
      rules: {
        'n/no-missing-require': [
          'error',
          {
            allowModules: ['worker_threads']
          }
        ],
        'n/no-unpublished-require': 'off'
      }
    },
    {
      files: ['*.test.{js,jsx}', '*.test.{ts,tsx}', '*/test/*'],
      rules: {
        'n/global-require': 'off',
        'no-unused-expressions': 'off'
      }
    }
  ],
  parserOptions: {
    sourceType: 'module'
  },
  plugins: [
    'import',
    'n',
    'prefer-let',
    'promise',
    'perfectionist',
    'prefer-node-builtin-imports'
  ],
  rules: {
    'array-bracket-spacing': 'off',
    'arrow-spacing': 'off',

    'block-scoped-var': 'error',
    'block-spacing': 'off',
    'brace-style': 'off',
    'comma-dangle': 'off',
    'comma-spacing': 'off',
    'comma-style': 'off',
    'computed-property-spacing': 'off',

    'consistent-return': 'error',

    'constructor-super': 'error',

    'dot-location': 'off',
    'eol-last': 'off',
    'for-direction': 'error',
    'func-call-spacing': 'off',
    'func-name-matching': 'error',
    'generator-star-spacing': 'off',
    'getter-return': 'error',
    'indent': 'off',
    'key-spacing': 'off',
    'keyword-spacing': 'off',
    'max-len': 'off',
    'multiline-ternary': 'off',
    'n/global-require': 'error',
    'n/no-callback-literal': 'off',
    'n/no-extraneous-require': 'error',
    'n/no-missing-require': 'error',
    'n/no-unpublished-require': 'error',
    'n/no-unsupported-features/es-builtins': 'error',
    'n/no-unsupported-features/es-syntax': [
      'error',
      {
        ignores: ['modules', 'dynamicImport']
      }
    ],
    'n/no-unsupported-features/node-builtins': [
      'error',
      {
        ignores: ['worker_threads']
      }
    ],
    'new-parens': 'off',
    'no-console': 'error',
    'no-dupe-else-if': 'error',
    'no-extra-parens': 'off',

    'no-floating-decimal': 'off',

    'no-invalid-this': 'error',
    'no-lonely-if': 'error',
    'no-misleading-character-class': 'error',
    'no-mixed-spaces-and-tabs': 'off',
    'no-multi-spaces': 'off',
    'no-multiple-empty-lines': 'off',
    'no-nested-ternary': 'error',
    'no-new': 'off',
    'no-new-native-nonconstructor': 'error',
    'no-setter-return': 'error',
    'no-shadow': 'error',
    'no-this-before-super': 'error',
    'no-trailing-spaces': 'off',
    'no-unsafe-optional-chaining': 'error',
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        vars: 'all'
      }
    ],
    'no-useless-return': 'error',
    'no-whitespace-before-property': 'off',
    'object-curly-newline': 'off',
    'object-curly-spacing': 'off',
    'object-property-newline': 'off',
    'object-shorthand': 'error',
    'operator-linebreak': 'off',
    'padded-blocks': 'off',
    'perfectionist/sort-imports': [
      'error',
      {
        'groups': [
          'side-effect',
          ['builtin-type', 'type', 'builtin', 'external', 'unknown'],
          [
            'internal-type',
            'parent-type',
            'sibling-type',
            'index-type',
            'internal',
            'parent',
            'sibling',
            'index'
          ],
          ['style'],
          ['object']
        ],
        'newlines-between': 'always',
        'order': 'asc',
        'type': 'alphabetical'
      }
    ],
    'perfectionist/sort-svelte-attributes': 'off',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'off',
    'prefer-exponentiation-operator': 'error',
    'prefer-let/prefer-let': 'error',
    'prefer-node-builtin-imports/prefer-node-builtin-imports': 'error',
    'prefer-rest-params': 'error',
    'promise/no-multiple-resolved': 'error',
    'quote-props': 'off',
    'quotes': 'off',
    'require-yield': 'error',
    'rest-spread-spacing': 'off',
    'semi': 'off',
    'semi-spacing': 'off',
    'space-before-blocks': 'off',
    'space-before-function-paren': 'off',
    'space-in-parens': 'off',
    'space-infix-ops': 'off',
    'space-unary-ops': 'off',
    'spaced-comment': 'off',
    'template-curly-spacing': 'off',
    'template-tag-spacing': 'off',
    'unicode-bom': 'off',
    'wrap-iife': 'off',
    'yield-star-spacing': 'off'
  }
}
