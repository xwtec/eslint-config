export default {
  name: 'vue/essential + vue/no-layout-rules + prettier + prettier/vue',
  config: {
    plugins: ['vue'],
    extends: [
      'plugin:vue/essential',
      require.resolve('eslint-config-prettier'),
      require.resolve('eslint-config-prettier/vue'),
    ],
  },
}
