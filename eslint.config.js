import config from './index.js'

export default [
  {
    ignores: ['demo/a.js', 'demo/b.ts', 'demo/c.svelte']
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
