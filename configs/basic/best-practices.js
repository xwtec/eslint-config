/*
override airbnb
repo: https://github.com/airbnb/javascript
code: https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/best-practices.js
rule: https://eslint.org/docs/rules/#best-practices
*/

module.exports = {
  rules: {
    // require the use of === and !==
    // https://eslint.org/docs/rules/eqeqeq
    eqeqeq: ['error', 'always', {null: 'ignore'}],

    // make sure for-in loops have an if statement
    'guard-for-in': 'warn',

    // disallow use of arguments.caller or arguments.callee
    'no-caller': 'error',

    // disallow lexical declarations in case/default clauses
    // https://eslint.org/docs/rules/no-case-declarations.html
    'no-case-declarations': 'warn',

    // disallow empty destructuring patterns
    // https://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern': 'error',

    // disallow comparisons to null without a type-checking operator
    'no-eq-null': 'off',

    // disallow use of eval()
    'no-eval': 'error',

    // disallow adding to native types
    'no-extend-native': 'warn',

    // disallow Unnecessary Labels
    // https://eslint.org/docs/rules/no-extra-label
    'no-extra-label': 'warn',

    // disallow fallthrough of case statements
    'no-fallthrough': 'warn',

    // disallow reassignments of native objects or read-only globals
    // https://eslint.org/docs/rules/no-global-assign
    'no-global-assign': ['warn', {exceptions: []}],

    // disallow use of eval()-like methods
    'no-implied-eval': 'error',

    // disallow use of labels for anything other then loops and switches
    'no-labels': [
      'warn',
      {
        allowLoop: false,
        allowSwitch: false,
      },
    ],

    // disallow usage of __iterator__ property
    'no-iterator': 'warn',

    // disallow use of multiline strings
    'no-multi-str': 'warn',

    // disallows creating new instances of String, Number, and Boolean
    'no-new-wrappers': 'warn',

    // disallow use of (old style) octal literals
    'no-octal': 'warn',

    // disallow use of octal escape sequences in string literals, such as
    // var foo = 'Copyright \251';
    'no-octal-escape': 'warn',

    // disallow usage of __proto__ property
    'no-proto': 'warn',

    // disallow declaring the same variable more then once
    'no-redeclare': 'error',

    // disallow certain object properties
    // https://eslint.org/docs/rules/no-restricted-properties
    'no-restricted-properties': [
      'warn',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated',
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.',
      },
    ],

    // disallow self assignment
    // https://eslint.org/docs/rules/no-self-assign
    'no-self-assign': [
      'warn',
      {
        props: false,
      },
    ],

    // disallow comparisons where both sides are exactly the same
    'no-self-compare': 'error',

    // disallow use of comma operator
    'no-sequences': 'error',

    // restrict what can be thrown as an exception
    'no-throw-literal': 'warn',

    // disallow unmodified conditions of loops
    // https://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unmodified-loop-condition': 'warn',

    // disallow unused labels
    // https://eslint.org/docs/rules/no-unused-labels
    'no-unused-labels': 'warn',

    // disallow unnecessary string escaping
    // https://eslint.org/docs/rules/no-useless-escape
    'no-useless-escape': 'warn',

    // disallow use of void operator
    // https://eslint.org/docs/rules/no-void
    'no-void': 'warn',

    // disallow use of the with statement
    'no-with': 'warn',

    // require use of the second argument for parseInt()
    radix: 'warn',
  },
}
