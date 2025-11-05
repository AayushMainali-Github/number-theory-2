import { primeFactorization } from "../prime/primeFactorization.js";

/**
 * Computes the radical of n (squarefree kernel), i.e., the product of
 * distinct prime factors of n.
 *
 * Conventions:
 * - Handles negative inputs by using |n|.
 * - rad(0) ➜ 0n (graceful handling, consistent with totient).
 * - rad(1) ➜ 1n.
 *
 * Examples:
 *   radical(1)    ➜ 1n
 *   radical(12)   ➜ 6n   // 12 = 2^2 · 3, distinct primes 2·3
 *   radical(60)   ➜ 30n  // 60 = 2^2 · 3 · 5, distinct primes 2·3·5
 *   radical(36)   ➜ 6n   // 36 = 2^2 · 3^2
 *
 * @param {number|bigint} n - Integer input
 * @returns {bigint} Product of distinct prime factors of n
 */
export function radical(n) {
  n = BigInt(n);
  if (n < 0n) n = -n;

  if (n === 0n) return 0n;
  if (n === 1n) return 1n;

  const factors = primeFactorization(n);
  let result = 1n;
  for (const { prime } of factors) {
    result *= prime;
  }
  return result;
}
