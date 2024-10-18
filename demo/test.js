import { exec } from 'node:child_process'
import { join, relative } from 'node:path'
import { styleText } from 'node:util'

const JS = `/logux-eslint-config/demo/index.js
  5:1  error  Unexpected console statement  no-console`

const TS = `/logux-eslint-config/demo/index.ts
  1:8  error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any`

const SVELTE = `/logux-eslint-config/demo/index.svelte
  2:13  error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any`

function cleanPath(path) {
  return relative(process.cwd(), path).replace(/\\/g, '/')
}

async function eslint(config, files) {
  let path = join(import.meta.dirname, files)
  let configPath = join(import.meta.dirname, '..', config)
  process.stderr.write(
    styleText(
      'gray',
      `eslint --config ${cleanPath(configPath)} ${cleanPath(path)}\n`
    )
  )
  return new Promise(resolve => {
    exec(
      `pnpm eslint --no-color --config ${configPath} ${path}`,
      (_, stdout, stderr) => {
        if (stderr) {
          process.stderr.write(styleText('red', stderr))
        }
        let fixed = stdout.replace(
          /.*\/(logux-eslint-config|eslint-config)\//g,
          '/logux-eslint-config/'
        )
        let trimmed = fixed.replace(/✖ \d+ problems?.*/, '').trim()
        resolve(trimmed)
      }
    )
  })
}

async function check(config, files, expected) {
  let actual = await eslint(config, files)
  if (actual !== expected) {
    process.stderr.write(styleText('green', `Expected:\n${expected}\n`))
    process.stderr.write(styleText('red', `Actual:\n${actual}\n`))
    process.exit(1)
  }
}

await check('svelte.js', 'index.*', JS + '\n\n' + SVELTE + '\n\n' + TS)
await check('ts.js', 'index.{ts,js}', JS + '\n\n' + TS)
await check('index.js', 'index.js', JS)
