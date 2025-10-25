import importX from 'eslint-plugin-import-x'
import eslintN from 'eslint-plugin-n'
import eslintPerfectionist from 'eslint-plugin-perfectionist'
import eslintPreferLet from 'eslint-plugin-prefer-let'
import promise from 'eslint-plugin-promise'
import globals from 'globals'

import { changeLevel } from './util.js'

export default [
  {
    languageOptions: {
      globals: {
        ...globals.es2022,
        ...globals.node,
        document: 'readonly',
        navigator: 'readonly',
        window: 'readonly'
      },
      parserOptions: {
        ecmaVersion: 2022,
        jsx: true
      },
      sourceType: 'module'
    },
    name: 'logux/base',
    plugins: {
      'import-x': importX,
      'n': eslintN,
      'perfectionist': eslintPerfectionist,
      'prefer-let': eslintPreferLet,
      promise
    },
    rules: {
      ...changeLevel(
        eslintPerfectionist.configs['recommended-alphabetical'].rules,
        'warn'
      ),
      'accessor-pairs': [
        'error',
        { enforceForClassMembers: true, setWithoutGet: true }
      ],
      'array-callback-return': [
        'error',
        {
          allowImplicit: false,
          checkForEach: false
        }
      ],
      'block-scoped-var': 'error',
      'camelcase': [
        'error',
        {
          allow: ['^UNSAFE_'],
          ignoreGlobals: true,
          properties: 'never'
        }
      ],
      'constructor-super': 'error',
      'curly': ['error', 'multi-line'],
      'default-case-last': 'error',
      'dot-notation': ['error', { allowKeywords: true }],
      'eqeqeq': ['error', 'always', { null: 'ignore' }],
      'for-direction': 'error',
      'func-name-matching': 'error',
      'getter-return': 'error',
      'import-x/export': 'error',
      'import-x/first': 'error',
      'import-x/no-absolute-path': [
        'error',
        { amd: false, commonjs: true, esmodule: true }
      ],
      'import-x/no-duplicates': 'error',
      'import-x/no-named-default': 'error',
      'import-x/no-webpack-loader-syntax': 'error',
      'n/global-require': 'error',
      'n/handle-callback-err': ['error', '^(err|error)$'],
      'n/no-deprecated-api': 'error',
      'n/no-exports-assign': 'error',
      'n/no-extraneous-require': 'error',
      'n/no-missing-require': 'error',
      'n/no-new-require': 'error',
      'n/no-path-concat': 'error',
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
      'n/process-exit-as-throw': 'error',
      'new-cap': [
        'error',
        { capIsNew: false, newIsCap: true, properties: true }
      ],
      'no-array-constructor': 'error',
      'no-async-promise-executor': 'error',
      'no-caller': 'error',
      'no-case-declarations': 'error',
      'no-class-assign': 'error',
      'no-compare-neg-zero': 'error',
      'no-cond-assign': 'error',
      'no-console': 'error',
      'no-const-assign': 'error',
      'no-constant-condition': ['error', { checkLoops: false }],
      'no-control-regex': 'error',
      'no-debugger': 'error',
      'no-delete-var': 'error',
      'no-dupe-args': 'error',
      'no-dupe-class-members': 'error',
      'no-dupe-else-if': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-empty': ['error', { allowEmptyCatch: true }],
      'no-empty-character-class': 'error',
      'no-empty-pattern': 'error',
      'no-eval': 'error',
      'no-ex-assign': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-extra-boolean-cast': 'error',
      'no-fallthrough': 'error',
      'no-func-assign': 'error',
      'no-global-assign': 'error',
      'no-implied-eval': 'error',
      'no-import-assign': 'error',
      'no-invalid-regexp': 'error',
      'no-invalid-this': 'error',
      'no-irregular-whitespace': 'error',
      'no-iterator': 'error',
      'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
      'no-lone-blocks': 'error',
      'no-lonely-if': 'error',
      'no-loss-of-precision': 'error',
      'no-misleading-character-class': 'error',
      'no-multi-str': 'error',
      'no-nested-ternary': 'error',
      'no-new-func': 'error',
      'no-new-native-nonconstructor': 'error',
      'no-new-wrappers': 'error',
      'no-obj-calls': 'error',
      'no-object-constructor': 'error',
      'no-octal': 'error',
      'no-octal-escape': 'error',
      'no-proto': 'error',
      'no-prototype-builtins': 'error',
      'no-redeclare': ['error', { builtinGlobals: false }],
      'no-regex-spaces': 'error',
      'no-return-assign': ['error', 'except-parens'],
      'no-self-assign': ['error', { props: true }],
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-setter-return': 'error',
      'no-shadow': 'error',
      'no-shadow-restricted-names': 'error',
      'no-sparse-arrays': 'error',
      'no-template-curly-in-string': 'error',
      'no-this-before-super': 'error',
      'no-throw-literal': 'error',
      'no-unassigned-vars': 'error',
      'no-undef': 'error',
      'no-undef-init': 'error',
      'no-unexpected-multiline': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unneeded-ternary': ['error', { defaultAssignment: false }],
      'no-unreachable': 'error',
      'no-unreachable-loop': 'error',
      'no-unsafe-finally': 'error',
      'no-unsafe-negation': 'error',
      'no-unsafe-optional-chaining': 'error',
      'no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTaggedTemplates: true,
          allowTernary: true
        }
      ],
      'no-unused-vars': [
        'error',
        {
          args: 'after-used',
          vars: 'all'
        }
      ],
      'no-use-before-define': [
        'error',
        { classes: false, functions: false, variables: false }
      ],
      'no-useless-backreference': 'error',
      'no-useless-call': 'error',
      'no-useless-catch': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-constructor': 'error',
      'no-useless-escape': 'error',
      'no-useless-rename': 'error',
      'no-useless-return': 'error',
      'no-var': 'warn',
      'no-void': 'error',
      'no-with': 'error',
      'object-shorthand': 'error',
      'one-var': ['error', { initialized: 'never' }],
      'perfectionist/sort-imports': [
        'warn',
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
      'prefer-exponentiation-operator': 'error',
      'prefer-let/prefer-let': 'error',
      'prefer-promise-reject-errors': 'error',
      'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'preserve-caught-error': 'error',
      'promise/param-names': 'error',
      'require-yield': 'error',
      'symbol-description': 'error',
      'use-isnan': [
        'error',
        {
          enforceForIndexOf: true,
          enforceForSwitchCase: true
        }
      ],
      'valid-typeof': ['error', { requireStringLiterals: true }],
      'yoda': ['error', 'never']
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
