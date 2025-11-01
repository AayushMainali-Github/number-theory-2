import { sigma } from "./sigma.js";

/**
 * Checks if a number n is an Abundant Number.
 * A number is abundant if the sum of its divisors σ(n) > 2n.
 *
 * Works for both Number and BigInt inputs.
 * Returns a boolean value.
 *
 * @example
 * isAbundant(12) ➜ true  (σ(12) = 28 > 24)
 * isAbundant(8) ➜ false
 *
 * @param {number|bigint} n - The integer to check (n > 0)
 * @returns {boolean} True if abundant, else false
 */
export function isAbundant(n) {
  n = BigInt(n);
  if (n <= 0n) throw new RangeError("isAbundant() requires n > 0");

  const sum = sigma(n);
  return sum > 2n * n;
}
