module.exports = {
  extends: ['./errors.js', './best-practices.js', './variables.js'].map(
    require.resolve
  ),
  env: {
    es6: false,
    node: false,
  },
  parserOptions: {
    ecmaVersion: 5,
    sourceType: 'script',
    ecmaFeatures: {
      globalReturn: false,
      jsx: false,
    },
  },
  rules: {
    strict: ['warn', 'function'],

    'no-catch-shadow': 'warn',

    // enforce one true comma style
    'comma-style': 'warn',
  },
}
