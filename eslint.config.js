import config from './index.js'

export default [
  {
    ignores: ['demo/index.*']
  },
  ...config,
  {
    rules: {
      'n/no-unsupported-features/node-builtins': [
        'error',
        { ignores: ['util.styleText'] }
      ]
    }
  }
]
