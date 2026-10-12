# AI-LOG — IA#1 cartTotal

## Tool
Claude (Anthropic), in the claude.ai chat. One conversation, no agent access to my
machine: it cloned the starter in its own sandbox and gave me the result.

## What I asked for
Implement `cartTotal(items, options)` from the README spec, with a harness first
(rules file, a gate, CI), then a brief, then tests, then the implementation.

## What it produced
- `AGENTS.md` (rules file: stack, commands, layout, style, five "never" rules).
- `scripts/check-format.js`: a zero-dependency format gate (tabs, trailing spaces,
  CRLF, final newline), plus the `format:check` and `check` scripts.
- `.github/workflows/ci.yml`: runs `npm run check` on every push.
- `BRIEF.md`: the brief (files it may touch, contract, edge cases, "no dependencies").
- `test/cart.test.js`: 12 tests; the starter's example test kept unchanged.
- `src/cart.js`: validate every item first, return 0 for empty, `Math.round` at the end.

## Order of work (matches the commit history)
1. Harness commit, `npm test` still red (1 failing test, "not implemented").
2. Brief commit.
3. Tests commit, still red (12 failing), then implementation commit, 12 passing.

## What I read, changed and rejected
<!-- EDIT THIS SECTION YOURSELF. Write only what is true. Examples of things to check:
- Did you read the diff of src/cart.js line by line? Can you explain `Math.round`
  and why `toFixed` is not used?
- Did you change anything (names, error messages, a test)? Which line, why?
- Did you reject anything the assistant suggested? What and why?
- Which part did you write by hand? (If none, say "none" — that costs no marks.)
-->
- Changed: (fill in, or "nothing")
- Rejected: (fill in, or "nothing")
- Written by hand: (fill in, or "nothing")

## What I verified myself
- Ran `npm test` before any code: red, `not implemented`.
- Ran `npm run check` after: format ok, 12 tests pass.
- CI run on GitHub: (fill in after pushing — green or red, link to the run)

## Known limits
- `options` fields are not validated (missing `vatRate` gives `NaN`). The spec does not
  say what should happen, so I left it out of scope.
