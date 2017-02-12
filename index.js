const node4 = require('./node4')

module.exports = {
  configs: {
    node4: node4,
    default: {
      extends: [
        'standard',
        'plugin:es5/no-es2015',
        'plugin:es5/no-es2016'
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
        'strict': ['error', 'global'],
        'no-new': 'off'
      },
      env: {
        browser: true,
        node: true,
        jest: true
      }
    }
  }
}
