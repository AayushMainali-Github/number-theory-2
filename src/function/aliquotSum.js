import { sigma } from "./sigma.js";

/**
 * Computes the Aliquot Sum of a number n.
 *
 * The aliquot sum is defined as σ(n) - n,
 * where σ(n) is the sum of all positive divisors of n.
 *
 * Works for both Number and BigInt inputs.
 * Returns result as a BigInt.
 *
 * @example
 * aliquotSum(6) ➜ 6n   (1 + 2 + 3 = 6)
 * aliquotSum(12) ➜ 16n (1 + 2 + 3 + 4 + 6 = 16)
 * aliquotSum(8) ➜ 7n   (1 + 2 + 4 = 7)
 *
 * @param {number|bigint} n - Integer greater than 0
 * @returns {bigint} Aliquot sum of n
 */
export function aliquotSum(n) {
  n = BigInt(n);
  if (n <= 0n) throw new RangeError("aliquotSum() requires n > 0");

  const sum = sigma(n);
  return sum - n; // σ(n) - n
}
