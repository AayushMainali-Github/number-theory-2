import { isPrime } from "./isPrime.js";
import { isLucasLehmer } from "./isLucasLehmer.js";

/**
 * Determine if a number is a Mersenne prime.
 * A Mersenne prime is a prime number of the form M_n = 2^n - 1.
 *
 * @example
 * isMersennePrime(7) ➜ true (2^3 - 1)
 * isMersennePrime(31) ➜ true (2^5 - 1)
 * isMersennePrime(8191) ➜ true (2^13 - 1)
 *
 * @param {number|bigint} n
 * @returns {boolean}
 */
export function isMersennePrime(n) {
  n = BigInt(n);
  if (n < 2n) return false;

  // n + 1 must be a power of 2
  const plusOne = n + 1n;
  if ((plusOne & (plusOne - 1n)) !== 0n) return false;

  // Get the exponent p such that 2^p - 1 = n
  // Using bit length for BigInt
  const p = BigInt(plusOne.toString(2).length - 1);

  // p must be prime for 2^p - 1 to be prime
  if (!isPrime(p)) return false;

  // Use Lucas-Lehmer for the final check
  return isLucasLehmer(p);
}
