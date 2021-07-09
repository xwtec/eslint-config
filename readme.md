# @xwtec/eslint-config

[![devDependencies](https://img.shields.io/david/dev/xwtec/eslint-config.svg?style=flat-square)](https://david-dm.org/xwtec/eslint-config)
[![Issues](http://img.shields.io/github/issues/xwtec/eslint-config.svg?style=flat-square)](https://github.com/xwtec/eslint-config/issues)
[![Issues](https://img.shields.io/github/issues-pr/xwtec/eslint-config.svg?style=flat-square)](https://github.com/xwtec/eslint-config/pulls)
[![GitHub last commit](https://img.shields.io/github/last-commit/xwtec/eslint-config.svg?style=flat-square)](https://github.com/xwtec/eslint-config/commits)
[![GitHub Release Date](https://img.shields.io/github/release-date/xwtec/eslint-config.svg?style=flat-square)](https://github.com/xwtec/eslint-config/releases)

[![npm](https://img.shields.io/npm/v/@xwtec/eslint-config.svg?style=flat-square)](https://www.npmjs.com/package/@xwtec/eslint-config)
[![npm](https://img.shields.io/npm/dt/@xwtec/eslint-config.svg?style=flat-square)](https://www.npmjs.com/package/@xwtec/eslint-config)
[![Snyk Vulnerabilities for npm package version](https://img.shields.io/snyk/vulnerabilities/npm/@xwtec/eslint-config.svg?style=flat-square)](https://snyk.io/vuln/npm:@xwtec%2Feslint-config)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![MIT license](https://img.shields.io/github/license/xwtec/eslint-config.svg?style=flat-square)](http://opensource.org/licenses/MIT)

> ESLint Configuration for xwtec projects

## Install

```bash
# with yarn
yarn add --dev eslint prettier @xwtec/eslint-config @xwtec/prettier-config

# with npm
npm install --save-dev eslint prettier @xwtec/eslint-config @xwtec/prettier-config
```

## Configuration

Add following code

```js
module.exports = {
  extends: ['@xwtec'],
};
```

to `.eslintrc.js` in your project.

_You may also want config `prettier` with [`@xwtec/prettier-config`](https://github.com/xwtec/prettier-config#configuration)._

## Usage

```bash
npx eslint "**/*.js"
```

## Rules

<!-- rules start -->

<!-- AUTO GENERATED CONTENT, DON'T EDIT -->

### Error

|  #  | Type  | Rule                                                                             | Description                                                                         |
| :-: | :---: | :------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
|  1  | error | [no-caller](https://eslint.org/docs/rules/no-caller)                             | disallow the use of `arguments.caller` or `arguments.callee`                        |
|  2  | error | [no-class-assign](https://eslint.org/docs/rules/no-class-assign)                 | disallow reassigning class members                                                  |
|  3  | error | [no-const-assign](https://eslint.org/docs/rules/no-const-assign)                 | disallow reassigning `const` variables                                              |
|  4  | error | [no-delete-var](https://eslint.org/docs/rules/no-delete-var)                     | disallow deleting variables                                                         |
|  5  | error | [no-dupe-args](https://eslint.org/docs/rules/no-dupe-args)                       | disallow duplicate arguments in `function` definitions                              |
|  6  | error | [no-dupe-class-members](https://eslint.org/docs/rules/no-dupe-class-members)     | disallow duplicate class members                                                    |
|  7  | error | [no-dupe-else-if](https://eslint.org/docs/rules/no-dupe-else-if)                 | disallow duplicate conditions in if-else-if chains                                  |
|  8  | error | [no-dupe-keys](https://eslint.org/docs/rules/no-dupe-keys)                       | disallow duplicate keys in object literals                                          |
|  9  | error | [no-empty-pattern](https://eslint.org/docs/rules/no-empty-pattern)               | disallow empty destructuring patterns                                               |
| 10  | error | [no-eval](https://eslint.org/docs/rules/no-eval)                                 | disallow the use of `eval()`                                                        |
| 11  | error | [no-func-assign](https://eslint.org/docs/rules/no-func-assign)                   | disallow reassigning `function` declarations                                        |
| 12  | error | [no-implied-eval](https://eslint.org/docs/rules/no-implied-eval)                 | disallow the use of `eval()`-like methods                                           |
| 13  | error | [no-import-assign](https://eslint.org/docs/rules/no-import-assign)               | disallow assigning to imported bindings                                             |
| 14  | error | [no-irregular-whitespace](https://eslint.org/docs/rules/no-irregular-whitespace) | disallow irregular whitespace                                                       |
| 15  | error | [no-new-symbol](https://eslint.org/docs/rules/no-new-symbol)                     | disallow `new` operators with the `Symbol` object                                   |
| 16  | error | [no-obj-calls](https://eslint.org/docs/rules/no-obj-calls)                       | disallow calling global object properties as functions                              |
| 17  | error | [no-redeclare](https://eslint.org/docs/rules/no-redeclare)                       | disallow variable redeclaration                                                     |
| 18  | error | [no-self-compare](https://eslint.org/docs/rules/no-self-compare)                 | disallow comparisons where both sides are exactly the same                          |
| 19  | error | [no-sequences](https://eslint.org/docs/rules/no-sequences)                       | disallow comma operators                                                            |
| 20  | error | [no-setter-return](https://eslint.org/docs/rules/no-setter-return)               | disallow returning values from setters                                              |
| 21  | error | [no-undef](https://eslint.org/docs/rules/no-undef)                               | disallow the use of undeclared variables unless mentioned in `/*global */` comments |
| 22  | error | [radix](https://eslint.org/docs/rules/radix)                                     | enforce the consistent use of the radix argument when using `parseInt()`            |
| 23  | error | [require-yield](https://eslint.org/docs/rules/require-yield)                     | require generator functions to contain `yield`                                      |
| 24  | error | [use-isnan](https://eslint.org/docs/rules/use-isnan)                             | require calls to `isNaN()` when checking for `NaN`                                  |

### Warn

|  #  | Type | Rule                                                                                       | Description                                                                              |
| :-: | :--: | :----------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------- |
|  1  | warn | [constructor-super](https://eslint.org/docs/rules/constructor-super)                       | require `super()` calls in constructors                                                  |
|  2  | warn | [for-direction](https://eslint.org/docs/rules/for-direction)                               | enforce "for" loop update clause moving the counter in the right direction.              |
|  3  | warn | [getter-return](https://eslint.org/docs/rules/getter-return)                               | enforce `return` statements in getters                                                   |
|  4  | warn | [no-case-declarations](https://eslint.org/docs/rules/no-case-declarations)                 | disallow lexical declarations in case clauses                                            |
|  5  | warn | [no-compare-neg-zero](https://eslint.org/docs/rules/no-compare-neg-zero)                   | disallow comparing against -0                                                            |
|  6  | warn | [no-constant-condition](https://eslint.org/docs/rules/no-constant-condition)               | disallow constant expressions in conditions                                              |
|  7  | warn | [no-duplicate-case](https://eslint.org/docs/rules/no-duplicate-case)                       | disallow duplicate case labels                                                           |
|  8  | warn | [no-empty](https://eslint.org/docs/rules/no-empty)                                         | disallow empty block statements                                                          |
|  9  | warn | [no-empty-character-class](https://eslint.org/docs/rules/no-empty-character-class)         | disallow empty character classes in regular expressions                                  |
| 10  | warn | [no-ex-assign](https://eslint.org/docs/rules/no-ex-assign)                                 | disallow reassigning exceptions in `catch` clauses                                       |
| 11  | warn | [no-extend-native](https://eslint.org/docs/rules/no-extend-native)                         | disallow extending native types                                                          |
| 12  | warn | [no-fallthrough](https://eslint.org/docs/rules/no-fallthrough)                             | disallow fallthrough of `case` statements                                                |
| 13  | warn | [no-global-assign](https://eslint.org/docs/rules/no-global-assign)                         | disallow assignments to native objects or read-only global variables                     |
| 14  | warn | [no-inner-declarations](https://eslint.org/docs/rules/no-inner-declarations)               | disallow variable or `function` declarations in nested blocks                            |
| 15  | warn | [no-invalid-regexp](https://eslint.org/docs/rules/no-invalid-regexp)                       | disallow invalid regular expression strings in `RegExp` constructors                     |
| 16  | warn | [no-iterator](https://eslint.org/docs/rules/no-iterator)                                   | disallow the use of the `__iterator__` property                                          |
| 17  | warn | [no-labels](https://eslint.org/docs/rules/no-labels)                                       | disallow labeled statements                                                              |
| 18  | warn | [no-multi-str](https://eslint.org/docs/rules/no-multi-str)                                 | disallow multiline strings                                                               |
| 19  | warn | [no-new-wrappers](https://eslint.org/docs/rules/no-new-wrappers)                           | disallow `new` operators with the `String`, `Number`, and `Boolean` objects              |
| 20  | warn | [no-octal](https://eslint.org/docs/rules/no-octal)                                         | disallow octal literals                                                                  |
| 21  | warn | [no-octal-escape](https://eslint.org/docs/rules/no-octal-escape)                           | disallow octal escape sequences in string literals                                       |
| 22  | warn | [no-proto](https://eslint.org/docs/rules/no-proto)                                         | disallow the use of the `__proto__` property                                             |
| 23  | warn | [no-restricted-globals](https://eslint.org/docs/rules/no-restricted-globals)               | disallow specified global variables                                                      |
| 24  | warn | [no-restricted-properties](https://eslint.org/docs/rules/no-restricted-properties)         | disallow certain properties on certain objects                                           |
| 25  | warn | [no-self-assign](https://eslint.org/docs/rules/no-self-assign)                             | disallow assignments where both sides are exactly the same                               |
| 26  | warn | [no-sparse-arrays](https://eslint.org/docs/rules/no-sparse-arrays)                         | disallow sparse arrays                                                                   |
| 27  | warn | [no-this-before-super](https://eslint.org/docs/rules/no-this-before-super)                 | disallow `this`/`super` before calling `super()` in constructors                         |
| 28  | warn | [no-throw-literal](https://eslint.org/docs/rules/no-throw-literal)                         | disallow throwing literals as exceptions                                                 |
| 29  | warn | [no-unmodified-loop-condition](https://eslint.org/docs/rules/no-unmodified-loop-condition) | disallow unmodified loop conditions                                                      |
| 30  | warn | [no-unreachable](https://eslint.org/docs/rules/no-unreachable)                             | disallow unreachable code after `return`, `throw`, `continue`, and `break` statements    |
| 31  | warn | [no-unsafe-finally](https://eslint.org/docs/rules/no-unsafe-finally)                       | disallow control flow statements in `finally` blocks                                     |
| 32  | warn | [no-unsafe-negation](https://eslint.org/docs/rules/no-unsafe-negation)                     | disallow negating the left operand of relational operators                               |
| 33  | warn | [no-unsafe-optional-chaining](https://eslint.org/docs/rules/no-unsafe-optional-chaining)   | disallow use of optional chaining in contexts where the `undefined` value is not allowed |
| 34  | warn | [no-unused-vars](https://eslint.org/docs/rules/no-unused-vars)                             | disallow unused variables                                                                |
| 35  | warn | [no-useless-escape](https://eslint.org/docs/rules/no-useless-escape)                       | disallow unnecessary escape characters                                                   |
| 36  | warn | [no-void](https://eslint.org/docs/rules/no-void)                                           | disallow `void` operators                                                                |
| 37  | warn | [no-with](https://eslint.org/docs/rules/no-with)                                           | disallow `with` statements                                                               |
| 38  | warn | [valid-typeof](https://eslint.org/docs/rules/valid-typeof)                                 | enforce comparing `typeof` expressions against valid strings                             |

### Fixable

|  #  | Type  | Rule                                                                                               | Description                                                                                                            |
| :-: | :---: | :------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------- |
|  1  | warn  | [curly](https://eslint.org/docs/rules/curly)                                                       | enforce consistent brace style for all control statements                                                              |
|  2  | warn  | [dot-notation](https://eslint.org/docs/rules/dot-notation)                                         | enforce dot notation whenever possible                                                                                 |
|  3  | error | [eqeqeq](https://eslint.org/docs/rules/eqeqeq)                                                     | require the use of `===` and `!==`                                                                                     |
|  4  | warn  | [no-div-regex](https://eslint.org/docs/rules/no-div-regex)                                         | disallow division operators explicitly at the beginning of regular expressions                                         |
|  5  | warn  | [no-else-return](https://eslint.org/docs/rules/no-else-return)                                     | disallow `else` blocks after `return` statements in `if` statements                                                    |
|  6  | warn  | [no-extra-bind](https://eslint.org/docs/rules/no-extra-bind)                                       | disallow unnecessary calls to `.bind()`                                                                                |
|  7  | warn  | [no-extra-boolean-cast](https://eslint.org/docs/rules/no-extra-boolean-cast)                       | disallow unnecessary boolean casts                                                                                     |
|  8  | warn  | [no-extra-label](https://eslint.org/docs/rules/no-extra-label)                                     | disallow unnecessary labels                                                                                            |
|  9  | warn  | [no-regex-spaces](https://eslint.org/docs/rules/no-regex-spaces)                                   | disallow multiple spaces in regular expressions                                                                        |
| 10  | warn  | [no-undef-init](https://eslint.org/docs/rules/no-undef-init)                                       | disallow initializing variables to `undefined`                                                                         |
| 11  | warn  | [no-unneeded-ternary](https://eslint.org/docs/rules/no-unneeded-ternary)                           | disallow ternary operators when simpler alternatives exist                                                             |
| 12  | warn  | [no-unused-labels](https://eslint.org/docs/rules/no-unused-labels)                                 | disallow unused labels                                                                                                 |
| 13  | warn  | [no-useless-computed-key](https://eslint.org/docs/rules/no-useless-computed-key)                   | disallow unnecessary computed property keys in objects and classes                                                     |
| 14  | warn  | [no-useless-rename](https://eslint.org/docs/rules/no-useless-rename)                               | disallow renaming import, export, and destructured assignments to the same name                                        |
| 15  | warn  | [no-useless-return](https://eslint.org/docs/rules/no-useless-return)                               | disallow redundant return statements                                                                                   |
| 16  | warn  | [no-var](https://eslint.org/docs/rules/no-var)                                                     | require `let` or `const` instead of `var`                                                                              |
| 17  | warn  | [object-shorthand](https://eslint.org/docs/rules/object-shorthand)                                 | require or disallow method and property shorthand syntax for object literals                                           |
| 18  | warn  | [one-var](https://eslint.org/docs/rules/one-var)                                                   | enforce variables to be declared either together or separately in functions                                            |
| 19  | warn  | [operator-assignment](https://eslint.org/docs/rules/operator-assignment)                           | require or disallow assignment operator shorthand where possible                                                       |
| 20  | warn  | [prefer-const](https://eslint.org/docs/rules/prefer-const)                                         | require `const` declarations for variables that are never reassigned after declared                                    |
| 21  | warn  | [prefer-destructuring](https://eslint.org/docs/rules/prefer-destructuring)                         | require destructuring from arrays and/or objects                                                                       |
| 22  | warn  | [prefer-exponentiation-operator](https://eslint.org/docs/rules/prefer-exponentiation-operator)     | disallow the use of `Math.pow` in favor of the `**` operator                                                           |
| 23  | warn  | [prefer-numeric-literals](https://eslint.org/docs/rules/prefer-numeric-literals)                   | disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals                      |
| 24  | warn  | [prefer-object-spread](https://eslint.org/docs/rules/prefer-object-spread)                         | disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead. |
| 25  | warn  | [prefer-template](https://eslint.org/docs/rules/prefer-template)                                   | require template literals instead of string concatenation                                                              |
| 26  | warn  | [spaced-comment](https://eslint.org/docs/rules/spaced-comment)                                     | enforce consistent spacing after the `//` or `/*` in a comment                                                         |
| 27  | warn  | [yoda](https://eslint.org/docs/rules/yoda)                                                         | require or disallow "Yoda" conditions                                                                                  |
| 28  | warn  | [import/order](https://github.com/benmosher/eslint-plugin-import/blob/v2.23.4/docs/rules/order.md) |
| 29  | warn  | [prettier/prettier](https://github.com/prettier/eslint-plugin-prettier#options)                    |

<!-- rules end -->

## Related

- [@xwtec/eslint-config-vue](https://github.com/xwtec/eslint-config-vue)
- [@xwtec/eslint-config-legacy](https://github.com/xwtec/eslint-config-legacy)
- [@xwtec/prettier-config](https://github.com/xwtec/prettier-config)

## Links

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
