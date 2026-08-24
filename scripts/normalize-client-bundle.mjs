import { readFile, writeFile } from 'node:fs/promises'

const path = new URL('../lib/client.js', import.meta.url)
let source = await readFile(path, 'utf8')

// DSH's browser module loader is installed on the page global. Using globalThis
// works in the normal browser window and in Electron/isolated-world contexts,
// while preserving the required lazy-CJS registration contract.
source = source.replace(
  /^window\.\__ModuleLoader__\.load\(/,
  'globalThis.__ModuleLoader__.load(',
)

if (!source.includes('globalThis.__ModuleLoader__.load(')) {
  throw new Error('dsh-learning-coder: lib/client.js is not a ModuleLoader bundle')
}

await writeFile(path, source, 'utf8')
