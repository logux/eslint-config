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
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: true
          }
        ],
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/no-confusing-void-expression': 'error',
        // '@typescript-eslint/consistent-type-definitions': [
        //   'error',
        //   'interface'
        // ],
        '@typescript-eslint/lines-between-class-members': [
          'error',
          'always',
          {
            exceptAfterSingleLine: true
          }
        ],
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/no-unnecessary-condition': 'error',
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
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/unified-signatures': 'error',
        '@typescript-eslint/no-invalid-this': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-redeclare': 'error',
        '@typescript-eslint/no-shadow': 'error',
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
        'dot-notation': 'off',
        'no-shadow': 'off',
        'no-undef': 'off'
      }
    },
    {
      files: '*.{test.ts,test.tsx,stories.tsx}',
      rules: {
        '@typescript-eslint/no-unused-expressions': 'off',
        '@typescript-eslint/no-explicit-any': 'off'
      }
    },
    {
      files: 'types.ts',
      rules: {
        'no-console': 'off'
      }
    }
  ]
}
