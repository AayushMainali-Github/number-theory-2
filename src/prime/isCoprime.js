import { gcd } from "../arithmetic/gcd.js";

/**
 * Checks whether two integers are coprime (i.e., gcd(a, b) = 1).
 * Works with both Number and BigInt inputs.
 *
 * Examples:
 *   isCoprime(8, 15) ➜ true
 *   isCoprime(12, 18) ➜ false
 *   isCoprime(-7, 20) ➜ true
 *
 * @param {number|bigint} a - First integer
 * @param {number|bigint} b - Second integer
 * @returns {boolean} True if a and b are coprime, false otherwise
 */
export function isCoprime(a, b) {
  a = BigInt(a);
  b = BigInt(b);

  // Handle trivial cases
  if (a === 0n || b === 0n) return false;

  return gcd(a, b) === 1n;
}
