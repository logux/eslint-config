let base = require('./')

module.exports = {
  ...base,
  overrides: [
    ...base.overrides,
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: process.cwd()
      },
      rules: {
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/await-thenable': 'error',
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
        '@typescript-eslint/lines-between-class-members': [
          'error',
          'always',
          {
            exceptAfterSingleLine: true
          }
        ],
        '@typescript-eslint/no-confusing-void-expression': 'error',
        '@typescript-eslint/no-dupe-class-members': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-import-type-side-effects': 'error',
        '@typescript-eslint/no-invalid-this': 'error',
        '@typescript-eslint/no-mixed-enums': 'error',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-redeclare': 'error',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/no-unnecessary-condition': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unused-expressions': [
          'error',
          {
            allowShortCircuit: true,
            allowTaggedTemplates: true,
            allowTernary: true
          }
        ],
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-use-before-define': [
          'error',
          {
            classes: false,
            functions: false,
            variables: false
          }
        ],
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/unified-signatures': 'error',

        'dot-notation': 'off',

        'func-callspacing': 'off',
        'import/extensions': ['error', 'always', { ignorePackages: true }],
        'lines-between-class-members': 'off',
        'no-dupe-class-members': 'off',
        'no-invalid-this': 'off',
        'no-redeclare': 'off',
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        'no-useless-constructor': 'off',
        'object-curly-spacing': 'off'
      }
    },
    {
      files: ['*.{test.ts,test.tsx,stories.tsx}', 'types.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-expressions': 'off',

        'n/no-unsupported-features/es-syntax': 'off'
      }
    },
    {
      files: 'types.ts',
      rules: {
        'no-console': 'off'
      }
    }
  ],
  plugins: [...base.plugins, '@typescript-eslint']
}
