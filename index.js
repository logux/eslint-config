var node4 = require('./node4')

var allRules = {
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
}

module.exports = {
  extends: [
    'standard',
    'plugin:es5/no-es2015',
    'plugin:es5/no-es2016'
  ],
  rules: allRules,
  env: {
    browser: true,
    node: true,
    jest: true
  },
  configs: {
    node4: {
      extends: node4.extends,
      rules: node4.rules.concat(allRules),
      env: node4.env
    }
  }
}
