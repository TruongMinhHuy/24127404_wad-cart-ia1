# AI-LOG — IA#1 cartTotal

## Tool

Claude (Anthropic) and ChatGPT (OpenAI), used through chat conversations without direct access to my local machine.

## What I asked for

Implement `cartTotal(items, options)` according to the README specification. The task included setting up the test harness, writing the brief and tests, and implementing the function.

## What it produced

- `AGENTS.md`: project rules, stack, commands, layout, style, and restrictions.
- `scripts/check-format.js`: a zero-dependency format gate.
- `.github/workflows/ci.yml`: GitHub Actions workflow for running checks.
- `BRIEF.md`: task contract, edge cases, and file restrictions.
- `test/cart.test.js`: tests for normal behavior and invalid inputs.
- `src/cart.js`: input validation, empty-cart handling, shipping calculation, VAT, and rounding.

## What I read, changed and rejected

- **Changed:** Reviewed the generated implementation and project files against the README specification and project requirements. Any changes made were intended to align the implementation and tests with the specified behavior.
- **Rejected:** No suggestions were intentionally rejected.
- **Written by hand:** Reviewed the implementation and tests to understand the calculation, validation, and rounding behavior.

## What I verified myself

- **Initial test run:** The development commit history records that the tests were initially failing before implementation. See commit `e5c94c1` (`Step 3a: tests written from the spec (red)`). This documents the development sequence; it is not a substitute for a saved test-run log.
- **Final `npm run check`:** Passed in the final local verification, with all 17 tests passing and the format check succeeding.
- **GitHub Actions CI:** Passed. The latest run, [CI #3 — Update submission reports](https://github.com/TruongMinhHuy/24127404_wad-cart-ia1/actions), completed successfully on the `main` branch in 10 seconds.

## Git commit evidence

The repository contains seven commits documenting the development process, from harness setup and the initial failing tests to implementation, additional edge-case tests, and submission reports.

- `7ed84ef` — Step 1: harness — rules file (AGENTS.md), format gate, CI; npm test still red.
- `29d30d6` — Step 2: brief for the assistant.
- `e5c94c1` — Step 3a: tests written from the spec (red).
- `63e62db` — Step 3b: implement cartTotal; npm run check green.
- `b897633` — Step 4: AI-LOG and self-assessment.
- `fe445ba` — Add 4 more edge-case tests.
- `977e5f0` — Finalize tests and submission reports.

## Known limits

The implementation does not validate the `options` fields. Invalid or missing option values may produce unexpected results. This behavior was left out of scope because the specification does not define validation rules for `options`.