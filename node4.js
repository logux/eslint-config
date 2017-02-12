module.exports = {
  extends: [
    './base.js'
  ],
  plugins: [
    'node'
  ],
  rules: {
    'node/no-unsupported-features': 'error',
    'node/no-deprecated-api': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-new-symbol': 'error',
    'no-var': 'error',
    'require-yield': 'error',
    'constructor-super': 'error',
    'no-this-before-super': 'error',
    'generator-star-spacing': ['error', { before: true }],
    'prefer-arrow-callback': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'arrow-body-style': ['error', 'always']
  },
  env: {
    es6: true
  }
}
