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

    'generator-star-spacing': ['error', { before: true }],
    'template-curly-spacing': ['error', 'always'],
    'prefer-arrow-callback': 'error',
    'no-dupe-class-members': 'error',
    'no-this-before-super': 'error',
    'constructor-super': 'error',
    'arrow-body-style': 'error',
    'object-shorthand': 'error',
    'no-const-assign': 'error',
    'prefer-template': 'error',
    'no-new-symbol': 'error',
    'require-yield': 'error',
    'arrow-spacing': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'strict': ['error', 'global'],
    'no-var': 'error'
  },
  env: {
    es6: true
  }
}
