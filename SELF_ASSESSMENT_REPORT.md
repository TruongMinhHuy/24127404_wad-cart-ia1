# SELF_ASSESSMENT_REPORT — IA#1
a
Student ID: 24127404

| # | Criterion | Max | I claim | Evidence |
|---|---|---:|---:|---|
| 1 | cartTotal behaves as specified | 30 | 29 | `src/cart.js`; tests cover the worked example returning `467400` as a number, empty-cart behavior, free-shipping thresholds, rounding, and invalid-input errors. |
| 2 | Tests | 20 | 19 | `test/cart.test.js`: worked example, empty cart, threshold at and below, rounding, negative price, and invalid quantities including zero, negative, non-integer, `NaN`, and string values. Tests use separate assertions for individual behaviors. |
| 3 | The harness | 20 | 18 | `AGENTS.md` documents project rules and commands; `scripts/check-format.js` provides the format gate; `package.json` defines `check`; `.github/workflows/ci.yml` defines the CI workflow. |
| 4 | The brief | 15 | 14 | `BRIEF.md` specifies the allowed files, function contract, edge cases, dependency restrictions, and definition of done. |
| 5 | AI-LOG.md | 15 | 14 | `AI-LOG.md` documents AI assistance, implementation decisions, and verification results. The seven-commit Git history provides additional evidence of the development sequence. |
| | **Total** | **100** | **94** | ZIP filename: `24127404_94.zip` |

## What I did not manage

- The `options` fields are not validated because the specification does not define their invalid-input behavior.
- Floating-point behavior beyond the tested rounding cases was not exhaustively tested.

Repository: [https://github.com/TruongMinhHuy/24127404_wad-cart-ia1](https://github.com/TruongMinhHuy/24127404_wad-cart-ia1)