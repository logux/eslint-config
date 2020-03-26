#!/usr/bin/env node

let pkg = require('./package.json')

for (let i in pkg.peerDependencies) {
  if (pkg.devDependencies[i] !== pkg.peerDependencies[i]) {
    process.stderr.write(`Wrong peer dependency ${ i }\n`)
    process.exit(1)
  }
}
