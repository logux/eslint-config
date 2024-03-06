# Logux ESLint Config

<img align="right" width="95" height="148" title="Logux logotype"
     src="https://logux.org/branding/logotype.svg">

Shareable code style and best practice for [Logux] projects.

[Logux]: https://logux.org/

---

<img src="https://cdn.evilmartians.com/badges/logo-no-label.svg" alt="" width="22" height="16" />  Made in <b><a href="https://evilmartians.com/devtools?utm_source=logux-eslint-config&utm_campaign=devtools-button&utm_medium=github">Evil Martians</a></b>, product consulting for <b>developer tools</b>.

---

## Install

Pure JavaScript or TypeScript:

```sh
pnpm add --save-dev @logux/eslint-config eslint
```

Svelte project:

```sh
pnpm add --save-dev @logux/eslint-config eslint-plugin-svelte svelte eslint
```


## Usage

Create `eslint.config.js`.

For JavaScript:

```js
import loguxConfig from '@logux/eslint-config'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  ...loguxConfig,
]
```

For TypeScript project:

```js
import loguxTsConfig from '@logux/eslint-config/ts'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  ...loguxTsConfig,
]
```

For Svelte project:

```js
import loguxSvelteConfig from '@logux/eslint-config/svelte'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  ...loguxSvelteConfig,
]
```

This project utilizes ESLint with a flat configuration.
You may need to enable its support in your workspace:

* **VS Code:** enable `eslint.experimental.useFlatConfig`.
