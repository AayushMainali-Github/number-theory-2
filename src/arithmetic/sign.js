/**
 * Returns the sign of a number.
 * Works for both Number and BigInt inputs.
 * Returns -1 for negative numbers, 0 for zero, and 1 for positive numbers.
 * 
 * @example
 * sign(-5) ➜ -1
 * sign(0) ➜ 0
 * sign(7) ➜ 1
 * 
 * @param {number|bigint} n - The number to check
 * @returns {number} -1, 0, or 1 depending on the sign of n
 */

export function sign(n) {
  n = BigInt(n);
  if (n > 0n) return 1;
  if (n < 0n) return -1;
  return 0;
}