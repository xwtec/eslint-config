'use strict';

module.exports = {
  plugins: ['prettier'],
  extends: [
    'plugin:prettier/recommended',
    require.resolve('eslint-config-prettier'),
  ],
  rules: {
    // specify curly brace conventions for all control statements
    curly: ['warn', 'all'],

    'prettier/prettier': 'warn',
  },
};
