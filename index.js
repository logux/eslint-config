import eslintN from 'eslint-plugin-n'
import eslintPerfectionist from 'eslint-plugin-perfectionist'
import eslintPreferLet from 'eslint-plugin-prefer-let'
import neostandard from 'neostandard'

import { removeLanguage } from './util.js'

let [standard, globals] = removeLanguage(neostandard({ noStyle: true }))

export default [
  ...standard,
  {
    languageOptions: {
      globals,
      parserOptions: {
        ecmaVersion: 2022,
        jsx: true
      },
      sourceType: 'module'
    },
    name: 'logux/base',
    plugins: {
      'n': eslintN,
      'perfectionist': eslintPerfectionist,
      'prefer-let': eslintPreferLet
    },
    rules: {
      ...eslintPerfectionist.configs['recommended-alphabetical'].rules,
      'block-scoped-var': 'error',
      'for-direction': 'error',
      'func-name-matching': 'error',
      'getter-return': 'error',
      'n/global-require': 'error',
      'n/no-callback-literal': 'off',
      'n/no-extraneous-require': 'error',
      'n/no-missing-require': 'error',
      'n/no-unpublished-require': 'error',
      'n/no-unsupported-features/es-builtins': 'error',
      'n/no-unsupported-features/es-syntax': [
        'error',
        {
          ignores: ['modules', 'dynamicImport']
        }
      ],
      'n/no-unsupported-features/node-builtins': [
        'error',
        {
          ignores: ['worker_threads']
        }
      ],
      'n/prefer-node-protocol': 'error',
      'no-console': 'error',
      'no-dupe-else-if': 'error',
      'no-invalid-this': 'error',
      'no-lonely-if': 'error',
      'no-nested-ternary': 'error',
      'no-new': 'off',
      'no-setter-return': 'error',
      'no-shadow': 'error',
      'no-unsafe-optional-chaining': 'error',
      'no-unused-vars': [
        'error',
        {
          args: 'after-used',
          vars: 'all'
        }
      ],
      'object-shorthand': 'error',
      'perfectionist/sort-imports': [
        'error',
        {
          groups: [
            'side-effect',
            'side-effect-style',
            'style',
            ['builtin-type', 'type', 'builtin', 'external', 'unknown'],
            [
              'internal-type',
              'parent-type',
              'sibling-type',
              'index-type',
              'internal',
              'parent',
              'sibling',
              'index'
            ],
            ['object']
          ],
          newlinesBetween: 'always',
          order: 'asc',
          type: 'alphabetical'
        }
      ],
      'perfectionist/sort-modules': 'off',
      'perfectionist/sort-svelte-attributes': 'off',
      'prefer-arrow-callback': 'error',
      'prefer-const': 'off',
      'prefer-exponentiation-operator': 'error',
      'prefer-let/prefer-let': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'require-yield': 'error',
      'unicode-bom': 'off'
    }
  },
  {
    files: ['**/test/*'],
    name: 'logux/test-fixtures',
    rules: {
      'n/no-unpublished-require': 'off',
      'n/no-unsupported-features/node-builtins': 'off'
    }
  },
  {
    files: ['**/*.test.{js,jsx}', '**/*.test.{ts,tsx}'],
    name: 'logux/tests',
    rules: {
      'n/global-require': 'off',
      'no-unused-expressions': 'off'
    }
  }
]
