let base = require('./ts')

module.exports = {
  ...base,
  plugins: [...base.plugins],
  rules: {
    ...base.rules,
    'unicorn/prefer-node-protocol': 'error',
    'unicorn/prefer-module': 'error'
  },
  overrides: [
    ...base.overrides,
    {
      files: '*.cjs',
      rules: {
        'unicorn/prefer-node-protocol': 'off',
        'unicorn/prefer-module': 'off'
      }
    }
  ]
}
