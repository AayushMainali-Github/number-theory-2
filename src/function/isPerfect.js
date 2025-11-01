import { sigma } from "./sigma.js";

/**
 * Checks if a number n is a Perfect Number.
 * A number is perfect if the sum of its divisors σ(n) = 2n.
 *
 * Works for both Number and BigInt inputs.
 * Returns a boolean value.
 *
 * @example
 * isPerfect(6) ➜ true   (σ(6) = 12 = 2×6)
 * isPerfect(28) ➜ true  (σ(28) = 56 = 2×28)
 * isPerfect(12) ➜ false
 *
 * @param {number|bigint} n - The integer to check (n > 0)
 * @returns {boolean} True if perfect, else false
 */
export function isPerfect(n) {
  n = BigInt(n);
  if (n <= 0n) throw new RangeError("isPerfect() requires n > 0");

  const sum = sigma(n);
  return sum === 2n * n;
}
