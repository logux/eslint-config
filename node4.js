module.exports = {
  extends: [
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
    'no-var': 'error'
  },
  env: {
    es6: true,
    node: true,
    jest: true
  }
}
