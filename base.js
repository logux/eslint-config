module.exports = {
  extends: 'standard',
  plugins: [
    'jest'
  ],
  rules: {
    'computed-property-spacing': ['error', 'never'],
    'jest/no-identical-title': 'error',
    'jest/no-disabled-tests': 'error',
    'jest/no-focused-tests': 'error',
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
    'no-lonely-if': 'error',
    'valid-jsdoc': 'error',
    'func-style': ['error', 'declaration'],
    'no-shadow': 'error',
    'max-len': [2, 80],
    'no-new': 'off'
  },
  env: {
    browser: true,
    node: true,
    jest: true
  }
}
