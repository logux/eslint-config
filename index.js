let globals = require('globals')

let jest = {}
for (let i in globals.jest) {
  if (i !== 'test' && i !== 'xtest') jest[i] = globals.jest[i]
}

module.exports = {
  plugins: ['jest', 'security', 'node', 'unicorn', 'prefer-let', 'prettierx'],
  extends: ['standard'],
  rules: {
    'security/detect-possible-timing-attacks': 'error',
    'security/detect-eval-with-expression': 'error',
    'security/detect-non-literal-require': 'error',
    'security/detect-non-literal-regexp': 'error',
    'security/detect-pseudoRandomBytes': 'error',
    'security/detect-buffer-noassert': 'error',
    'security/detect-unsafe-regex': 'error',
    'security/detect-new-buffer': 'error',

    'node/no-unsupported-features/node-builtins': [
      'error',
      {
        ignores: ['worker_threads']
      }
    ],
    'node/no-unsupported-features/es-builtins': 'error',
    'node/no-unsupported-features/es-syntax': [
      'error',
      {
        ignores: ['modules', 'dynamicImport']
      }
    ],
    'node/no-unpublished-require': 'error',
    'node/no-extraneous-require': 'error',
    'node/no-missing-require': 'error',
    'node/global-require': 'error',

    'prefer-let/prefer-let': 'error',

    'unicorn/prefer-optional-catch-binding': 'error',
    'unicorn/prefer-starts-ends-with': 'error',
    'unicorn/custom-error-definition': 'error',
    'unicorn/no-unused-properties': 'error',
    'unicorn/no-array-instanceof': 'error',
    'unicorn/prefer-event-key': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/better-regex': 'error',
    'unicorn/no-for-loop': 'error',

    'import/order': [
      'error',
      {
        'groups': [
          ['builtin', 'external'],
          ['internal', 'parent', 'sibling', 'index']
        ],
        'newlines-between': 'always'
      }
    ],

    'prettierx/options': [
      'error',
      {
        semi: false,
        quoteProps: 'consistent',
        arrowParens: 'avoid',
        singleQuote: true,
        trailingComma: 'none',
        spaceBeforeFunctionParen: true
      }
    ],

    'nonblock-statement-body-position': 'error',
    'prefer-exponentiation-operator': 'error',
    'no-misleading-character-class': 'error',
    'prefer-arrow-callback': 'error',
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
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        vars: 'all'
      }
    ],
    'require-yield': 'error',
    'no-new-symbol': 'error',
    'getter-return': 'error',
    'for-direction': 'error',
    'no-lonely-if': 'error',
    'no-shadow': 'error',

    'node/no-callback-literal': 'off',

    'no-whitespace-before-property': 'off',
    'space-before-function-paren': 'off',
    'computed-property-spacing': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'array-bracket-spacing': 'off',
    'space-before-blocks': 'off',
    'no-trailing-spaces': 'off',
    'space-infix-ops': 'off',
    'space-in-parens': 'off',
    'no-multi-spaces': 'off',
    'keyword-spacing': 'off',
    'no-extra-parens': 'off',
    'space-unary-ops': 'off',
    'spaced-comment': 'off',
    'comma-spacing': 'off',
    'arrow-spacing': 'off',
    'prefer-const': 'off',
    'brace-style': 'off',
    'quote-props': 'off',
    'max-len': 'off',
    'no-new': 'off',
    'quotes': 'off',
    'indent': 'off',
    'semi': 'off'
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
      files: ['test/*', 'test/**/*', '*.test.{js,jsx}', '*.test.{ts,tsx}'],
      rules: {
        'node/no-unpublished-require': 'off',
        'node/no-missing-require': [
          'error',
          {
            allowModules: ['worker_threads']
          }
        ]
      }
    },
    {
      files: ['*.test.{js,jsx}', '*.test.{ts,tsx}'],
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
      rules: {
        'jest/require-to-throw-message': 'error',
        'jest/no-deprecated-functions': 'error',
        'jest/no-restricted-matchers': [
          'error',
          {
            toBeTruthy: 'Avoid `toBeTruthy`',
            toBeFalsy: 'Avoid `toBeFalsy`'
          }
        ],
        'jest/prefer-hooks-on-top': 'error',
        'jest/no-duplicate-hooks': 'error',
        'jest/consistent-test-it': ['error', { fn: 'it' }],
        'jest/prefer-called-with': 'error',
        'jest/lowercase-name': 'error',
        'jest/prefer-spy-on': 'error',
        'jest/valid-title': 'error',
        'jest/prefer-todo': 'error',

        'jest/valid-expect-in-promise': 'off',
        'jest/expect-expect': 'off',

        'node/global-require': 'off'
      },
      globals: jest
    }
  ]
}
