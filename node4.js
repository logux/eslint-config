module.exports = {
  plugins: ['node'],
  parserOptions: {
    'ecmaVersion': 2017
  },
  extends: [
    'standard'
  ],
  rules: {
    'node/no-deprecated-api': ['error'],
    'node/no-unsupported-features': ['error', {version: 4}],
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
    'block-scoped-var': 'error',
    'template-curly-spacing': ['error', 'always']
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  }
}
