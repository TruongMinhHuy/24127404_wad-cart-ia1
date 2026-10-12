// cartTotal: subtotal + VAT + shipping, as a number rounded to the whole dong.
// See README.md for the specification.
function assertValidItem(item) {
  const { price, qty } = item
  if (typeof price !== 'number' || !Number.isFinite(price) || price < 0) {
    throw new RangeError(`price must be a non-negative number, got ${price}`)
  }
  if (!Number.isInteger(qty) || qty <= 0) {
    throw new RangeError(`qty must be a positive integer, got ${qty}`)
  }
}

export function cartTotal(items, options) {
  items.forEach(assertValidItem)
  if (items.length === 0) return 0

  const { vatRate, freeShipFrom, shipFee } = options
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0)
  const vat = subtotal * vatRate
  const shipping = subtotal >= freeShipFrom ? 0 : shipFee

  return Math.round(subtotal + vat + shipping)
}
