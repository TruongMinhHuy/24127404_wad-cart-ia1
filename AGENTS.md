# Rules for AI assistants — wad-cart-starter

## Project
`cartTotal(items, options)` — compute a shopping-cart total in Vietnamese đồng.

## Stack
- Node.js 22, ES modules (`"type": "module"`), plain JavaScript.
- Tests: built-in `node:test` + `node:assert/strict`. Nothing else.
- Zero dependencies. `package.json` must have no `dependencies` or `devDependencies`.

## Commands
- `npm test` — run all tests (must be green before any commit).
- `npm run format:check` — style gate (tabs, trailing spaces, CRLF, final newline).
- `npm run check` — runs both gates; this is what CI runs.

## Layout
- `src/cart.js` — the only source file. Exports `cartTotal`.
- `test/cart.test.js` — tests, written from the spec in README.md.
- `scripts/check-format.js` — the format gate.

## Style
- 2 spaces, single quotes, no semicolons, LF line endings, file ends with a newline.

## Never
- NEVER add a dependency (no lodash, no decimal.js, no jest, no eslint).
- NEVER return a string: no `toFixed()` for the result. Use `Math.round`, return a number.
- NEVER write a test that copies the implementation. Assert the spec's numbers.
- NEVER edit a test to make it pass. If a test is wrong, say why first.
- NEVER touch files outside `src/`, `test/` unless the task says so.

## Workflow
1. Read README.md (the spec) before writing code.
2. Make the smallest change that works. Show the diff.
3. Run `npm run check` and report the result honestly.
