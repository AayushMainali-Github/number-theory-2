/**
 * Check if a given number is a pentagonal number.
 *
 * A number x is pentagonal if and only if:
 *   (sqrt(24x + 1) + 1) / 6 is an integer
 *
 * Works for both Number and BigInt.
 *
 * @example
 * isPentagonal(35) ➜ true
 * isPentagonal(36) ➜ false
 *
 * @param {number|bigint} n - Integer to test
 * @returns {boolean} True if n is pentagonal, else false
 */
export function isPentagonal(n) {
  n = BigInt(n);
  if (n < 1n) return false;

  const test = 24n * n + 1n;
  const root = bigintSqrt(test);
  if (root * root !== test) return false;
  return (root + 1n) % 6n === 0n;
}

/**
 * Integer square root for BigInt.
 * Returns floor(sqrt(n)).
 */
function bigintSqrt(n) {
  if (n < 0n) throw new RangeError("Cannot compute sqrt of negative number");
  if (n < 2n) return n;

  let x0 = n / 2n;
  let x1 = (x0 + n / x0) / 2n;
  while (x1 < x0) {
    x0 = x1;
    x1 = (x0 + n / x0) / 2n;
  }
  return x0;
}
