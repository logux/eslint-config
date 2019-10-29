let globals = require('globals')

let jest = { }
for (let i in globals.jest) {
  if (i !== 'test' && i !== 'xtest') jest[i] = globals.jest[i]
}

module.exports = {
  extends: 'standard',
  plugins: [
    'jest',
    'security',
    'node',
    'unicorn'
  ],
  rules: {
    'standard/no-callback-literal': 'off',

    'security/detect-possible-timing-attacks': 'error',
    'security/detect-eval-with-expression': 'error',
    'security/detect-non-literal-require': 'error',
    'security/detect-non-literal-regexp': 'error',
    'security/detect-pseudoRandomBytes': 'error',
    'security/detect-buffer-noassert': 'error',
    'security/detect-unsafe-regex': 'error',
    'security/detect-new-buffer': 'error',

    'node/no-unpublished-require': 'error',
    'node/no-extraneous-require': 'error',
    'node/no-missing-require': 'error',

    'unicorn/custom-error-definition': 'error',
    'unicorn/no-unused-properties': 'error',
    'unicorn/no-array-instanceof': 'error',
    'unicorn/prefer-event-key': 'error',
    'unicorn/regex-shorthand': 'error',

    'import/order': ['error', {
      'groups': [
        ['builtin', 'external'],
        ['internal', 'parent', 'sibling', 'index']
      ],
      'newlines-between': 'always'
    }],

    'nonblock-statement-body-position': 'error',
    'no-misleading-character-class': 'error',
    'computed-property-spacing': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'func-name-matching': 'error',
    'no-useless-return': 'error',
    'consistent-return': 'error',
    'multiline-ternary': ['error', 'never'],
    'no-nested-ternary': 'error',
    'block-scoped-var': 'error',
    'no-invalid-this': 'error',
    'global-require': 'error',
    'no-unused-vars': ['error', {
      args: 'after-used',
      vars: 'all'
    }],
    'no-new-symbol': 'error',
    'getter-return': 'error',
    'for-direction': 'error',
    'no-lonely-if': 'error',
    'prefer-const': 'off',
    'quote-props': ['error', 'consistent-as-needed'],
    'func-style': ['error', 'declaration'],
    'no-shadow': 'error',
    'max-len': ['error', 80],
    'no-new': 'off'
  },
  env: {
    browser: true,
    node: true
  },
  overrides: [
    {
      files: ['test/*', 'test/**/*', '*.test.js'],
      rules: {
        'node/no-unpublished-require': 'off',
        'node/no-missing-require': ['error', {
          allowModules: ['worker_threads']
        }]
      },
      globals: jest
    },
    {
      files: ['*.test.js'],
      extends: [
        'plugin:jest/recommended',
        'plugin:jest/style'
      ],
      rules: {
        'jest/require-to-throw-message': 'error',
        'jest/valid-expect-in-promise': 'off',
        'jest/prefer-hooks-on-top': 'error',
        'jest/no-duplicate-hooks': 'error',
        'jest/consistent-test-it': ['error', { fn: 'it' }],
        'jest/prefer-called-with': 'error',
        'jest/no-truthy-falsy': 'error',
        'jest/lowercase-name': 'error',
        'jest/prefer-spy-on': 'error',
        'jest/expect-expect': 'off',
        'jest/valid-title': 'error',
        'jest/prefer-todo': 'error',

        'global-require': 'off'
      },
      globals: jest
    }
  ]
}
