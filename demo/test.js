import { exec } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

let expected = readFileSync(join(import.meta.dirname, 'expected.out'))

const FILES = join(import.meta.dirname, 'index.*')

exec(`pnpm eslint --no-color ${FILES}`, (_, stdout) => {
  let fixed = stdout.replace(
    /.*\/(logux-eslint-config|eslint-config)\//g,
    '/logux-eslint-config/'
  )
  if (fixed !== expected.toString()) {
    process.stderr.write(`Expected: ${expected}`)
    process.stderr.write(`Actual: ${stdout}`)
    process.exit(1)
  }
})
