/**
 * Computes the product of the digits of an integer n.
 *
 * Works for both Number and BigInt inputs.
 * Returns result as a BigInt.
 *
 * @example
 * productOfDigits(1234) ➜ 24n
 * productOfDigits(105) ➜ 0n
 * productOfDigits(-234) ➜ 24n
 *
 * @param {number|bigint} n - The integer to multiply digits of
 * @returns {bigint} Product of digits
 */
export function productOfDigits(n) {
  n = BigInt(n);
  n = n < 0n ? -n : n;

  // Special case: if n is 0, product = 0
  if (n === 0n) return 0n;

  let product = 1n;
  while (n > 0n) {
    product *= n % 10n;
    n /= 10n;
  }
  return product;
}
