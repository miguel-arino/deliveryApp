module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    'import',
    'react-hooks',
    'prefer-arrow-functions',
    'unused-imports',
    'react-native',
    'prettier',
    '@typescript-eslint'
  ],
  extends: [
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',  
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  env: {
    'react-native/react-native': true,
    browser: true,
    es2021: true,
    node: true
  },
  files: ['**/*.ts', '**/*.tsx'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'brace-style': ['error', '1tbs', { allowSingleLine: false }], // Enforce one true brace style
    'object-curly-spacing': ['error', 'always'], // Ensure consistent spacing inside curly braces
    'react/jsx-closing-bracket-location': [1, 'line-aligned'],
    'react-native/no-unused-styles': 2,
    semi: ['error', 'never'],
  }
}
