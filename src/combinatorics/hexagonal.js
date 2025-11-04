/**
 * Compute the n-th hexagonal number.
 *
 * Formula:
 *   Hₙ = n * (2n - 1)
 *
 * Works for both Number and BigInt.
 *
 * @example
 * hexagonal(1) ➜ 1n
 * hexagonal(4) ➜ 28n
 *
 * @param {number|bigint} n - Positive integer (n ≥ 1)
 * @returns {bigint} n-th hexagonal number
 */
export function hexagonal(n) {
  n = BigInt(n);
  if (n < 1n) throw new RangeError("hexagonal() requires n ≥ 1");
  return n * (2n*n - 1n);
}
