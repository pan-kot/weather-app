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

    'no-ternary': 'off',

    'no-undefined': 'off',

    'no-use-before-define': 'off',

    // React
    'react/jsx-no-literals': 'off',

    'react/jsx-one-expression-per-line': 'off',

    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],

    'react/jsx-indent': 'off',

    'react/jsx-indent-props': 'off',

    'react/jsx-fragments': ['error', 'element'],

    'react/jsx-max-depth': 'off',

    'react/jsx-max-props-per-line': 'off',

    'react/jsx-sort-props': 'off',

    'react/jsx-no-useless-fragment': 'off',

    'react/jsx-props-no-spreading': 'off',

    // TypeScript
    '@typescript-eslint/explicit-function-return-type': 'off',

    '@typescript-eslint/no-use-before-define': 'off',

    '@typescript-eslint/explicit-module-boundary-types': 'off',

    '@typescript-eslint/no-explicit-any': 'off',
  },

  overrides: [
    {
      files: ['*.tsx'],
      rules: {
        'max-lines-per-function': ['warn', 100],
      },
    },
  ],
};
