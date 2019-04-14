module.exports = {
  root: true,
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
  extends: [
    // builtin
    './configs/errors.js',
    './configs/best-practices.js',
    './configs/variables.js',
    './configs/es6.js',
    './configs/style.js',

    // prettier
    './configs/prettier.js',
  ].map(require.resolve),
};
