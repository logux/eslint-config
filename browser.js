let es5 = require('eslint-plugin-es5')

let es5disabled = { }
for (let i in es5.configs['no-es2015'].rules) {
  es5disabled[i] = 'off'
}
for (let i in es5.configs['no-es2016'].rules) {
  es5disabled[i] = 'off'
}

module.exports = {
  extends: [
    './base.js',
    'plugin:es5/no-es2015',
    'plugin:es5/no-es2016'
  ],
  overrides: [
    {
      files: ['test/*', 'test/**/*', '*.test.js'],
      plugins: [
        'prefer-let'
      ],
      rules: {
        ...es5disabled,

        'prefer-let/prefer-let': 'error',

        'template-curly-spacing': ['error', 'always'],
        'prefer-arrow-callback': 'error',
        'no-dupe-class-members': 'error',
        'no-this-before-super': 'error',
        'prefer-rest-params': 'error',
        'constructor-super': 'error',
        'object-shorthand': 'error',
        'require-yield': 'error',
        'arrow-spacing': 'error',
        'arrow-parens': ['error', 'as-needed'],
        'no-var': 'error'
      }
    }
  ]
}
