# SELF_ASSESSMENT_REPORT — IA#1

Student ID: 24127404

| # | Criterion | Max | I claim | Evidence |
|---|-----------|-----|---------|----------|
| 1 | cartTotal behaves as specified | 30 | 29 | `src/cart.js`; tests verify the worked example returns 467400 as a number, empty cart returns 0, free-shipping threshold behavior, rounding, and invalid-input errors. |
| 2 | Tests | 20 | 19 | `test/cart.test.js`: worked example, empty cart, threshold at and below, rounding, negative price, invalid quantities including 0, negative, non-integer, NaN and string; one reason per test. |
| 3 | The harness | 20 | 18 | `AGENTS.md` documents the stack, commands and restrictions; `scripts/check-format.js` provides the format gate; `package.json` defines `check`; `.github/workflows/ci.yml` runs checks in CI. |
| 4 | The brief | 15 | 14 | `BRIEF.md` specifies allowed files, contract, edge cases, dependency restrictions and definition of done. |
| 5 | AI-LOG.md | 15 | 14 | `AI-LOG.md` records AI assistance, changes, rejected suggestions and verification; commit history supports the documented workflow. |
| | **Total** | **100** | **94** | ZIP filename: `24127404_94.zip` |

## What I did not manage

- Options are not validated because the specification does not define their invalid-input behavior.
- Floating-point behavior beyond the tested rounding case was not exhaustively tested.
- [Add any remaining limitations or incomplete checks that apply to the submitted version.]