import { isPrime } from "./isPrime.js";

/**
 * Find the smallest prime number strictly greater than n.
 *
 * Works for both Number and BigInt inputs.
 * Handles negative and small inputs correctly.
 *
 * @example
 * nextPrime(10) ➜ 11n
 * nextPrime(2) ➜ 3n
 * nextPrime(20n) ➜ 23n
 *
 * @param {number|bigint} n - The number to start searching from.
 * @returns {bigint} - The next prime > n.
 */
export function nextPrime(n) {
  n = BigInt(n);

  // If n < 2, start from 2
  if (n < 2n) return 2n;

  // Start from next number
  n += 1n;

  // If even, skip to next odd
  if (n % 2n === 0n) n += 1n;

  // Increment by 2 to skip evens
  while (!isPrime(n)) {
    n += 2n;
  }

  return n;
}
