import { primeFactorization } from "./primeFactorization.js";

/**
 * Return the distinct prime factors of a positive integer n.
 *
 * A wrapper around `primeFactorization(n)` that extracts only
 * the prime numbers (ignoring their powers).
 *
 * Example:
 *   primeFactors(132) ➜ [2n, 3n, 11n]
 *   primeFactors(60)  ➜ [2n, 3n, 5n]
 *
 * @param {number|bigint} n - Integer ≥ 2
 * @returns {bigint[]} Distinct prime factors of n
 */
export function primeFactors(n) {
  return primeFactorization(n).map((f) => f.prime);
}
