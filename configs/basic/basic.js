module.exports = {
  extends: [
    './errors.js',
    './best-practices.js',
    './variables.js',
    './es6.js',
    './style.js',
  ].map(require.resolve),
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      jsx: true,
    },
  },
  rules: {},
}
