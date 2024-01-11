/*
 * This is a custom ESLint configuration for use with
 * React.js apps.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  extends: [
    require.resolve('@vercel/style-guide/eslint/node'),
    require.resolve('@vercel/style-guide/eslint/browser'),
    require.resolve('@vercel/style-guide/eslint/typescript'),
    require.resolve('@vercel/style-guide/eslint/react'),
    require.resolve('eslint-config-turbo'),
    'custom/base',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'plugin:import/typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'import', 'unused-imports'],
  globals: {
    React: true,
    JSX: true,
  },
  ignorePatterns: [
    // Ignore dotfiles
    '.*.js',
    'node_modules/',
    'dist/',
  ],
  // add rules configurations here
  rules: {
    'import/no-default-export': 'off',
    'turbo/no-undeclared-env-vars': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/non-nullable-type-assertion-style': 'off',
    '@typescript-eslint/no-invalid-void-type': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-useless-template-literals': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@tanstack/query/stable-query-client': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'react/display-name': 'off',
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
        // react components should be in PascalCase
        // and react hooks should be in camelCase
        ignore: ['^use.+\\.ts$', '^.+\\.tsx$', '^.+\\.ts$'],
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
    'jsx-a11y/label-has-associated-control': 'off',
    'no-unused-vars': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        semi: true,
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.md'],
      },
    ],
    'linebreak-style': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/button-has-type': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-leaked-render': 'off',
    'react/prop-types': 'off',
    'import/no-cycle': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-confusing-void-expression': 'off',
    'react/no-array-index-key': 'off',
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'no-case-declarations': 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'off',
    'consistent-return': 'off',
    'unicorn/prefer-node-protocol': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-types': 'off',
    'class-methods-use-this': 'off',
    'no-nested-ternary': 'off',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
      },
    ],
    'import/no-unresolved': ['error', { commonjs: true, amd: true }],
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    '@next/next/inline-script-id': 'off',
    'import/order': [
      1,
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: '@/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: ['@mui/*/*/*', '!@mui/material/test-utils/*'],
      },
    ],
  },
};
