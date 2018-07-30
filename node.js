module.exports = {
  extends: './base.js',
  plugins: [
    'node'
  ],
  rules: {
    'node/no-unsupported-features/node-builtins': 'error',
    'node/no-unsupported-features/es-builtins': 'error',
    'node/no-unsupported-features/es-syntax': 'error',

    'template-curly-spacing': ['error', 'always'],
    'prefer-arrow-callback': 'error',
    'no-dupe-class-members': 'error',
    'no-this-before-super': 'error',
    'prefer-rest-params': 'error',
    'constructor-super': 'error',
    'object-shorthand': 'error',
    'no-new-symbol': 'error',
    'require-yield': 'error',
    'arrow-spacing': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'no-var': 'error'
  },
  env: {
    es6: true
  },
  parserOptions: {
    sourceType: 'script'
  }
}
