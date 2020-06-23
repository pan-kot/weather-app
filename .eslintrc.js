module.exports = {
  parser: '@typescript-eslint/parser',

  extends: [
    'eslint:all',
    'plugin:react/all',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],

  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.ts', '.tsx'],
      },
    },
  },

  env: {
    jest: true,
    browser: true,
  },

  plugins: ['react-hooks'],

  globals: {
    process: 'readonly',
  },

  rules: {
    // ESLint
    'sort-keys': 'off',

    'sort-imports': 'off',

    'no-process-env': 'off',

    'func-style': 'off',

    'id-length': 'off',

    'one-var': 'off',

    'no-magic-numbers': 'off',

    'no-warning-comments': 'off',

    // React
    'react/jsx-no-literals': 'off',

    'react/jsx-one-expression-per-line': 'off',

    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],

    'react/jsx-indent': 'off',

    'react/jsx-indent-props': 'off',

    'react/jsx-fragments': ['error', 'element'],

    // TypeScript
    '@typescript-eslint/explicit-function-return-type': 'off',

    '@typescript-eslint/no-use-before-define': 'off',
  },
};
