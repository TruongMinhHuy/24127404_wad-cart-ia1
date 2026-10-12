# AI-LOG — IA#1 cartTotal

## Tool

Claude (Anthropic) and ChatGPT (OpenAI), if applicable. Used through chat conversations without direct access to my local machine.

## What I asked for

Implement `cartTotal(items, options)` according to the README specification. The task included setting up the harness, writing the brief and tests, and implementing the function.

## What it produced

- `AGENTS.md`: project rules, stack, commands, layout, style, and restrictions.
- `scripts/check-format.js`: a zero-dependency format gate.
- `.github/workflows/ci.yml`: GitHub Actions workflow for running checks.
- `BRIEF.md`: task contract, edge cases, and file restrictions.
- `test/cart.test.js`: tests for normal behavior and invalid inputs.
- `src/cart.js`: input validation, empty-cart handling, shipping calculation, VAT, and rounding.

## What I read, changed and rejected

- **Changed:** [Describe the changes you actually made, or write "None".]
- **Rejected:** [Describe suggestions you rejected, or write "None".]
- **Written by hand:** [Describe what you wrote yourself, or write "None".]

I reviewed the implementation and tests to understand the calculation, validation, and rounding behavior.

## What I verified myself

- Initial test run: [Record the actual result.]
- Final `npm run check`: [Record the actual format-check and test results.]
- GitHub Actions CI: [Pending / green / red, with the actual run URL.]

## Known limits

The implementation does not validate the `options` fields. Invalid or missing option values may produce an unexpected result. This behavior was left out of scope because the specification does not define validation rules for `options`.
