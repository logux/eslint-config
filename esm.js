let base = require('./ts')

module.exports = {
  ...base,
  plugins: [...base.plugins],
  rules: {
    ...base.rules,
    'import/extensions': [
      'error',
      'always',
      {
        ignorePackages: true
      }
    ]
  }
}
