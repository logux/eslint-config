import { diffChars } from 'diff'
import { exec } from 'node:child_process'
import { join, relative } from 'node:path'
import { styleText } from 'node:util'

const JS = `/logux-eslint-config/demo/a.js
  5:1   error    Unexpected console statement     no-console
  7:1   error    Unexpected console statement     no-console
  7:21  warning  Expected "a" to come before "b"  perfectionist/sort-objects`

const TS = `/logux-eslint-config/demo/b.ts
  1:15  error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any`

const SVELTE = `/logux-eslint-config/demo/c.svelte
  5:13  error  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any`

async function check(config, files, expected) {
  let actual = await eslint(config, files)
  if (actual !== expected) {
    let diff = diffChars(expected, actual)
    for (let part of diff) {
      let color = 'grey'
      if (part.added) color = 'green'
      if (part.removed) color = 'red'
      process.stderr.write(styleText(color, part.value))
    }
    process.exit(1)
  }
}

function cleanPath(path) {
  return relative(process.cwd(), path).replace(/\\/g, '/')
}

async function eslint(config, files) {
  let paths = files
    .split(' ')
    .map(i => join(import.meta.dirname, i))
    .join(' ')
  let configPath = join(import.meta.dirname, '..', config)
  process.stderr.write(
    styleText(
      'gray',
      `eslint --config ${cleanPath(configPath)} ${cleanPath(paths)}\n`
    )
  )
  return new Promise(resolve => {
    exec(
      `pnpm eslint --no-color --config ${configPath} ${paths}`,
      (_, stdout, stderr) => {
        if (stderr) {
          process.stderr.write(styleText('red', stderr))
        }
        let fixed = stdout.replace(
          /.*\/(logux-eslint-config|eslint-config)\//g,
          '/logux-eslint-config/'
        )
        let trimmed = fixed.replace(/✖ \d+ problems?[\w\W]*/m, '').trim()
        resolve(trimmed)
      }
    )
  })
}

await check(
  'svelte.js',
  'a.js b.ts c.svelte',
  JS + '\n\n' + TS + '\n\n' + SVELTE
)
await check('ts.js', 'a.js b.ts', JS + '\n\n' + TS)
await check('index.js', 'a.js', JS)
