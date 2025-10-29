/**
 * Compute the Least Common Multiple (LCM) of two numbers.
 * Uses the relationship: lcm(a, b) = |a * b| / gcd(a, b)
 * Always returns a non-negative BigInt.
 *
 * @example
 * lcm(12, 18) ➜ 36n
 * lcm(-4, 6) ➜ 12n
 *
 * @param {number|bigint} a - First number
 * @param {number|bigint} b - Second number
 * @returns {bigint} The least common multiple of a and b
 */
import { gcd } from "./gcd.js";

export function lcm(a, b) {
  a = BigInt(a);
  b = BigInt(b);

  // If either is zero, LCM is zero
  if (a === 0n || b === 0n) return 0n;

  const g = gcd(a, b);
  const result = (a * b) / g;

  // Always return positive value
  return result < 0n ? -result : result;
}
