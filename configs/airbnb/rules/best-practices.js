/*
override airbnb
repo: https://github.com/airbnb/javascript
code: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
*/

module.exports = {
  rules: {
    // allow vars not on top
    'vars-on-top': 'off',

    // allow reassignment of function parameters
    'no-param-reassign': 'off',

    'consistent-return': 'off',

    // allow return assign in parents
    'no-return-assign': 'off',

    // https://eslint.org/docs/rules/no-else-return
    'no-else-return': 'off',

    // enforces return statements in callbacks of array's methods
    // https://eslint.org/docs/rules/array-callback-return
    'array-callback-return': 'off',

    // make sure for-in loops have an if statement
    'guard-for-in': 'off',

    // disallow creation of functions within loops
    'no-loop-func': 'off',

    // disallow use of `javascript:` urls.
    'no-script-url': 'off',

    // disallow use of new operator when not part of the assignment or comparison
    'no-new': 'off',

    // disallow use of new operator for Function object
    'no-new-func': 'off',

    // https://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-coercion': 'off',
  },
}
