/**
 * Checks if a number is odd.
 * Works for both Number and BigInt inputs.
 * Returns a boolean value.
 *
 * @example
 * isOdd(4) ➜ false
 * isOdd(7) ➜ true
 *
 * @param {number|bigint} n - The integer to check
 * @returns {boolean} True if odd, else false
 */

export function isOdd(n) {
  n = BigInt(n);
  // Use inequality against 0 so negative odd numbers (which give -1n) are handled
  // correctly. This mirrors isEven which checks for === 0n.
  return n % 2n !== 0n;
}
