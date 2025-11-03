import bigintSqrt from "../utils/bigintSqrt.js";

/**
 * Check if a given number is a triangular number.
 *
 * A number x is triangular if and only if:
 *   8x + 1 is a perfect square
 *
 * Works for both Number and BigInt.
 *
 * @example
 * isTriangular(15) ➜ true
 * isTriangular(14) ➜ false
 *
 * @param {number|bigint} n - Integer to test
 * @returns {boolean} True if n is triangular, else false
 */
export function isTriangular(n) {
  n = BigInt(n);
  if (n < 1n) return false;

  // Formula: n is triangular if 8n + 1 is a perfect square
  const test = 8n * n + 1n;
  const root = bigintSqrt(test);
  return root * root === test;
}
