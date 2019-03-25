// https://github.com/vuejs/eslint-plugin-vue
// https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/configs/strongly-recommended.js

module.exports = {
  plugins: ['vue'],
  extends: ['plugin:vue/strongly-recommended'],
  rules: {
    // allow unused vars
    'vue/no-unused-vars': 'off',

    // allow unused components
    'vue/no-unused-components': 'off',

    // https://vuejs.github.io/eslint-plugin-vue/rules/this-in-template.html
    'vue/this-in-template': ['warn', 'never'],

    'vue/require-default-prop': 'off',

    'vue/require-prop-types': 'off',
  },
}
