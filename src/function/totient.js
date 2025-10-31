import { primeFactorization } from "../prime/primeFactorization.js";

/**
 * Computes Euler's Totient Function φ(n).
 *
 * Formula:
 *   φ(n) = n × Π (1 - 1/p)
 * where the product is over all distinct prime factors p of n.
 *
 * Works with both Number and BigInt.
 * Handles negative inputs by using |n|.
 *
 * @example
 *   totient(1)  ➜ 1n
 *   totient(9)  ➜ 6n
 *   totient(10) ➜ 4n
 *
 * @param {number|bigint} n - The integer for which φ(n) is computed
 * @returns {bigint} The value of Euler's Totient function φ(n)
 */
export function totient(n) {
  n = BigInt(n);
  if (n < 0n) n = -n;

  if (n === 0n) return 0n;
  if (n === 1n) return 1n;

  // Retrieve array of { prime, power } objects
  const factors = primeFactorization(n);

  let result = n;
  for (const { prime } of factors) {
    const p = BigInt(prime);
    result = (result / p) * (p - 1n);
  }

  return result;
}
