import { primeFactorization } from "../prime/primeFactorization.js";

/**
 * Computes the number of unitary divisors of n (τ*(n)).
 *
 * Definition:
 *   A unitary divisor d of n satisfies gcd(d, n/d) = 1.
 *   If n = ∏ p_i^{a_i}, then τ*(n) = 2^{ω(n)}, where ω(n) is the
 *   number of distinct prime factors.
 *
 * Only defined for n ≥ 1. Returns BigInt.
 *
 * @example
 * tauUnitary(1)  ➜ 1n
 * tauUnitary(12) ➜ 4n    // primes {2,3} → 2^2
 * tauUnitary(30) ➜ 8n    // primes {2,3,5} → 2^3
 *
 * @param {number|bigint} n - Positive integer ≥ 1
 * @returns {bigint} Number of unitary divisors of n
 * @throws {RangeError} If n ≤ 0
 */
export function tauUnitary(n) {
  n = BigInt(n);
  if (n <= 0n) throw new RangeError("tauUnitary() is only defined for n ≥ 1");
  if (n === 1n) return 1n;

  const factors = primeFactorization(n);
  const omega = BigInt(factors.length);
  return 2n ** omega;
}