'use strict';

module.exports = {
  root: true,
  parser: require.resolve('@babel/eslint-parser'),
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    allowImportExportEverywhere: true,
    requireConfigFile: false,
    ecmaFeatures: {
      globalReturn: false,
      jsx: true,
    },
    babelOptions: {
      parserOpts: {
        allowAwaitOutsideFunction: true,
        plugins: [
          'classProperties',
          'exportDefaultFrom',
          'classPrivateProperties',
          'classPrivateMethods',
          'importMeta',
        ],
      },
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
