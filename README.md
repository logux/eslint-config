# Logux ESLint Config

<img align="right" width="95" height="95" title="Logux logo"
     src="https://cdn.rawgit.com/logux/logux/master/logo.svg">

Shareable code style and best practice for [Logux] projects.

[Logux]: https://github.con/logux/logux

## Install

ES5:

```sh
npm install --save-dev logux-config-logux eslint-config-standard eslint-plugin-promise eslint-plugin-es5 eslint-plugin-standard eslint
```

ES2015+:

```sh
npm install --save-dev logux-config-logux eslint-config-standard eslint-plugin-promise eslint-plugin-node eslint-plugin-standard eslint
```

## Usage

ES5:

Add to `package.json` or other ESLint config:

```sh
  "eslintConfig": {
    "extends": "eslint-config-logux"
  }
```

ES2015+:

Add to `package.json` or other ESLint config:

```sh
  "eslintConfig": {
    "extends": "eslint-config-logux/node4"
  }
```
