# Logux ESLint Config

<img align="right" width="95" height="148" title="Logux logotype"
     src="https://logux.io/branding/logotype.svg">

Shareable code style and best practice for [Logux] projects.

[Logux]: https://logux.io/

<a href="https://evilmartians.com/?utm_source=logux-docs">
  <img src="https://evilmartians.com/badges/sponsored-by-evil-martians.svg"
       alt="Sponsored by Evil Martians" width="236" height="54">
</a>

## Install

```sh
yarn add --dev @logux/eslint-config eslint-config-standard eslint-plugin-promise eslint-plugin-jest eslint-plugin-node eslint-plugin-es5 eslint-plugin-standard eslint-plugin-security eslint-plugin-import eslint-plugin-prefer-let eslint-plugin-unicorn eslint
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
