/**
 * Checks if a number is even.
 * Works for both Number and BigInt inputs.
 * Returns a boolean value.
 *
 * @example
 * isEven(4) ➜ true
 * isEven(7) ➜ false
 *
 * @param {number|bigint} n - The integer to check
 * @returns {boolean} True if even, else false
 */

export function isEven(n) {
  n = BigInt(n);
  return n % 2n === 0n;
}
