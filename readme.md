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

## Quick Start

```sh
npm install --global eslint prettier @xwtec/eslint-config eslint-plugin-prettier
echo {"extends":"@xwtec"}>.eslintrc
eslint **/*.js --fix
```

## Install

```sh
# with yarn
yarn add --dev eslint prettier @xwtec/eslint-config

# with npm
npm install --save-dev eslint prettier @xwtec/eslint-config
```

## Configuration

`.eslintrc.js` formart is recommanded

```js
module.exports = {
  extends: ['@xwtec'],
};
```

## Rules

<!-- rules start -->

<!-- AUTO GENERATED CONTENT, DON'T EDIT -->

### Error

|  #  | Type  | Rule                                                                             | Description                                                                         |
| :-: | :---: | :------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
|  1  | error | [eqeqeq](https://eslint.org/docs/rules/eqeqeq)                                   | require the use of `===` and `!==`                                                  |
|  2  | error | [no-caller](https://eslint.org/docs/rules/no-caller)                             | disallow the use of `arguments.caller` or `arguments.callee`                        |
|  3  | error | [no-class-assign](https://eslint.org/docs/rules/no-class-assign)                 | disallow reassigning class members                                                  |
|  4  | error | [no-const-assign](https://eslint.org/docs/rules/no-const-assign)                 | disallow reassigning `const` variables                                              |
|  5  | error | [no-delete-var](https://eslint.org/docs/rules/no-delete-var)                     | disallow deleting variables                                                         |
|  6  | error | [no-dupe-args](https://eslint.org/docs/rules/no-dupe-args)                       | disallow duplicate arguments in `function` definitions                              |
|  7  | error | [no-dupe-class-members](https://eslint.org/docs/rules/no-dupe-class-members)     | disallow duplicate class members                                                    |
|  8  | error | [no-dupe-keys](https://eslint.org/docs/rules/no-dupe-keys)                       | disallow duplicate keys in object literals                                          |
|  9  | error | [no-empty-pattern](https://eslint.org/docs/rules/no-empty-pattern)               | disallow empty destructuring patterns                                               |
| 10  | error | [no-eval](https://eslint.org/docs/rules/no-eval)                                 | disallow the use of `eval()`                                                        |
| 11  | error | [no-func-assign](https://eslint.org/docs/rules/no-func-assign)                   | disallow reassigning `function` declarations                                        |
| 12  | error | [no-implied-eval](https://eslint.org/docs/rules/no-implied-eval)                 | disallow the use of `eval()`-like methods                                           |
| 13  | error | [no-irregular-whitespace](https://eslint.org/docs/rules/no-irregular-whitespace) | disallow irregular whitespace                                                       |
| 14  | error | [no-new-symbol](https://eslint.org/docs/rules/no-new-symbol)                     | disallow `new` operators with the `Symbol` object                                   |
| 15  | error | [no-obj-calls](https://eslint.org/docs/rules/no-obj-calls)                       | disallow calling global object properties as functions                              |
| 16  | error | [no-redeclare](https://eslint.org/docs/rules/no-redeclare)                       | disallow variable redeclaration                                                     |
| 17  | error | [no-self-compare](https://eslint.org/docs/rules/no-self-compare)                 | disallow comparisons where both sides are exactly the same                          |
| 18  | error | [no-sequences](https://eslint.org/docs/rules/no-sequences)                       | disallow comma operators                                                            |
| 19  | error | [no-undef](https://eslint.org/docs/rules/no-undef)                               | disallow the use of undeclared variables unless mentioned in `/*global */` comments |
| 20  | error | [no-unsafe-negation](https://eslint.org/docs/rules/no-unsafe-negation)           | disallow negating the left operand of relational operators                          |
| 21  | error | [require-yield](https://eslint.org/docs/rules/require-yield)                     | require generator functions to contain `yield`                                      |
| 22  | error | [use-isnan](https://eslint.org/docs/rules/use-isnan)                             | require calls to `isNaN()` when checking for `NaN`                                  |

### Warn

|  #  | Type | Rule                                                                                       | Description                                                                           |
| :-: | :--: | :----------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------ |
|  1  | warn | [constructor-super](https://eslint.org/docs/rules/constructor-super)                       | require `super()` calls in constructors                                               |
|  2  | warn | [for-direction](https://eslint.org/docs/rules/for-direction)                               | enforce "for" loop update clause moving the counter in the right direction.           |
|  3  | warn | [getter-return](https://eslint.org/docs/rules/getter-return)                               | enforce `return` statements in getters                                                |
|  4  | warn | [no-case-declarations](https://eslint.org/docs/rules/no-case-declarations)                 | disallow lexical declarations in case clauses                                         |
|  5  | warn | [no-compare-neg-zero](https://eslint.org/docs/rules/no-compare-neg-zero)                   | disallow comparing against -0                                                         |
|  6  | warn | [no-constant-condition](https://eslint.org/docs/rules/no-constant-condition)               | disallow constant expressions in conditions                                           |
|  7  | warn | [no-duplicate-case](https://eslint.org/docs/rules/no-duplicate-case)                       | disallow duplicate case labels                                                        |
|  8  | warn | [no-empty](https://eslint.org/docs/rules/no-empty)                                         | disallow empty block statements                                                       |
|  9  | warn | [no-empty-character-class](https://eslint.org/docs/rules/no-empty-character-class)         | disallow empty character classes in regular expressions                               |
| 10  | warn | [no-ex-assign](https://eslint.org/docs/rules/no-ex-assign)                                 | disallow reassigning exceptions in `catch` clauses                                    |
| 11  | warn | [no-extend-native](https://eslint.org/docs/rules/no-extend-native)                         | disallow extending native types                                                       |
| 12  | warn | [no-extra-bind](https://eslint.org/docs/rules/no-extra-bind)                               | disallow unnecessary calls to `.bind()`                                               |
| 13  | warn | [no-extra-boolean-cast](https://eslint.org/docs/rules/no-extra-boolean-cast)               | disallow unnecessary boolean casts                                                    |
| 14  | warn | [no-extra-label](https://eslint.org/docs/rules/no-extra-label)                             | disallow unnecessary labels                                                           |
| 15  | warn | [no-fallthrough](https://eslint.org/docs/rules/no-fallthrough)                             | disallow fallthrough of `case` statements                                             |
| 16  | warn | [no-global-assign](https://eslint.org/docs/rules/no-global-assign)                         | disallow assignments to native objects or read-only global variables                  |
| 17  | warn | [no-inner-declarations](https://eslint.org/docs/rules/no-inner-declarations)               | disallow variable or `function` declarations in nested blocks                         |
| 18  | warn | [no-invalid-regexp](https://eslint.org/docs/rules/no-invalid-regexp)                       | disallow invalid regular expression strings in `RegExp` constructors                  |
| 19  | warn | [no-iterator](https://eslint.org/docs/rules/no-iterator)                                   | disallow the use of the `__iterator__` property                                       |
| 20  | warn | [no-labels](https://eslint.org/docs/rules/no-labels)                                       | disallow labeled statements                                                           |
| 21  | warn | [no-multi-str](https://eslint.org/docs/rules/no-multi-str)                                 | disallow multiline strings                                                            |
| 22  | warn | [no-new-wrappers](https://eslint.org/docs/rules/no-new-wrappers)                           | disallow `new` operators with the `String`, `Number`, and `Boolean` objects           |
| 23  | warn | [no-octal](https://eslint.org/docs/rules/no-octal)                                         | disallow octal literals                                                               |
| 24  | warn | [no-octal-escape](https://eslint.org/docs/rules/no-octal-escape)                           | disallow octal escape sequences in string literals                                    |
| 25  | warn | [no-proto](https://eslint.org/docs/rules/no-proto)                                         | disallow the use of the `__proto__` property                                          |
| 26  | warn | [no-regex-spaces](https://eslint.org/docs/rules/no-regex-spaces)                           | disallow multiple spaces in regular expressions                                       |
| 27  | warn | [no-restricted-properties](https://eslint.org/docs/rules/no-restricted-properties)         | disallow certain properties on certain objects                                        |
| 28  | warn | [no-self-assign](https://eslint.org/docs/rules/no-self-assign)                             | disallow assignments where both sides are exactly the same                            |
| 29  | warn | [no-sparse-arrays](https://eslint.org/docs/rules/no-sparse-arrays)                         | disallow sparse arrays                                                                |
| 30  | warn | [no-this-before-super](https://eslint.org/docs/rules/no-this-before-super)                 | disallow `this`/`super` before calling `super()` in constructors                      |
| 31  | warn | [no-throw-literal](https://eslint.org/docs/rules/no-throw-literal)                         | disallow throwing literals as exceptions                                              |
| 32  | warn | [no-unexpected-multiline](https://eslint.org/docs/rules/no-unexpected-multiline)           | disallow confusing multiline expressions                                              |
| 33  | warn | [no-unmodified-loop-condition](https://eslint.org/docs/rules/no-unmodified-loop-condition) | disallow unmodified loop conditions                                                   |
| 34  | warn | [no-unreachable](https://eslint.org/docs/rules/no-unreachable)                             | disallow unreachable code after `return`, `throw`, `continue`, and `break` statements |
| 35  | warn | [no-unsafe-finally](https://eslint.org/docs/rules/no-unsafe-finally)                       | disallow control flow statements in `finally` blocks                                  |
| 36  | warn | [no-unused-labels](https://eslint.org/docs/rules/no-unused-labels)                         | disallow unused labels                                                                |
| 37  | warn | [no-useless-escape](https://eslint.org/docs/rules/no-useless-escape)                       | disallow unnecessary escape characters                                                |
| 38  | warn | [no-void](https://eslint.org/docs/rules/no-void)                                           | disallow `void` operators                                                             |
| 39  | warn | [no-with](https://eslint.org/docs/rules/no-with)                                           | disallow `with` statements                                                            |
| 40  | warn | [radix](https://eslint.org/docs/rules/radix)                                               | enforce the consistent use of the radix argument when using `parseInt()`              |
| 41  | warn | [valid-typeof](https://eslint.org/docs/rules/valid-typeof)                                 | enforce comparing `typeof` expressions against valid strings                          |
| 42  | warn | [prettier/prettier](https://github.com/prettier/eslint-plugin-prettier#options)            |

<!-- rules end -->

## Relative

- [@xwtec/eslint-config-legacy](https://github.com/xwtec/eslint-config-legacy)
- [@xwtec/eslint-config-vue](https://github.com/xwtec/eslint-config-vue)

## Links

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## License

MIT © [xwtec](https://github.com/xwtec)
