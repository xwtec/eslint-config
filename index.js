module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      globalReturn: false,
      jsx: true,
    },
  },
  extends: [
    // fixable
    './configs/fixable.js',
    './configs/fixable.es.js',

    // builtin
    './configs/errors.js',
    './configs/best-practices.js',
    './configs/variables.js',
    './configs/es.js',
    './configs/style.js',

    // prettier
    'eslint-config-prettier',
    './configs/prettier.js',
  ].map(require.resolve),
};
