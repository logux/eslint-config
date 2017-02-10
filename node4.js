module.exports = {
  extends: 'standard',
  plugins: [
    'node'
  ],
  rules: {
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
    'no-unused-vars': [2, { 'vars': 'all', 'args': 'after-used' }],
    'no-lonely-if': 'error',
    'valid-jsdoc': 'error',
    'func-style': ['error', 'declaration'],
    'no-shadow': 'error',
    'max-len': [2, 80],
    'strict': ['error'],
    'no-new': 'off',
    'node/no-unsupported-features': 'error',
    'node/no-deprecated-api': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-new-symbol': 'error',
    'no-var': 'error',
    'require-yield': 'error',
    'constructor-super': 'error',
    'no-this-before-super': 'error',
    'generator-star-spacing': ['error', {'before': true}]
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  }
}
