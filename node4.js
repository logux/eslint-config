module.exports = {
  extends: [
    'standard',
    'plugin:node/no-deprecated-api',
    'plugin:node/no-unsupported-features'
  ],
  rules: {
    'es5/no-block-scoping': [0],
    'arrow-parens': 'error',
    'arrow-body-style': ['error', 'always'],
    'prefer-arrow-callback': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'prefer-const': 'error',
    'no-var': 'error',
    'computed-property-spacing': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'func-name-matching': 'error',
    'no-useless-return': 'error',
    'consistent-return': 'error',
    'multiline-ternary': ['error', 'never'],
    'no-nested-ternary': 'error',
    'max-len': [2, 80],
    'strict': ['error', 'global'],
    'no-new': 'off',
    'no-unused-vars': [2, { 'vars': 'all', 'args': 'after-used' }],
    'no-shadow': 'error',
    'func-style': ['error', 'declaration'],
    'global-require': 'error',
    'valid-jsdoc': 'error',
    'no-lonely-if': 'error',
    'no-invalid-this': 'error',
    'block-scoped-var': 'error'
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  }
}
