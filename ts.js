let base = require('./')

module.exports = {
  ...base,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: process.cwd(),
    project: ['./tsconfig.json']
  },
  plugins: [
    ...base.plugins,
    '@typescript-eslint'
  ],
  overrides: [
    ...base.overrides,
    {
      files: ['*.ts'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ],
      rules: {
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/space-before-function-paren': ['error', 'always'],
        '@typescript-eslint/strict-boolean-expressions': 'error',
        '@typescript-eslint/no-unnecessary-condition': 'error',
        '@typescript-eslint/member-delimiter-style': ['error', {
          multiline: {
            delimiter: 'none'
          }
        }],
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/no-dupe-class-members': 'error',
        '@typescript-eslint/no-use-before-define': ['error', {
          functions: false,
          classes: false,
          variables: false
        }],
        '@typescript-eslint/unified-signatures': 'error',
        '@typescript-eslint/func-call-spacing': ['error', 'never'],
        '@typescript-eslint/no-invalid-this': 'error',
        '@typescript-eslint/no-extra-parens': ['error', 'functions'],
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/comma-spacing': ['error', {
          before: false,
          after: true
        }],
        '@typescript-eslint/dot-notation': ['error', {
          allowKeywords: true
        }],
        '@typescript-eslint/brace-style': ['error', '1tbs', {
          allowSingleLine: true
        }],
        '@typescript-eslint/keyword-spacing': ['error', {
          before: true,
          after: true
        }],
        '@typescript-eslint/no-unused-expressions': ['error', {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true
        }],
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/quotes': ['error', 'single', {
          avoidEscape: true,
          allowTemplateLiterals: false
        }],
        '@typescript-eslint/indent': ['error', 2, {
          SwitchCase: 1,
          VariableDeclarator: 1,
          outerIIFEBody: 1,
          MemberExpression: 1,
          FunctionDeclaration: { parameters: 1, body: 1 },
          FunctionExpression: { parameters: 1, body: 1 },
          CallExpression: { arguments: 1 },
          ArrayExpression: 1,
          ObjectExpression: 1,
          ImportDeclaration: 1,
          flatTernaryExpressions: false,
          ignoreComments: false,
          ignoredNodes: ['TemplateLiteral *']
        }],
        '@typescript-eslint/semi': ['error', 'never'],

        'no-useless-constructor': 'off',
        'no-unused-expressions': 'off',
        'no-dupe-class-members': 'off',
        'no-use-before-define': 'off',
        'func-callspacing': 'off',
        'no-invalid-this': 'off',
        'no-extra-parens': 'off',
        'keyword-spacing': 'off',
        'no-unused-vars': 'off',
        'comma-spacing': 'off',
        'dot-notation': 'off',
        'brace-style': 'off',
        'quotes': 'off',
        'indent': 'off',
        'semi': 'off'
      }
    }
  ]
}
