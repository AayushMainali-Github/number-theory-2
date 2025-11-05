/**
 * Compute the n-th s-gonal (polygonal) number.
 *
 * Formula:
 *   P(s, n) = ((s - 2) n^2 - (s - 4) n) / 2
 *
 * Works for both Number and BigInt.
 *
 * @example
 * polygonal(3, 5) ➜ 15n   // triangular numbers
 * polygonal(4, 3) ➜ 9n    // square numbers
 * polygonal(5, 1) ➜ 1n    // pentagonal numbers
 *
 * @param {number|bigint} s - Number of sides in the polygon (s ≥ 3)
 * @param {number|bigint} n - Positive index (n ≥ 1)
 * @returns {bigint} n-th s-gonal number
 */
export function polygonal(s, n) {
  s = BigInt(s);
  n = BigInt(n);
  if (s < 3n) throw new RangeError("polygonal() requires s ≥ 3");
  if (n < 1n) throw new RangeError("polygonal() requires n ≥ 1");
  return (((s - 2n) * n * n) - ((s - 4n) * n)) / 2n;
}
