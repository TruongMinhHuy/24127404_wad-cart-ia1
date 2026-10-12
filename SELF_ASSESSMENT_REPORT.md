# SELF_ASSESSMENT_REPORT — IA#1

Student ID: 24127404

| # | Criterion | Max | I claim | Evidence |
|---|-----------|-----|---------|----------|
| 1 | cartTotal behaves as specified | 30 | 28 | `src/cart.js`; test "the example from the slides" returns 467400 as a number; tests for threshold, empty cart, both RangeError cases pass |
| 2 | Tests | 20 | 18 | `test/cart.test.js`: example, empty cart, threshold (at and just below), rounding, negative price, qty 0 / 1.5 / -2; one reason per test |
| 3 | The harness | 20 | 17 | `AGENTS.md` (stack, commands, five "never" rules); gate = `npm test` + `npm run format:check`; CI in `.github/workflows/ci.yml` (**lower this if CI is red**) |
| 4 | The brief | 15 | 14 | `BRIEF.md`: files allowed, contract, edge cases, "no dependencies", definition of done |
| 5 | AI-LOG.md | 15 | 12 | `AI-LOG.md` + commit history (steps 1, 2, 3a, 3b in order) |
| | **Total** | 100 | **89** | file name: `<StudentID>_89.zip` |

## What I did not manage
- Options are not validated (missing `vatRate` gives `NaN`); the spec does not cover it.
- I did not test floating-point edge cases beyond one rounding test.
