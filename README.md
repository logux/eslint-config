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

Pure JavaScript:

```sh
yarn add --dev @logux/eslint-config eslint-config-standard eslint-plugin-promise eslint-plugin-jest eslint-plugin-node eslint-plugin-security eslint-plugin-import eslint-plugin-prefer-let eslint-plugin-prettierx eslint-plugin-unicorn eslint
```

TypeScript:

```sh
yarn add --dev @logux/eslint-config @typescript-eslint/eslint-plugin @typescript-eslint/parser typescript eslint-config-standard eslint-plugin-promise eslint-plugin-jest eslint-plugin-node eslint-plugin-security eslint-plugin-import eslint-plugin-prefer-let eslint-plugin-prettierx eslint-plugin-unicorn eslint
```


## Usage

For JavaScript add config to `package.json` or other ESLint configs.

```js
  "eslintConfig": {
    "extends": "@logux/eslint-config"
  }
```

For TypeScript:

```js
  "eslintConfig": {
    "extends": "@logux/eslint-config/ts"
  }
```
