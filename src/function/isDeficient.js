import { sigma } from "./sigma.js";

/**
 * Checks if a number n is a Deficient Number.
 * A number is deficient if the sum of its divisors σ(n) < 2n.
 *
 * Works for both Number and BigInt inputs.
 * Returns a boolean value.
 *
 * @example
 * isDeficient(8) ➜ true  (σ(8) = 15 < 16)
 * isDeficient(12) ➜ false
 *
 * @param {number|bigint} n - The integer to check (n > 0)
 * @returns {boolean} True if deficient, else false
 */
export function isDeficient(n) {
  n = BigInt(n);
  if (n <= 0n) throw new RangeError("isDeficient() requires n > 0");

  const sum = sigma(n);
  return sum < 2n * n;
}
