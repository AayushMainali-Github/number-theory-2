import { isPrime } from "./isPrime.js";

/**
 * Determine if a prime p is a safe prime.
 * A safe prime is a prime number of the form 2p + 1 where p is also prime.
 * (In some contexts, p is the safe prime if (p-1)/2 is prime).
 * This function checks if (n-1)/2 is prime, assuming n is prime.
 *
 * @example
 * isSafePrime(11) ➜ true ((11-1)/2 = 5, which is prime)
 * isSafePrime(23) ➜ true ((23-1)/2 = 11, which is prime)
 *
 * @param {number|bigint} n
 * @returns {boolean}
 */
export function isSafePrime(n) {
  n = BigInt(n);
  if (!isPrime(n)) return false;

  const p = (n - 1n) / 2n;
  return isPrime(p);
}
