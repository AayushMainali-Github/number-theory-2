import { isPrime } from "./isPrime.js";

/**
 * Determine if a number is a Fermat prime.
 * A Fermat prime is a prime number of the form F_n = 2^(2^n) + 1.
 *
 * @example
 * isFermatPrime(3) ➜ true (2^(2^0) + 1)
 * isFermatPrime(5) ➜ true (2^(2^1) + 1)
 * isFermatPrime(17) ➜ true (2^(2^2) + 1)
 *
 * @param {number|bigint} n
 * @returns {boolean}
 */
export function isFermatPrime(n) {
  n = BigInt(n);
  if (n < 3n) return false;

  // n - 1 must be a power of 2
  const minusOne = n - 1n;
  if (minusOne <= 0n || (minusOne & (minusOne - 1n)) !== 0n) return false;

  // The exponent of 2 (let's call it E) must itself be a power of 2: E = 2^k
  const E = BigInt(minusOne.toString(2).length - 1);
  if (E === 0n) return false;
  if ((E & (E - 1n)) !== 0n) return false;

  // Check if it's prime
  return isPrime(n);
}
