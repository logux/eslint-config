'use strict'

const globals = require('globals')

const jest = { }
for (const i in globals.jest) {
  if (i !== 'test' && i !== 'xtest') jest[i] = globals.jest[i]
}

module.exports = {
  extends: 'standard',
  plugins: [
    'jest',
    'security',
    'node'
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

    'nonblock-statement-body-position': 'error',
    'computed-property-spacing': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'func-name-matching': 'error',
    'no-useless-return': 'error',
    'consistent-return': 'error',
    'multiline-ternary': ['error', 'never'],
    'no-nested-ternary': 'error',
    'block-scoped-var': 'error',
    'no-invalid-this': 'error',
    'global-require': 'error',
    'no-unused-vars': [2, { vars: 'all', args: 'after-used' }],
    'getter-return': 'error',
    'for-direction': 'error',
    'no-lonely-if': 'error',
    'valid-jsdoc': 'error',
    'func-style': ['error', 'declaration'],
    'no-shadow': 'error',
    'max-len': [2, 80],
    'no-new': 'off'
  },
  env: {
    browser: true,
    node: true
  },
  overrides: [
    {
      files: ['test/*.js'],
      rules: {
        'node/no-unpublished-require': 'off'
      },
      globals: jest
    },
    {
      files: ['*.test.js'],
      rules: {
        'jest/prefer-to-have-length': 'error',
        'jest/no-identical-title': 'error',
        'jest/no-disabled-tests': 'error',
        'jest/no-focused-tests': 'error',
        'jest/valid-expect': 'error'
      },
      globals: jest
    }
  ]
}
