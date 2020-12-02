# Change Log
This project adheres to [Semantic Versioning](http://semver.org/).

## 42.3
* Removed `@typescript-eslint/strict-boolean-expressions` rule.

## 42.2.3
* Removed TypeScript parser for JavaScript files.

## 42.2.2
* Disabled `Disable unicorn/custom-error-definition` in `*.d.ts`.

## 42.2.1
* Removed `eslint-standard-plugin` from `peerDependencies`.

## 42.2
* Removed `no-loop-func` rule.

## 42.1
* Disabled `node/no-callback-literal` rule.

## 42.0
* Many new rules in Standard 16.

## 41.0.2
* Update `eslint-config-standard`.

## 41.0.1
* Fixed typo in TypeScript config.

## 41.0
* Added `no-loop-func` rule.
* Updated `eslint-plugin-unicorn`.

## 40.0.5
* Update `eslint-plugin-unicorn`.

## 40.0.4
* Update `eslint-plugin-jest`.

## 40.0.3
* Fix arrow function parentheses.

## 40.0.2
* Update `eslint-plugin-prettierx`.

## 40.0.1
* Update `eslint-plugin-unicorn`.

## 40.0
* Force file extensions for imports in TypeScript.
* Use `;` as member delimiter.

## 39.0.3
* Fix JSX support.
* Replace deprecated Jest rule.

## 39.0.2
* Update `eslint-plugin-prettierx`.

## 39.0.1
* Fix `index.js`.

## 39.0
* Add `unicorn/prefer-optional-catch-binding` rule.

## 38.1
* Allow to use `any` in tests.

## 38.0
* Add `prettierx` for auto-formatting.

## 37.2
* Do not use extends `@typescript-eslint` recommended configs.

## 37.1.1
* Fix `@typescript-eslint` ESLint overrides.

## 37.1
* Remove `@typescript-eslint/no-invalid-void-type` rule.
* Fix `singleline` option for `@typescript-eslint/member-delimiter-style`.

## 37.0.1
* Fix TypeScript parser options.

## 37.0
* Use ESLint 7.
* Add `jest/no-deprecated-functions`.
* Add `@logux/eslint-config/ts` config with TypeScript support.

## 36.1.3
* Update `eslint-plugin-unicorn`.
* Update `globals`.

## 36.1.2
* Update `eslint-plugin-unicorn`.

## 36.1.1
* Update `eslint-plugin-unicorn`.

## 36.1
* Remove `func-style` rule.

## 36.0
* Remove separated `browser` and `node` configs.

## 35.0.4
* Update `eslint-plugin-unicorn`.

## 35.0.3
* Update `eslint-plugin-node`.

## 35.0.2
* Update `eslint-plugin-unicorn`.

## 35.0.1
* Update `eslint-plugin-unicorn`.

## 35.0
* Add `no-dupe-else-if` rule.
* Add `prefer-exponentiation-operator` rule.
* Add `no-setter-return` rule.
* Fix `import` and Web Workers support.

## 34.0.1
* Update `eslint-plugin-unicorn`.

## 34.0
* Add `jest/no-commented-out-tests` rule.
* Add `jest/no-jasmine-globals` rule.
* Add `jest/no-duplicate-hooks` rule.
* Add `jest/prefer-called-with` rule.
* Add `jest/no-test-prefixes` rule.
* Add `jest/no-test-callback` rule.
* Add `jest/no-truthy-falsy` rule.
* Add `jest/lowercase-name` rule.
* Add `jest/valid-describe` rule.
* Add `jest/prefer-todo` rule.
* Add `jest/require-to-throw-message` rule.
* Use `plugin:jest/recommended` and `plugin:jest/style`.
* Use `eslint-plugin-jest` 23.

## 33.0
* Add `jest/prefer-hooks-on-top` rule.

## 32.2
* Move ES6 rules from `unicorn` to `@logux/eslint-config/node`.

## 32.1
* Disable buggy `unicorn/consistent-function-scoping` rule.
* Disable `unicorn/import-index` rules because of conflict with `import/order`.

## 32.0
* Add many rules from `eslint-plugin-unicorn`.

## 31.0.2
* Fix `peerDependencies`.

## 31.0.1
* Update `eslint-plugin-node`.

## 31.0
* Use Standard 14.
* Remove `jest/valid-expect-in-promise` rule.

## 30.0.2
* Fix `peerDependencies`.

## 30.0.1
* Fix config syntax.

## 30.0
* Use ES2015+ in tests.
* Add `jest/no-standalone-expect` rule for tests.
* Add `jest/no-try-expect` rule for tests.

## 29.1.1
* Fix `require-atomic-updates` disabling.

## 29.1
* Disable `require-atomic-updates` rule.

## 29.0.1
* Fix `quote-props` consistency.

## 29.0
* Use ESLint Standard config 13.
* Use `import/order` instead of `import-helpers/order-imports`.
* Drop Node.js 6 support.

## 28.2.3
* Fix warning on ESLint 6.

## 28.2.2
* Update `eslint-plugin-import-helpers`.

## 28.2.1
* Update `eslint-plugin-node`.

## 28.2
* Remove `valid-jsdoc` rule.

## 28.1
* Disable `global-require` in tests.

## 28.0
* Add `import-helpers/order-imports` rule.
* Add `jest/no-empty-title` rule for tests.

## 27.0
* Use ESLint Plugin Jest 22.x.
* Add `jest/prefer-spy-on` rule.

## 26.0.1
* Use ESLint Plugin Node 8.x.

## 26.0
* Add `jest/prefer-to-contain` rule.
* Remove `jest/expect-expect` rule.

## 25.0.2
* Allow import `worker_threads` in tests.
* Use test rules for any files in `test/`.

## 25.0.1
* Use ESLint Standard config 11.

## 25.0
* Add `jest/expect-expect` rule.
* Use `eslint-plugin-promise` 4.x.

## 24.0
* Add `no-misleading-character-class` rule.
* Add `require-atomic-updates` rule to `eslint-config-logux/node`.
* Add `prefer-let` rule to `eslint-config-logux/node`.

## 23.1.0
* Do not prefer `const` anymore.

## 23.0.4
* Fix peer dependencies.

## 23.0.3
* Update `eslint-plugin-node`.

## 23.0.2
* Reduce package size.

## 23.0.1
* Use ESLint 5.

## 23.0
* Remove `strict` rule.
* Remove Node.js 4 support.

## 22.1
* Remove `optimize-regex` ESLint plugin.

## 22.0
* Rename `node4.js` to `node.js`.
* Add `optimize-regex` ESLint plugin.
* Add `prefer-rest-params` to `eslint-config-logux/node`.

## 21.0
* Use ESLint Standard config 11.

## 20.0
* Add `jest/consistent-test-it` rule with `it` function.

## 19.0
* Update `eslint-plugin-node` 6.0.

## 18.0
* Add `jest/valid-expect-in-promise` rule.
* Add `jest/prefer-to-be-undefined` rule.
* Add `jest/prefer-to-be-null` rule.

## 17.0
* Add `jest/prefer-to-have-length` rule.

## 16.2
* Remove `prefer-template` rule.
* Remove `generator-star-spacing` rule.

## 16.1.1
* Update Jest plugin in `peerDependencies`.

## 16.1
* Disable `node/no-unpublished-require` rule for test files.

## 16.0
* Use ESLint 4.2.
* Add `getter-return` rule.

## 15.0.1
* Fix Jest files pattern for tests in project root.

## 15.0
* Add `node/no-unpublished-require` rule.
* Add `node/no-extraneous-require` rule.
* Add `node/no-missing-require` rule.

## 14.0
* Use ESLint 4.1.
* Use Jest rules only in test files.
* Remove `test` from global names.

## 13.2
* Remove `security/detect-child-process` rule.

## 13.1
* Remove `arrow-body-style` rule from Node 4 config.

## 13.0
* Use ESLint 4.0.
* Add `for-direction` rule.

## 12.0
* Add `jest/valid-expect` rule.

## 11.0.2
* Update Standard dependencies.

## 11.0.1
* Fix `eslint-plugin-standard` peer dependency.

## 11.0
* Use ESLint Standard config 10.

## 10.0
* Add `eslint-plugin-security` plugin.

## 9.0
* Add `nonblock-statement-body-position` rule.

## 8.0
* Use ESLint Standard config 7.0.

## 7.0
* Use `use strict` and `const` in Node.js 4 config.

## 6.0
* Add `eslint-plugin-jest` plugin.

## 5.0.1
* Remove optional peer dependency to avoid warning.

## 5.0
* Rename `eslint-config-logux` to `eslint-config-logux/browser`.
* Add `node4` config for node-only projects (by Roman Fursov).

## 4.0
* Deny ES2015+ features (by Nikita Gusakov).

## 3.0
* Add `no-useless-return` rule.

## 2.0
* Add arguments to `no-unused-vars` rule.
* Remove `no-undefined` rule.

## 1.0
* Initial release.
