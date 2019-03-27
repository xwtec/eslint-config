/**
 * dev notice:
 * don't use @vue/eslint-config-prettier
 * eslint:recommended extend in this config breaks airbnb
 * check this https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/eslint-config-prettier/index.js
 */

module.exports = {
  root: true,
  extends: [
    // vue
    './configs/vue/vue.js',

    // prettier
    './configs/prettier/prettier.js',

    // basic rules
    './configs/basic/basic.js',
  ].map(require.resolve),
}
