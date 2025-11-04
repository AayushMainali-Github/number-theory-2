/**
 * Compute the n-th pentagonal number.
 *
 * Formula:
 *   Pₙ = n * (3n - 1) / 2
 *
 * Works for both Number and BigInt.
 *
 * @example
 * pentagonal(1) ➜ 1n
 * pentagonal(5) ➜ 35n
 *
 * @param {number|bigint} n - Positive integer (n ≥ 1)
 * @returns {bigint} n-th pentagonal number
 */
export function pentagonal(n) {
  n = BigInt(n);
  if (n < 1n) throw new RangeError("pentagonal() requires n ≥ 1");
  return (n * (3n * n - 1n)) / 2n;
}
