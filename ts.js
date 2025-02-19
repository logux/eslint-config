import tseslint from 'typescript-eslint'

import base from './index.js'

export default [
  ...base,
  ...tseslint.configs.strictTypeChecked,
  {
    files: ['**/*.js'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true
      }
    }
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.mts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: true
      }
    },
    rules: {
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/dot-notation': [
        'error',
        {
          allowKeywords: true
        }
      ],
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: true
        }
      ],
      '@typescript-eslint/no-dupe-class-members': 'error',
      '@typescript-eslint/no-dynamic-delete': 'off',
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/no-invalid-this': [
        'error',
        { capIsConstructor: true }
      ],
      '@typescript-eslint/no-invalid-void-type': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-redeclare': 'error',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-unnecessary-type-parameters': 'off',
      '@typescript-eslint/no-unsafe-type-assertion': 'error',
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTaggedTemplates: true,
          allowTernary: true
        }
      ],
      '@typescript-eslint/no-use-before-define': [
        'error',
        {
          classes: false,
          functions: false,
          variables: false
        }
      ],
      '@typescript-eslint/no-var-requires': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/restrict-template-expressions': [
        'error',
        {
          allowNumber: true
        }
      ],
      'dot-notation': 'off',

      'func-callspacing': 'off',

      'import/extensions': [
        'error',
        'always',
        { checkTypeImports: true, ignorePackages: true }
      ],
      'lines-between-class-members': 'off',
      'no-invalid-this': 'off',
      'no-shadow': 'off',
      'no-use-before-define': 'off',
      'object-curly-spacing': 'off',
      'prefer-const': 'off'
    }
  },
  {
    files: ['*.{test.ts,test.tsx,stories.tsx}', 'types.ts', '**/test/*'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-unused-expressions': 'off'
    }
  },
  {
    files: ['**/types.ts'],
    rules: {
      'no-console': 'off'
    }
  },
  {
    files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
    ...tseslint.configs.disableTypeChecked,
    rules: {
      ...tseslint.configs.disableTypeChecked.rules,
      '@typescript-eslint/no-dynamic-delete': 'off'
    }
  }
]
