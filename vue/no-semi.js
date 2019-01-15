module.exports = {
  root: true,
  parser: require.resolve('babel-eslint'),
  env: {
    es6: true,
    node: true,
    browser: true
  },
  extends: [
    'eslint-config-airbnb-base',
    '../settings/import.js',
    '../rules/index.js',
    '../rules/conflicts-with-prettier.js',
    '../rules/no-semi.js'
  ].map(require.resolve),
}