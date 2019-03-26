# rules

> legacy rules

## error

|  #  | Type  | Rule                                                                             | Description                                                                         |
| :-: | :---: | :------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
|  1  | error | [eqeqeq](https://eslint.org/docs/rules/eqeqeq)                                   | require the use of `===` and `!==`                                                  |
|  2  | error | [no-caller](https://eslint.org/docs/rules/no-caller)                             | disallow the use of `arguments.caller` or `arguments.callee`                        |
|  3  | error | [no-delete-var](https://eslint.org/docs/rules/no-delete-var)                     | disallow deleting variables                                                         |
|  4  | error | [no-dupe-args](https://eslint.org/docs/rules/no-dupe-args)                       | disallow duplicate arguments in `function` definitions                              |
|  5  | error | [no-dupe-keys](https://eslint.org/docs/rules/no-dupe-keys)                       | disallow duplicate keys in object literals                                          |
|  6  | error | [no-empty-pattern](https://eslint.org/docs/rules/no-empty-pattern)               | disallow empty destructuring patterns                                               |
|  7  | error | [no-eval](https://eslint.org/docs/rules/no-eval)                                 | disallow the use of `eval()`                                                        |
|  8  | error | [no-func-assign](https://eslint.org/docs/rules/no-func-assign)                   | disallow reassigning `function` declarations                                        |
|  9  | error | [no-implied-eval](https://eslint.org/docs/rules/no-implied-eval)                 | disallow the use of `eval()`-like methods                                           |
| 10  | error | [no-irregular-whitespace](https://eslint.org/docs/rules/no-irregular-whitespace) | disallow irregular whitespace                                                       |
| 11  | error | [no-obj-calls](https://eslint.org/docs/rules/no-obj-calls)                       | disallow calling global object properties as functions                              |
| 12  | error | [no-redeclare](https://eslint.org/docs/rules/no-redeclare)                       | disallow variable redeclaration                                                     |
| 13  | error | [no-self-compare](https://eslint.org/docs/rules/no-self-compare)                 | disallow comparisons where both sides are exactly the same                          |
| 14  | error | [no-sequences](https://eslint.org/docs/rules/no-sequences)                       | disallow comma operators                                                            |
| 15  | error | [no-undef](https://eslint.org/docs/rules/no-undef)                               | disallow the use of undeclared variables unless mentioned in `/*global */` comments |
| 16  | error | [no-unsafe-negation](https://eslint.org/docs/rules/no-unsafe-negation)           | disallow negating the left operand of relational operators                          |
| 17  | error | [use-isnan](https://eslint.org/docs/rules/use-isnan)                             | require calls to `isNaN()` when checking for `NaN`                                  |

## warn

|  #  | Type | Rule                                                                                       | Description                                                                           |
| :-: | :--: | :----------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------ |
|  1  | warn | [comma-style](https://eslint.org/docs/rules/comma-style)                                   | enforce consistent comma style                                                        |
|  2  | warn | [for-direction](https://eslint.org/docs/rules/for-direction)                               | enforce "for" loop update clause moving the counter in the right direction.           |
|  3  | warn | [getter-return](https://eslint.org/docs/rules/getter-return)                               | enforce `return` statements in getters                                                |
|  4  | warn | [no-case-declarations](https://eslint.org/docs/rules/no-case-declarations)                 | disallow lexical declarations in case clauses                                         |
|  5  | warn | [no-catch-shadow](https://eslint.org/docs/rules/no-catch-shadow)                           | disallow `catch` clause parameters from shadowing variables in the outer scope        |
|  6  | warn | [no-compare-neg-zero](https://eslint.org/docs/rules/no-compare-neg-zero)                   | disallow comparing against -0                                                         |
|  7  | warn | [no-constant-condition](https://eslint.org/docs/rules/no-constant-condition)               | disallow constant expressions in conditions                                           |
|  8  | warn | [no-duplicate-case](https://eslint.org/docs/rules/no-duplicate-case)                       | disallow duplicate case labels                                                        |
|  9  | warn | [no-empty](https://eslint.org/docs/rules/no-empty)                                         | disallow empty block statements                                                       |
| 10  | warn | [no-empty-character-class](https://eslint.org/docs/rules/no-empty-character-class)         | disallow empty character classes in regular expressions                               |
| 11  | warn | [no-ex-assign](https://eslint.org/docs/rules/no-ex-assign)                                 | disallow reassigning exceptions in `catch` clauses                                    |
| 12  | warn | [no-extend-native](https://eslint.org/docs/rules/no-extend-native)                         | disallow extending native types                                                       |
| 13  | warn | [no-extra-bind](https://eslint.org/docs/rules/no-extra-bind)                               | disallow unnecessary calls to `.bind()`                                               |
| 14  | warn | [no-extra-boolean-cast](https://eslint.org/docs/rules/no-extra-boolean-cast)               | disallow unnecessary boolean casts                                                    |
| 15  | warn | [no-extra-label](https://eslint.org/docs/rules/no-extra-label)                             | disallow unnecessary labels                                                           |
| 16  | warn | [no-fallthrough](https://eslint.org/docs/rules/no-fallthrough)                             | disallow fallthrough of `case` statements                                             |
| 17  | warn | [no-global-assign](https://eslint.org/docs/rules/no-global-assign)                         | disallow assignments to native objects or read-only global variables                  |
| 18  | warn | [no-inner-declarations](https://eslint.org/docs/rules/no-inner-declarations)               | disallow variable or `function` declarations in nested blocks                         |
| 19  | warn | [no-invalid-regexp](https://eslint.org/docs/rules/no-invalid-regexp)                       | disallow invalid regular expression strings in `RegExp` constructors                  |
| 20  | warn | [no-iterator](https://eslint.org/docs/rules/no-iterator)                                   | disallow the use of the `__iterator__` property                                       |
| 21  | warn | [no-labels](https://eslint.org/docs/rules/no-labels)                                       | disallow labeled statements                                                           |
| 22  | warn | [no-multi-str](https://eslint.org/docs/rules/no-multi-str)                                 | disallow multiline strings                                                            |
| 23  | warn | [no-new-wrappers](https://eslint.org/docs/rules/no-new-wrappers)                           | disallow `new` operators with the `String`, `Number`, and `Boolean` objects           |
| 24  | warn | [no-octal](https://eslint.org/docs/rules/no-octal)                                         | disallow octal literals                                                               |
| 25  | warn | [no-octal-escape](https://eslint.org/docs/rules/no-octal-escape)                           | disallow octal escape sequences in string literals                                    |
| 26  | warn | [no-proto](https://eslint.org/docs/rules/no-proto)                                         | disallow the use of the `__proto__` property                                          |
| 27  | warn | [no-regex-spaces](https://eslint.org/docs/rules/no-regex-spaces)                           | disallow multiple spaces in regular expressions                                       |
| 28  | warn | [no-restricted-properties](https://eslint.org/docs/rules/no-restricted-properties)         | disallow certain properties on certain objects                                        |
| 29  | warn | [no-self-assign](https://eslint.org/docs/rules/no-self-assign)                             | disallow assignments where both sides are exactly the same                            |
| 30  | warn | [no-sparse-arrays](https://eslint.org/docs/rules/no-sparse-arrays)                         | disallow sparse arrays                                                                |
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
| 41  | warn | [strict](https://eslint.org/docs/rules/strict)                                             | require or disallow strict mode directives                                            |
| 42  | warn | [valid-typeof](https://eslint.org/docs/rules/valid-typeof)                                 | enforce comparing `typeof` expressions against valid strings                          |
| 43  | warn | [prettier/prettier](https://github.com/prettier/eslint-plugin-prettier#options)            |
