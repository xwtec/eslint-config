# rules

> default rules

## error

| Type  | Rule                                                                             | Description                                                                         |
| :---: | :------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| error | [eqeqeq](https://eslint.org/docs/rules/eqeqeq)                                   | require the use of `===` and `!==`                                                  |
| error | [no-caller](https://eslint.org/docs/rules/no-caller)                             | disallow the use of `arguments.caller` or `arguments.callee`                        |
| error | [no-class-assign](https://eslint.org/docs/rules/no-class-assign)                 | disallow reassigning class members                                                  |
| error | [no-const-assign](https://eslint.org/docs/rules/no-const-assign)                 | disallow reassigning `const` variables                                              |
| error | [no-delete-var](https://eslint.org/docs/rules/no-delete-var)                     | disallow deleting variables                                                         |
| error | [no-dupe-args](https://eslint.org/docs/rules/no-dupe-args)                       | disallow duplicate arguments in `function` definitions                              |
| error | [no-dupe-class-members](https://eslint.org/docs/rules/no-dupe-class-members)     | disallow duplicate class members                                                    |
| error | [no-dupe-keys](https://eslint.org/docs/rules/no-dupe-keys)                       | disallow duplicate keys in object literals                                          |
| error | [no-empty-pattern](https://eslint.org/docs/rules/no-empty-pattern)               | disallow empty destructuring patterns                                               |
| error | [no-eval](https://eslint.org/docs/rules/no-eval)                                 | disallow the use of `eval()`                                                        |
| error | [no-func-assign](https://eslint.org/docs/rules/no-func-assign)                   | disallow reassigning `function` declarations                                        |
| error | [no-implied-eval](https://eslint.org/docs/rules/no-implied-eval)                 | disallow the use of `eval()`-like methods                                           |
| error | [no-irregular-whitespace](https://eslint.org/docs/rules/no-irregular-whitespace) | disallow irregular whitespace                                                       |
| error | [no-new-symbol](https://eslint.org/docs/rules/no-new-symbol)                     | disallow `new` operators with the `Symbol` object                                   |
| error | [no-obj-calls](https://eslint.org/docs/rules/no-obj-calls)                       | disallow calling global object properties as functions                              |
| error | [no-redeclare](https://eslint.org/docs/rules/no-redeclare)                       | disallow variable redeclaration                                                     |
| error | [no-self-compare](https://eslint.org/docs/rules/no-self-compare)                 | disallow comparisons where both sides are exactly the same                          |
| error | [no-sequences](https://eslint.org/docs/rules/no-sequences)                       | disallow comma operators                                                            |
| error | [no-undef](https://eslint.org/docs/rules/no-undef)                               | disallow the use of undeclared variables unless mentioned in `/*global */` comments |
| error | [no-unsafe-negation](https://eslint.org/docs/rules/no-unsafe-negation)           | disallow negating the left operand of relational operators                          |
| error | [require-yield](https://eslint.org/docs/rules/require-yield)                     | require generator functions to contain `yield`                                      |
| error | [use-isnan](https://eslint.org/docs/rules/use-isnan)                             | require calls to `isNaN()` when checking for `NaN`                                  |

## warn

| Type | Rule                                                                                       | Description                                                                           |
| :--: | :----------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| warn | [constructor-super](https://eslint.org/docs/rules/constructor-super)                       | require `super()` calls in constructors                                               |
| warn | [for-direction](https://eslint.org/docs/rules/for-direction)                               | enforce "for" loop update clause moving the counter in the right direction.           |
| warn | [getter-return](https://eslint.org/docs/rules/getter-return)                               | enforce `return` statements in getters                                                |
| warn | [no-case-declarations](https://eslint.org/docs/rules/no-case-declarations)                 | disallow lexical declarations in case clauses                                         |
| warn | [no-compare-neg-zero](https://eslint.org/docs/rules/no-compare-neg-zero)                   | disallow comparing against -0                                                         |
| warn | [no-constant-condition](https://eslint.org/docs/rules/no-constant-condition)               | disallow constant expressions in conditions                                           |
| warn | [no-duplicate-case](https://eslint.org/docs/rules/no-duplicate-case)                       | disallow duplicate case labels                                                        |
| warn | [no-empty](https://eslint.org/docs/rules/no-empty)                                         | disallow empty block statements                                                       |
| warn | [no-empty-character-class](https://eslint.org/docs/rules/no-empty-character-class)         | disallow empty character classes in regular expressions                               |
| warn | [no-ex-assign](https://eslint.org/docs/rules/no-ex-assign)                                 | disallow reassigning exceptions in `catch` clauses                                    |
| warn | [no-extend-native](https://eslint.org/docs/rules/no-extend-native)                         | disallow extending native types                                                       |
| warn | [no-extra-boolean-cast](https://eslint.org/docs/rules/no-extra-boolean-cast)               | disallow unnecessary boolean casts                                                    |
| warn | [no-extra-label](https://eslint.org/docs/rules/no-extra-label)                             | disallow unnecessary labels                                                           |
| warn | [no-fallthrough](https://eslint.org/docs/rules/no-fallthrough)                             | disallow fallthrough of `case` statements                                             |
| warn | [no-global-assign](https://eslint.org/docs/rules/no-global-assign)                         | disallow assignments to native objects or read-only global variables                  |
| warn | [no-inner-declarations](https://eslint.org/docs/rules/no-inner-declarations)               | disallow variable or `function` declarations in nested blocks                         |
| warn | [no-invalid-regexp](https://eslint.org/docs/rules/no-invalid-regexp)                       | disallow invalid regular expression strings in `RegExp` constructors                  |
| warn | [no-iterator](https://eslint.org/docs/rules/no-iterator)                                   | disallow the use of the `__iterator__` property                                       |
| warn | [no-labels](https://eslint.org/docs/rules/no-labels)                                       | disallow labeled statements                                                           |
| warn | [no-multi-str](https://eslint.org/docs/rules/no-multi-str)                                 | disallow multiline strings                                                            |
| warn | [no-new-wrappers](https://eslint.org/docs/rules/no-new-wrappers)                           | disallow `new` operators with the `String`, `Number`, and `Boolean` objects           |
| warn | [no-octal](https://eslint.org/docs/rules/no-octal)                                         | disallow octal literals                                                               |
| warn | [no-octal-escape](https://eslint.org/docs/rules/no-octal-escape)                           | disallow octal escape sequences in string literals                                    |
| warn | [no-proto](https://eslint.org/docs/rules/no-proto)                                         | disallow the use of the `__proto__` property                                          |
| warn | [no-regex-spaces](https://eslint.org/docs/rules/no-regex-spaces)                           | disallow multiple spaces in regular expressions                                       |
| warn | [no-restricted-properties](https://eslint.org/docs/rules/no-restricted-properties)         | disallow certain properties on certain objects                                        |
| warn | [no-self-assign](https://eslint.org/docs/rules/no-self-assign)                             | disallow assignments where both sides are exactly the same                            |
| warn | [no-sparse-arrays](https://eslint.org/docs/rules/no-sparse-arrays)                         | disallow sparse arrays                                                                |
| warn | [no-this-before-super](https://eslint.org/docs/rules/no-this-before-super)                 | disallow `this`/`super` before calling `super()` in constructors                      |
| warn | [no-throw-literal](https://eslint.org/docs/rules/no-throw-literal)                         | disallow throwing literals as exceptions                                              |
| warn | [no-unexpected-multiline](https://eslint.org/docs/rules/no-unexpected-multiline)           | disallow confusing multiline expressions                                              |
| warn | [no-unmodified-loop-condition](https://eslint.org/docs/rules/no-unmodified-loop-condition) | disallow unmodified loop conditions                                                   |
| warn | [no-unreachable](https://eslint.org/docs/rules/no-unreachable)                             | disallow unreachable code after `return`, `throw`, `continue`, and `break` statements |
| warn | [no-unsafe-finally](https://eslint.org/docs/rules/no-unsafe-finally)                       | disallow control flow statements in `finally` blocks                                  |
| warn | [no-unused-labels](https://eslint.org/docs/rules/no-unused-labels)                         | disallow unused labels                                                                |
| warn | [no-useless-escape](https://eslint.org/docs/rules/no-useless-escape)                       | disallow unnecessary escape characters                                                |
| warn | [no-void](https://eslint.org/docs/rules/no-void)                                           | disallow `void` operators                                                             |
| warn | [no-with](https://eslint.org/docs/rules/no-with)                                           | disallow `with` statements                                                            |
| warn | [radix](https://eslint.org/docs/rules/radix)                                               | enforce the consistent use of the radix argument when using `parseInt()`              |
| warn | [valid-typeof](https://eslint.org/docs/rules/valid-typeof)                                 | enforce comparing `typeof` expressions against valid strings                          |
| warn | [prettier/prettier](https://github.com/prettier/eslint-plugin-prettier#options)            |
