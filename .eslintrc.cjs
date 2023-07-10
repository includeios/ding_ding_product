module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      'jsx': true
    }
  },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  ignorePatterns: ['*.cjs'],
  rules: {
    'max-len': ['error', { 'code': 120 }],
    'no-console': 'error',
    'no-multi-spaces': 'error',
    'jsx-quotes': ['error', 'prefer-double'],
    'react-hooks/rules-of-hooks': 'error',
    'react-refresh/only-export-components': 'warn',
    'react/jsx-closing-bracket-location': 1,
    'react/jsx-closing-tag-location': 1,
    'react/jsx-boolean-value': 2,
    'react/jsx-wrap-multilines': 2,
    'react/self-closing-comp': ["error", { "component": true, "html": true }],
    'react/jsx-max-props-per-line': [1, { 'maximum': 1, "when": "multiline" }]
  }
}
