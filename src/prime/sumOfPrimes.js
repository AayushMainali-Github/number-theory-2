import { sieve } from "./sieve.js";

/**
 * Returns the sum of all primes ≤ n as a BigInt.
 * Uses the sieve up to n and reduces the list to a BigInt sum.
 * Works for Number or BigInt inputs.
 * For n < 2, returns 0n.
 *
 * @example
 * sumOfPrimes(10) ➜ 17n
 * sumOfPrimes(100) ➜ 1060n
 *
 * @param {number|bigint} n
 * @returns {bigint}
 */
export function sumOfPrimes(n) {
  n = BigInt(n);
  if (n < 2n) return 0n;
  const primes = sieve(n);
  let sum = 0n;
  for (const p of primes) sum += p;
  return sum;
}
