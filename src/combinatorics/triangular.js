/**
 * Compute the n-th triangular number.
 *
 * Formula:
 *   Tₙ = n * (n + 1) / 2
 *
 * Works for both Number and BigInt.
 *
 * @example
 * triangular(5) ➜ 15n
 * triangular(10) ➜ 55n
 *
 * @param {number|bigint} n - Positive integer (n ≥ 1)
 * @returns {bigint} n-th triangular number
 */
export function triangular(n) {
  n = BigInt(n);
  if (n < 1n) throw new RangeError("triangular() requires n ≥ 1");
  return (n * (n + 1n)) / 2n;
}
