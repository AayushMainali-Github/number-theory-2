import bigintSqrt from "../utils/bigintSqrt.js";

/**
 * Check if a given number is a perfect square.
 *
 * Works for both Number and BigInt.
 * Uses integer square root for BigInt safety.
 *
 * @example
 * isSquare(25) ➜ true
 * isSquare(26) ➜ false
 *
 * @param {number|bigint} n - Integer to test
 * @returns {boolean} True if n is a perfect square, else false
 */
export function isSquare(n) {
  n = BigInt(n);
  if (n < 0n) return false;
  const root = bigintSqrt(n);
  return root * root === n;
}
