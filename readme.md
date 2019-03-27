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

### default rules

```js
module.exports = {
  extends: ['@xwtec'],
}
```

- [rules](https://github.com/xwtec/eslint-config/blob/master/docs/rules-default.md)

### for es5 project

```js
module.exports = {
  extends: ['@xwtec/eslint-config/legacy'],
}
```

- [rules](https://github.com/xwtec/eslint-config/blob/master/docs/rules-legacy.md)
- [difference from default](https://github.com/xwtec/eslint-config/blob/master/docs/compare-xwtec-legacy.md)

### for vue project

```js
module.exports = {
  extends: ['@xwtec/eslint-config/vue'],
}
```

- [default rules included](https://github.com/xwtec/eslint-config/blob/master/docs/rules-default.md)
- [extra vue rules](https://github.com/xwtec/eslint-config/blob/master/docs/rules-vue.md)
- [compare `xwtec/vue` with `vue`](https://github.com/xwtec/eslint-config/tree/master/docs/compare-vue-vue.md)

## Links

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)

## License

MIT © [xwtec](https://github.com/xwtec)
