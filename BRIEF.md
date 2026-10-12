# Brief: implement `cartTotal`

Read `AGENTS.md` and `README.md` first and follow them.

## Task
Implement `cartTotal(items, options)` in `src/cart.js`.

## Files you may touch
- `src/cart.js` (implementation)
- `test/cart.test.js` (add tests only; do not weaken the existing one)

Do not touch anything else (not `package.json`, not `scripts/`, not `.github/`).

## Contract
- `items`: array of `{ name, price, qty }`. `options`: `{ vatRate, freeShipFrom, shipFee }`.
- `subtotal` = sum of `price * qty`.
- `vat` = `subtotal * vatRate`.
- `shipping` = `0` if `subtotal >= freeShipFrom`, otherwise `shipFee`.
- Return `subtotal + vat + shipping` as a **number** (not a string),
  rounded to the whole đồng with `Math.round`. Never use `toFixed`.
- Worked example: 2 × 180000 + 1 × 45000, `{ vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }`
  → subtotal 405000, VAT 32400, shipping 30000 → `467400`.

## Edge cases
- Empty cart (`[]`) returns `0`. No VAT, no shipping.
- A negative `price` throws `RangeError`.
- A `qty` that is not a positive integer (0, negative, 1.5, NaN, a string) throws `RangeError`.
- Validate every item before computing anything.
- Free shipping applies exactly at the threshold (`subtotal === freeShipFrom` → shipping 0).

## Constraints
- Plain JavaScript, ES module, **no dependencies** (no lodash, no decimal.js, no test frameworks).
- Tests use only `node:test` and `node:assert/strict`.
- Each test checks one thing and asserts numbers from the spec, not the implementation.

## Done means
- `npm run check` passes (format gate + all tests).
- Show me the diff and which edge cases the tests cover.
