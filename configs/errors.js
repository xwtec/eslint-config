/*
override airbnb
repo: https://github.com/airbnb/javascript
code: https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/errors.js
rule: https://eslint.org/docs/rules/#possible-errors
*/

'use strict';

module.exports = {
  rules: {
    // Enforce “for” loop update clause moving the counter in the right direction
    // https://eslint.org/docs/rules/for-direction
    'for-direction': 'warn',

    // Enforces that a return statement is present in property getters
    // https://eslint.org/docs/rules/getter-return
    'getter-return': ['warn', {allowImplicit: true}],

    // Disallow comparisons to negative zero
    // https://eslint.org/docs/rules/no-compare-neg-zero
    'no-compare-neg-zero': 'warn',

    // disallow use of constant expressions in conditions
    'no-constant-condition': ['warn', {checkLoops: false}],

    // disallow duplicate arguments in functions
    'no-dupe-args': 'error',

    // disallow duplicate conditions in if-else-if chains
    'no-dupe-else-if': 'error',

    // disallow duplicate keys when creating object literals
    'no-dupe-keys': 'error',

    // disallow a duplicate case label.
    'no-duplicate-case': 'warn',

    // disallow empty statements
    'no-empty': [
      'warn',
      {
        allowEmptyCatch: true,
      },
    ],

    // disallow the use of empty character classes in regular expressions
    'no-empty-character-class': 'warn',

    // disallow assigning to the exception in a catch block
    'no-ex-assign': 'warn',

    // disallow double-negation boolean casts in a boolean context
    // https://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': 'warn',

    // disallow overwriting functions written as function declarations
    'no-func-assign': 'error',

    // disallow assigning to imported bindings
    'no-import-assign': 'error',

    // disallow function or variable declarations in nested blocks
    'no-inner-declarations': 'warn',

    // disallow invalid regular expression strings in the RegExp constructor
    'no-invalid-regexp': 'warn',

    // disallow irregular whitespace outside of strings and comments
    'no-irregular-whitespace': 'error',

    // disallow the use of object properties of the global object (Math and JSON) as functions
    'no-obj-calls': 'error',

    // disallow multiple spaces in a regular expression literal
    'no-regex-spaces': 'warn',

    // disallow sparse arrays
    'no-sparse-arrays': 'warn',

    // disallow returning values from setters
    'no-setter-return': 'error',

    // Avoid code that looks like two expressions but is actually one
    // https://eslint.org/docs/rules/no-unexpected-multiline
    'no-unexpected-multiline': 'warn',

    // disallow unreachable statements after a return, throw, continue, or break statement
    'no-unreachable': 'warn',

    // disallow return/throw/break/continue inside finally blocks
    // https://eslint.org/docs/rules/no-unsafe-finally
    'no-unsafe-finally': 'warn',

    // disallow negating the left operand of relational operators
    // https://eslint.org/docs/rules/no-unsafe-negation
    'no-unsafe-negation': 'warn',

    // disallow use of optional chaining in contexts where the undefined value is not allowed
    // https://eslint.org/docs/rules/no-unsafe-optional-chaining
    'no-unsafe-optional-chaining': 'warn',

    // require Radix Parameter
    // https://eslint.org/docs/rules/radix
    radix: 'warn',

    // disallow comparisons with the value NaN
    'use-isnan': 'error',

    // ensure that the results of typeof are compared against a valid string
    // https://eslint.org/docs/rules/valid-typeof
    'valid-typeof': 'warn',
  },
};
