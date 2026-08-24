import { readFile, writeFile } from 'node:fs/promises'

const path = new URL('../lib/client.js', import.meta.url)
let source = await readFile(path, 'utf8')

// DSH installs the browser module loader on the page global. globalThis also
// works in Electron/isolated-world contexts while preserving the required
// lazy-CJS registration contract.
source = source.replace(
  /^window\.(__ModuleLoader__)\.load\(/,
  'globalThis.$1.load(',
)

if (!source.includes('globalThis.__ModuleLoader__.load(')) {
  throw new Error('dsh-learning-coder: lib/client.js is not a ModuleLoader bundle')
}

await writeFile(path, source, 'utf8')
