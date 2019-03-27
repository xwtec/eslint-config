module.exports = {
  root: true,
  extends: [
    // prettier
    './configs/prettier/prettier.js',

    // basic rules
    './configs/basic/basic-legacy.js',
  ].map(require.resolve),
}
