module.exports = {
  plugins: ['import', 'security', 'node', 'prefer-let'],
  extends: ['standard'],
  rules: {
    'security/detect-possible-timing-attacks': 'error',
    'security/detect-eval-with-expression': 'error',
    'security/detect-non-literal-require': 'error',
    'security/detect-non-literal-regexp': 'error',
    'security/detect-pseudoRandomBytes': 'error',
    'security/detect-buffer-noassert': 'error',
    'security/detect-unsafe-regex': 'error',
    'security/detect-new-buffer': 'error',

    'node/no-unsupported-features/node-builtins': [
      'error',
      {
        ignores: ['worker_threads']
      }
    ],
    'node/no-unsupported-features/es-builtins': 'error',
    'node/no-unsupported-features/es-syntax': [
      'error',
      {
        ignores: ['modules', 'dynamicImport']
      }
    ],
    'node/no-unpublished-require': 'error',
    'node/no-extraneous-require': 'error',
    'node/no-missing-require': 'error',
    'node/global-require': 'error',

    'prefer-let/prefer-let': 'error',

    'import/newline-after-import': 'error',
    'import/order': [
      'error',
      {
        'groups': [
          ['type', 'builtin', 'external'],
          ['internal', 'parent', 'sibling', 'index']
        ],
        'newlines-between': 'always'
      }
    ],

    'prefer-exponentiation-operator': 'error',
    'no-misleading-character-class': 'error',
    'no-unsafe-optional-chaining': 'error',
    'prefer-arrow-callback': 'error',
    'no-this-before-super': 'error',
    'func-name-matching': 'error',
    'prefer-rest-params': 'error',
    'no-useless-return': 'error',
    'consistent-return': 'error',
    'no-nested-ternary': 'error',
    'constructor-super': 'error',
    'block-scoped-var': 'error',
    'object-shorthand': 'error',
    'no-setter-return': 'error',
    'no-invalid-this': 'error',
    'no-dupe-else-if': 'error',
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        vars: 'all'
      }
    ],
    'require-yield': 'error',
    'no-new-symbol': 'error',
    'getter-return': 'error',
    'for-direction': 'error',
    'no-lonely-if': 'error',
    'no-console': 'error',
    'no-shadow': 'error',

    'node/no-callback-literal': 'off',

    'no-whitespace-before-property': 'off',
    'space-before-function-paren': 'off',
    'computed-property-spacing': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'object-property-newline': 'off',
    'no-multiple-empty-lines': 'off',
    'generator-star-spacing': 'off',
    'template-curly-spacing': 'off',
    'array-bracket-spacing': 'off',
    'object-curly-newline': 'off',
    'template-tag-spacing': 'off',
    'object-curly-spacing': 'off',
    'space-before-blocks': 'off',
    'no-floating-decimal': 'off',
    'rest-spread-spacing': 'off',
    'no-trailing-spaces': 'off',
    'operator-linebreak': 'off',
    'yield-star-spacing': 'off',
    'multiline-ternary': 'off',
    'func-call-spacing': 'off',
    'space-infix-ops': 'off',
    'space-in-parens': 'off',
    'no-multi-spaces': 'off',
    'keyword-spacing': 'off',
    'no-extra-parens': 'off',
    'space-unary-ops': 'off',
    'spaced-comment': 'off',
    'block-spacing': 'off',
    'padded-blocks': 'off',
    'comma-spacing': 'off',
    'arrow-spacing': 'off',
    'semi-spacing': 'off',
    'prefer-const': 'off',
    'dot-location': 'off',
    'comma-dangle': 'off',
    'unicode-bom': 'off',
    'brace-style': 'off',
    'comma-style': 'off',
    'quote-props': 'off',
    'key-spacing': 'off',
    'new-parens': 'off',
    'wrap-iife': 'off',
    'eol-last': 'off',
    'max-len': 'off',
    'no-new': 'off',
    'quotes': 'off',
    'indent': 'off',
    'semi': 'off'
  },
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  overrides: [
    {
      files: ['test/*', 'test/**/*', '*.test.{js,jsx}', '*.test.{ts,tsx}'],
      rules: {
        'node/no-unpublished-require': 'off',
        'node/no-missing-require': [
          'error',
          {
            allowModules: ['worker_threads']
          }
        ]
      }
    },
    {
      files: ['*.test.{js,jsx}', '*.test.{ts,tsx}'],
      rules: {
        'node/global-require': 'off',
        'no-unused-expressions': 'off'
      }
    }
  ]
}
