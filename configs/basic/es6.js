/*
override airbnb
repo: https://github.com/airbnb/javascript
code: https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/es6.js
rule: https://eslint.org/docs/rules/#ecmascript-6
*/

module.exports = {
  rules: {
    // verify super() callings in constructors
    'constructor-super': 'warn',

    // disallow modifying variables of class declarations
    // https://eslint.org/docs/rules/no-class-assign
    'no-class-assign': 'error',

    // disallow modifying variables that are declared using const
    'no-const-assign': 'error',

    // disallow duplicate class members
    // https://eslint.org/docs/rules/no-dupe-class-members
    'no-dupe-class-members': 'error',

    // disallow symbol constructor
    // https://eslint.org/docs/rules/no-new-symbol
    'no-new-symbol': 'error',

    // disallow to use this/super before super() calling in constructors.
    // https://eslint.org/docs/rules/no-this-before-super
    'no-this-before-super': 'warn',

    // disallow generator functions that do not have yield
    // https://eslint.org/docs/rules/require-yield
    'require-yield': 'error',
  },
}
