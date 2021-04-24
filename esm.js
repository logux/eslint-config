let base = require('./ts')

module.exports = {
  ...base,
  plugins: [...base.plugins],
  rules: {
    ...base.rules,
    'unicorn/prefer-module': 'error'
  },
  overrides: [
    ...base.overrides,
    {
      files: '*.cjs',
      rules: {
        'unicorn/prefer-module': 'off'
      }
    }
  ]
}
