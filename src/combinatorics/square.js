/**
 * Compute the n-th square number.
 *
 * Formula:
 *   Sₙ = n²
 *
 * Works for both Number and BigInt.
 *
 * @example
 * square(5) ➜ 25n
 * square(10) ➜ 100n
 *
 * @param {number|bigint} n - Positive integer (n ≥ 1)
 * @returns {bigint} n-th square number
 */
export function square(n) {
  n = BigInt(n);
  if (n < 1n) throw new RangeError("square() requires n ≥ 1");
  return n * n;
}
