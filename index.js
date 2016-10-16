module.exports = {
  extends: 'standard',
  rules: {
    'computed-property-spacing': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'func-name-matching': 'error',
    'consistent-return': 'error',
    'multiline-ternary': ['error', 'never'],
    'no-nested-ternary': 'error',
    'block-scoped-var': 'error',
    'no-invalid-this': 'error',
    'global-require': 'error',
    'no-lonely-if': 'error',
    'no-undefined': 'error',
    'valid-jsdoc': 'error',
    'func-style': ['error', 'declaration'],
    'no-shadow': 'error',
    'max-len': [2, 80],
    'strict': ['error', 'global'],
    'no-new': 'off'
  },
  env: {
    browser: true,
    node: true,
    jest: true
  }
}
