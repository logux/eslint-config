let base = require('./')

module.exports = {
  ...base,
  plugins: [...base.plugins, '@typescript-eslint'],
  overrides: [
    ...base.overrides,
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: process.cwd(),
        project: ['./tsconfig.json']
      },
      rules: {
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/no-confusing-void-expression': 'error',
        '@typescript-eslint/lines-between-class-members': [
          'error',
          'always',
          {
            exceptAfterSingleLine: true
          }
        ],
        '@typescript-eslint/space-before-function-paren': ['error', 'always'],
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/no-unnecessary-condition': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/member-delimiter-style': [
          'error',
          {
            multiline: {
              delimiter: 'none'
            },
            singleline: {
              delimiter: 'semi'
            }
          }
        ],
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/no-dupe-class-members': 'error',
        '@typescript-eslint/no-use-before-define': [
          'error',
          {
            functions: false,
            classes: false,
            variables: false
          }
        ],
        '@typescript-eslint/object-curly-spacing': ['error', 'always'],
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/unified-signatures': 'error',
        '@typescript-eslint/func-call-spacing': ['error', 'never'],
        '@typescript-eslint/no-invalid-this': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-redeclare': 'error',
        '@typescript-eslint/dot-notation': [
          'error',
          {
            allowKeywords: true
          }
        ],
        '@typescript-eslint/no-unused-expressions': [
          'error',
          {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true
          }
        ],
        '@typescript-eslint/array-type': 'error',

        'import/extensions': ['error', 'always', { ignorePackages: true }],

        'lines-between-class-members': 'off',
        'no-useless-constructor': 'off',
        'no-unused-expressions': 'off',
        'no-dupe-class-members': 'off',
        'no-use-before-define': 'off',
        'object-curly-spacing': 'off',
        'func-callspacing': 'off',
        'no-invalid-this': 'off',
        'no-unused-vars': 'off',
        'no-redeclare': 'off',
        'dot-notation': 'off'
      }
    },
    {
      files: '*.test.{ts,tsx}',
      rules: {
        '@typescript-eslint/no-unused-expressions': 'off',
        '@typescript-eslint/no-explicit-any': 'off'
      }
    },
    {
      files: '*.d.ts',
      rules: {
        'unicorn/custom-error-definition': 'off'
      }
    }
  ]
}
