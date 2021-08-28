let base = require('./ts')

module.exports = {
  ...base,
  plugins: [...base.plugins],
  rules: {
    ...base.rules,
    // 'unicorn/prefer-node-protocol': 'error',
    'unicorn/prefer-module': 'error',
    'import/extensions': [
      'error',
      'always',
      {
        ignorePackages: true
      }
    ]
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
