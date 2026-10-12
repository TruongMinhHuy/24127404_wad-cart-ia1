// Zero-dependency format gate: fails on tabs, trailing spaces, CRLF,
// or a missing final newline in the project's own files.
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, extname } from 'node:path'

const roots = ['src', 'test', 'scripts', '.github', 'package.json', 'AGENTS.md']
const exts = new Set(['.js', '.json', '.md', '.yml'])
const problems = []

function visit(path) {
  if (statSync(path).isDirectory()) {
    for (const name of readdirSync(path)) visit(join(path, name))
    return
  }
  if (!exts.has(extname(path))) return
  const text = readFileSync(path, 'utf8')
  if (text.includes('\r')) problems.push(`${path}: CRLF line endings`)
  if (!text.endsWith('\n')) problems.push(`${path}: no final newline`)
  text.split('\n').forEach((line, i) => {
    if (path.endsWith('.js') && line.includes('\t')) {
      problems.push(`${path}:${i + 1}: tab character`)
    }
    if (/[ \t]+$/.test(line)) problems.push(`${path}:${i + 1}: trailing space`)
  })
}

for (const root of roots) visit(root)

if (problems.length > 0) {
  console.error(problems.join('\n'))
  process.exit(1)
}
console.log('format ok')
