'use strict'

module.exports = {
  extends: './base.js',
  plugins: [
    'node'
  ],
  rules: {
    'node/no-unsupported-features': 'error',

    'template-curly-spacing': ['error', 'always'],
    'prefer-arrow-callback': 'error',
    'no-dupe-class-members': 'error',
    'no-this-before-super': 'error',
    'constructor-super': 'error',
    'object-shorthand': 'error',
    'no-const-assign': 'error',
    'no-new-symbol': 'error',
    'require-yield': 'error',
    'arrow-spacing': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'prefer-const': 'error',
    'strict': ['error', 'global'],
    'no-var': 'error'
  },
  env: {
    es6: true
  },
  parserOptions: {
    sourceType: 'script'
  }
}
