import { exec } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

let expected = readFileSync(join(import.meta.dirname, 'expected.out'))

const FILES = join(import.meta.dirname, 'index.*')

exec(`pnpm eslint --no-color ${FILES}`, (_, stdout) => {
  if (stdout !== expected.toString()) {
    process.stderr.write(`Expected: ${expected}`)
    process.stderr.write(`Actual: ${stdout}`)
    process.exit(1)
  }
})
