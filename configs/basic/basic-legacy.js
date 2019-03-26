module.exports = {
  extends: [
    './errors.js',
    './best-practices.js',
    './variables.js',
    './style.js',
  ].map(require.resolve),
  env: {
    node: true,
    browser: true,
    es6: true,
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
