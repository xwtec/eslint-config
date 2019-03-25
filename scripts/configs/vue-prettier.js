export default {
  name:
    'vue/strongly-recommended + vue/no-layout-rules + prettier + prettier/vue',
  config: {
    plugins: ['vue'],
    extends: [
      'plugin:vue/strongly-recommended',
      require.resolve('eslint-config-prettier'),
      require.resolve('eslint-config-prettier/vue'),
    ],
  },
}
