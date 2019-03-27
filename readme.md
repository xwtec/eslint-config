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

```sh
# with yarn
yarn add --dev eslint prettier @xwtec/eslint-config

# with npm
npm install --save-dev eslint prettier @xwtec/eslint-config
```

## .eslintrc.js

### default

```js
module.exports = {
  root: true,
  extends: ['@xwtec'],
}
```

- [rules](https://github.com/xwtec/eslint-config/blob/master/docs/rules-default.md)

### es5

```js
module.exports = {
  root: true,
  extends: ['@xwtec/eslint-config/legacy'],
}
```

- [rules](https://github.com/xwtec/eslint-config/blob/master/docs/rules-legacy.md)
- [difference from default](https://github.com/xwtec/eslint-config/blob/master/docs/compare-xwtec-legacy.md)

### vue

```js
module.exports = {
  root: true,
  extends: ['@xwtec/eslint-config/vue'],
}
```

- [default rules included](https://github.com/xwtec/eslint-config/blob/master/docs/rules-default.md)
- [extra vue rules](https://github.com/xwtec/eslint-config/blob/master/docs/rules-vue.md)

## Usage

global install

```sh
npm install --global eslint prettier @xwtec/eslint-config eslint-config-prettier eslint-plugin-prettier
echo {"extends":"@xwtec"}>.eslintrc
eslint **/*.js
```

in project

```sh
yarn add --dev eslint prettier @xwtec/eslint-config
echo {"extends":"@xwtec"}>.eslintrc
npx eslint **/*.js
```

## Foreign Config

> this config is based on `prettier` and `vue`, with very small set of possible errors

- [compare `xwtec` with `prettier`](https://github.com/xwtec/eslint-config/tree/master/docs/compare-xwtec-prettier.md)
- [compare `xwtec/vue` with `vue`](https://github.com/xwtec/eslint-config/tree/master/docs/compare-vue-vue.md)
- [compare `xwtec/vue` with `vue/strongly-recommended` + `prettier` + `prettier/vue`](https://github.com/xwtec/eslint-config/tree/master/docs/compare-vue-vue-prettier.md)

## Links

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)

## Changelog

[changelog.md](https://github.com/xwtec/eslint-config/blob/master/changelog.md)

## License

MIT © [xwtec](https://github.com/xwtec)
