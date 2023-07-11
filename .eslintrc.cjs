
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
    tsconfigRootDir: __dirname,
  },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  ignorePatterns: ['*.cjs'],
  rules: {
    'no-console': process.env.NODE_ENV === 'development' ? 'off' : 'error',
    'max-len': ['error', { 'code': 120 }],
    'no-multi-spaces': 'error',
    'jsx-quotes': ['error', 'prefer-double'],
    'react-hooks/rules-of-hooks': 'error',
    'react-refresh/only-export-components': 'warn',
    'react/jsx-closing-bracket-location': 'warn',
    'react/jsx-closing-tag-location': 'warn',
    'react/jsx-boolean-value': 'error',
    'react/jsx-wrap-multilines': 'error',
    'react/self-closing-comp': ["error", { "component": true, "html": true }],
    'react/jsx-max-props-per-line': ['warn', { 'maximum': 1, "when": "multiline" }],
    '@typescript-eslint/no-non-null-assertion': 'off',
  }
}
