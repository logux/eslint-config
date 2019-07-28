# Logux ESLint Config

<img align="right" width="95" height="95" alt="Logux logo"
     src="https://cdn.rawgit.com/logux/logux/master/logo.svg">

Shareable code style and best practice for [Logux] projects.

[Logux]: https://github.com/logux/logux

## Install

```sh
yarn add --dev @logux/eslint-config eslint-config-standard eslint-plugin-promise eslint-plugin-jest eslint-plugin-node eslint-plugin-es5 eslint-plugin-standard eslint-plugin-security eslint-plugin-import eslint-plugin-prefer-let eslint
```


## Usage

Add this config to `package.json` or other ESLint configs.

Browser and universal project:

```js
  "eslintConfig": {
    "extends": "@logux/eslint-config/browser"
  }
```

Server-only project:

```js
  "eslintConfig": {
    "extends": "@logux/eslint-config/node"
  }
```
