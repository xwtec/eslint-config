export default {
  name: 'prettier',
  config: {
    extends: ['eslint-config-prettier'].map(require.resolve),
  },
}
