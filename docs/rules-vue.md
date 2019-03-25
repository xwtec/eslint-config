# rules

> vue rules

## error

| Type  | Rule                                                                                                                     | Description                                          |
| :---: | :----------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------- |
| error | [vue/comment-directive](https://eslint.vuejs.org/rules/comment-directive.html)                                           | support comment-directives in `<template>`           |
| error | [vue/jsx-uses-vars](https://eslint.vuejs.org/rules/jsx-uses-vars.html)                                                   | prevent variables used in JSX to be marked as unused |
| error | [vue/no-async-in-computed-properties](https://eslint.vuejs.org/rules/no-async-in-computed-properties.html)               | disallow asynchronous actions in computed properties |
| error | [vue/no-dupe-keys](https://eslint.vuejs.org/rules/no-dupe-keys.html)                                                     | disallow duplication of field names                  |
| error | [vue/no-duplicate-attributes](https://eslint.vuejs.org/rules/no-duplicate-attributes.html)                               | disallow duplication of attributes                   |
| error | [vue/no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)                                             | disallow parsing errors in `<template>`              |
| error | [vue/no-reserved-keys](https://eslint.vuejs.org/rules/no-reserved-keys.html)                                             | disallow overwriting reserved keys                   |
| error | [vue/no-shared-component-data](https://eslint.vuejs.org/rules/no-shared-component-data.html)                             | enforce component's data property to be a function   |
| error | [vue/no-side-effects-in-computed-properties](https://eslint.vuejs.org/rules/no-side-effects-in-computed-properties.html) | disallow side effects in computed properties         |
| error | [vue/no-template-key](https://eslint.vuejs.org/rules/no-template-key.html)                                               | disallow `key` attribute on `<template>`             |
| error | [vue/no-textarea-mustache](https://eslint.vuejs.org/rules/no-textarea-mustache.html)                                     | disallow mustaches in `<textarea>`                   |
| error | [vue/require-prop-type-constructor](https://eslint.vuejs.org/rules/require-prop-type-constructor.html)                   | require prop type to be a constructor                |
| error | [vue/valid-v-bind](https://eslint.vuejs.org/rules/valid-v-bind.html)                                                     | enforce valid `v-bind` directives                    |
| error | [vue/valid-v-cloak](https://eslint.vuejs.org/rules/valid-v-cloak.html)                                                   | enforce valid `v-cloak` directives                   |
| error | [vue/valid-v-else](https://eslint.vuejs.org/rules/valid-v-else.html)                                                     | enforce valid `v-else` directives                    |
| error | [vue/valid-v-else-if](https://eslint.vuejs.org/rules/valid-v-else-if.html)                                               | enforce valid `v-else-if` directives                 |
| error | [vue/valid-v-for](https://eslint.vuejs.org/rules/valid-v-for.html)                                                       | enforce valid `v-for` directives                     |
| error | [vue/valid-v-html](https://eslint.vuejs.org/rules/valid-v-html.html)                                                     | enforce valid `v-html` directives                    |
| error | [vue/valid-v-if](https://eslint.vuejs.org/rules/valid-v-if.html)                                                         | enforce valid `v-if` directives                      |
| error | [vue/valid-v-model](https://eslint.vuejs.org/rules/valid-v-model.html)                                                   | enforce valid `v-model` directives                   |
| error | [vue/valid-v-on](https://eslint.vuejs.org/rules/valid-v-on.html)                                                         | enforce valid `v-on` directives                      |
| error | [vue/valid-v-once](https://eslint.vuejs.org/rules/valid-v-once.html)                                                     | enforce valid `v-once` directives                    |
| error | [vue/valid-v-pre](https://eslint.vuejs.org/rules/valid-v-pre.html)                                                       | enforce valid `v-pre` directives                     |
| error | [vue/valid-v-show](https://eslint.vuejs.org/rules/valid-v-show.html)                                                     | enforce valid `v-show` directives                    |
| error | [vue/valid-v-text](https://eslint.vuejs.org/rules/valid-v-text.html)                                                     | enforce valid `v-text` directives                    |

## warn

| Type | Rule                                                                                               | Description                                                     |
| :--: | :------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------- |
| warn | [vue/require-component-is](https://eslint.vuejs.org/rules/require-component-is.html)               | require `v-bind:is` of `<component>` elements                   |
| warn | [vue/require-render-return](https://eslint.vuejs.org/rules/require-render-return.html)             | enforce render function to always return value                  |
| warn | [vue/require-valid-default-prop](https://eslint.vuejs.org/rules/require-valid-default-prop.html)   | enforce props default values to be valid                        |
| warn | [vue/return-in-computed-property](https://eslint.vuejs.org/rules/return-in-computed-property.html) | enforce that a return statement is present in computed property |
| warn | [vue/valid-template-root](https://eslint.vuejs.org/rules/valid-template-root.html)                 | enforce valid template root                                     |
