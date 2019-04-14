/*
override airbnb
repo: https://github.com/airbnb/javascript
code: https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/variables.js
rule: https://eslint.org/docs/rules/#variables
*/

module.exports = {
  rules: {
    // disallow deletion of variables
    'no-delete-var': 'error',

    // disallow use of undeclared variables unless mentioned in a /*global */ block
    'no-undef': 'error',
  },
};
