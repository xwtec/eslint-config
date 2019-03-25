// https://github.com/vuejs/eslint-plugin-vue
// https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/configs/strongly-recommended.js

module.exports = {
  plugins: ['vue'],
  extends: ['plugin:vue/essential'],
  rules: {
    // allow unused vars
    'vue/no-unused-vars': 'off',

    // allow unused components
    'vue/no-unused-components': 'off',

    'vue/no-use-v-if-with-v-for': 'off',

    'vue/require-component-is': 'warn',

    'vue/require-render-return': 'warn',

    'vue/require-v-for-key': 'off',

    'vue/require-valid-default-prop': 'warn',

    'vue/return-in-computed-property': 'warn',

    'vue/use-v-on-exact': 'off',

    'vue/valid-template-root': 'warn',
  },
}
