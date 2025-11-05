import bigintSqrt from "../utils/bigintSqrt.js";

/**
 * Check whether x is an s-gonal (polygonal) number.
 *
 * Uses the inverse formula for polygonal numbers:
 *   n = (sqrt(8(s−2)x + (s−4)^2) + (s−4)) / (2(s−2))
 * x is s-gonal iff the expression yields an integer n ≥ 1.
 *
 * Works with Number and BigInt.
 *
 * @example
 * isPolygonal(3, 15) ➜ true   // triangular
 * isPolygonal(4, 16) ➜ true   // square
 * isPolygonal(5, 35) ➜ true   // pentagonal
 * isPolygonal(7, 34) ➜ false
 *
 * @param {number|bigint} s - number of sides (s ≥ 3)
 * @param {number|bigint} x - value to test (x ≥ 1)
 * @returns {boolean} whether x is an s-gonal number
 */
export function isPolygonal(s, x) {
  s = BigInt(s);
  x = BigInt(x);

  if (s < 3n) return false;
  if (x < 1n) return false;

  const a = 8n * (s - 2n) * x + (s - 4n) * (s - 4n);
  const r = bigintSqrt(a);
  if (r * r !== a) return false; // discriminant must be perfect square

  const numerator = r + (s - 4n);
  const denominator = 2n * (s - 2n);
  if (denominator === 0n) return false; // should not happen for s ≥ 3

  const n = numerator / denominator;
  return numerator % denominator === 0n && n >= 1n;
}