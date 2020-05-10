let globals = require('globals')

let jest = { }
for (let i in globals.jest) {
  if (i !== 'test' && i !== 'xtest') jest[i] = globals.jest[i]
}

module.exports = {
  extends: 'standard',
  plugins: [
    'jest',
    'security',
    'node',
    'unicorn',
    'prefer-let',
    'node'
  ],
  rules: {
    'standard/no-callback-literal': 'off',

    'security/detect-possible-timing-attacks': 'error',
    'security/detect-eval-with-expression': 'error',
    'security/detect-non-literal-require': 'error',
    'security/detect-non-literal-regexp': 'error',
    'security/detect-pseudoRandomBytes': 'error',
    'security/detect-buffer-noassert': 'error',
    'security/detect-unsafe-regex': 'error',
    'security/detect-new-buffer': 'error',

    'node/no-unsupported-features/node-builtins': ['error', {
      ignores: ['worker_threads']
    }],
    'node/no-unsupported-features/es-builtins': 'error',
    'node/no-unsupported-features/es-syntax': ['error', {
      ignores: ['modules', 'dynamicImport']
    }],
    'node/no-unpublished-require': 'error',
    'node/no-extraneous-require': 'error',
    'node/no-missing-require': 'error',
    'node/global-require': 'error',

    'unicorn/prefer-starts-ends-with': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/no-for-loop': 'error',

    'prefer-let/prefer-let': 'error',

    'unicorn/custom-error-definition': 'error',
    'unicorn/no-unused-properties': 'error',
    'unicorn/no-array-instanceof': 'error',
    'unicorn/prefer-event-key': 'error',
    'unicorn/better-regex': 'error',

    'import/order': ['error', {
      'groups': [
        ['builtin', 'external'],
        ['internal', 'parent', 'sibling', 'index']
      ],
      'newlines-between': 'always'
    }],

    'nonblock-statement-body-position': 'error',
    'prefer-exponentiation-operator': 'error',
    'no-misleading-character-class': 'error',
    'computed-property-spacing': ['error', 'never'],
    'template-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'prefer-arrow-callback': 'error',
    'no-dupe-class-members': 'error',
    'no-this-before-super': 'error',
    'func-name-matching': 'error',
    'prefer-rest-params': 'error',
    'no-useless-return': 'error',
    'consistent-return': 'error',
    'multiline-ternary': ['error', 'never'],
    'no-nested-ternary': 'error',
    'constructor-super': 'error',
    'block-scoped-var': 'error',
    'object-shorthand': 'error',
    'no-setter-return': 'error',
    'no-invalid-this': 'error',
    'no-dupe-else-if': 'error',
    'no-unused-vars': ['error', {
      args: 'after-used',
      vars: 'all'
    }],
    'require-yield': 'error',
    'arrow-spacing': 'error',
    'no-new-symbol': 'error',
    'getter-return': 'error',
    'for-direction': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'no-lonely-if': 'error',
    'prefer-const': 'off',
    'quote-props': ['error', 'consistent-as-needed'],
    'no-shadow': 'error',
    'max-len': ['error', 80],
    'no-var': 'error',
    'no-new': 'off'
  },
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  overrides: [
    {
      files: ['test/*', 'test/**/*', '*.test.js', '*.test.ts'],
      rules: {
        'node/no-unpublished-require': 'off',
        'node/no-missing-require': ['error', {
          allowModules: ['worker_threads']
        }]
      },
      globals: jest
    },
    {
      files: ['*.test.js', '*.test.ts'],
      extends: [
        'plugin:jest/recommended',
        'plugin:jest/style'
      ],
      rules: {
        'jest/require-to-throw-message': 'error',
        'jest/no-deprecated-functions': 'error',
        'jest/valid-expect-in-promise': 'off',
        'jest/prefer-hooks-on-top': 'error',
        'jest/no-duplicate-hooks': 'error',
        'jest/consistent-test-it': ['error', { fn: 'it' }],
        'jest/prefer-called-with': 'error',
        'jest/no-truthy-falsy': 'error',
        'jest/lowercase-name': 'error',
        'jest/prefer-spy-on': 'error',
        'jest/expect-expect': 'off',
        'jest/valid-title': 'error',
        'jest/prefer-todo': 'error',

        'node/global-require': 'off'
      },
      globals: jest
    }
  ]
}
