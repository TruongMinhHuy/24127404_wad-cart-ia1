import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
const one = (price, qty = 1) => [{ name: 'x', price, qty }]

// This test fails until you implement cartTotal. That is the point:
// run `npm test` first and see it red.
test('the example from the slides', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  assert.equal(cartTotal(items, options), 467400)
})

test('the result is a number, not a string', () => {
  assert.equal(typeof cartTotal(one(100000), options), 'number')
})

test('empty cart returns 0 (no VAT, no shipping)', () => {
  assert.equal(cartTotal([], options), 0)
})

test('subtotal exactly at the threshold ships free', () => {
  // 500000 + VAT 40000 + shipping 0
  assert.equal(cartTotal(one(500000), options), 540000)
})

test('subtotal just below the threshold pays shipping', () => {
  // 499999 + VAT 39999.92 + shipping 30000 = 569998.92 -> 569999
  assert.equal(cartTotal(one(499999), options), 569999)
})

test('quantity multiplies the price', () => {
  // 3 x 100000 = 300000 + VAT 24000 + shipping 30000
  assert.equal(cartTotal(one(100000, 3), options), 354000)
})

test('result is rounded to the whole dong', () => {
  // 1 + VAT 0.08 + shipping 30000 = 30001.08 -> 30001
  assert.equal(cartTotal(one(1), options), 30001)
})

test('a negative price throws RangeError', () => {
  assert.throws(() => cartTotal(one(-1), options), RangeError)
})

test('a quantity of 0 throws RangeError', () => {
  assert.throws(() => cartTotal(one(1000, 0), options), RangeError)
})

test('a non-integer quantity throws RangeError', () => {
  assert.throws(() => cartTotal(one(1000, 1.5), options), RangeError)
})

test('a NaN quantity throws RangeError', () => {
  assert.throws(() => cartTotal(one(1000, NaN), options), RangeError)
})


test('a negative quantity throws RangeError', () => {
  assert.throws(() => cartTotal(one(1000, -2), options), RangeError)
})

test('one bad item among good ones still throws', () => {
  const items = [...one(1000), ...one(-5)]
  assert.throws(() => cartTotal(items, options), RangeError)
})
test('a NaN price throws RangeError', () => {
  assert.throws(() => cartTotal(one(NaN), options), RangeError)
})

test('a price given as a string throws RangeError', () => {
  assert.throws(() => cartTotal(one('1000'), options), RangeError)
})

test('a quantity given as a string throws RangeError', () => {
  assert.throws(() => cartTotal(one(1000, '2'), options), RangeError)
})

test('a price of 0 is allowed', () => {
  // 0 + VAT 0 + shipping 30000
  assert.equal(cartTotal(one(0), options), 30000)
})
