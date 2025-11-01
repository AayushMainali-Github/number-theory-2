import { sieve } from "./sieve.js";

/**
 * Counts the number of prime numbers ≤ n.
 *
 * Uses the Sieve of Eratosthenes under the hood for efficiency.
 * Works for both Number and BigInt inputs.
 *
 * @example
 * countPrimes(10) ➜ 4n   (primes: 2, 3, 5, 7)
 * countPrimes(100) ➜ 25n
 *
 * @param {number|bigint} n - Upper limit (inclusive)
 * @returns {bigint} Number of primes ≤ n (0 if n < 2)
 */
export function countPrimes(n) {
  n = BigInt(n);
  if (n < 2n) return 0n;
  const primes = sieve(n);
  return BigInt(primes.length);
}
