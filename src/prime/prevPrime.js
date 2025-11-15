import { isPrime } from "./isPrime.js";

/**
 * Returns the largest prime ≤ n. If no prime exists (n < 2), returns null.
 * Works for Number or BigInt inputs; returns BigInt.
 *
 * @example
 * prevPrime(2) ➜ 2n
 * prevPrime(100) ➜ 97n
 * prevPrime(-5) ➜ null
 *
 * @param {number|bigint} n
 * @returns {bigint|null}
 */
export function prevPrime(n) {
  n = BigInt(n);

  if (n < 2n) return null;
  if (isPrime(n)) return n;

  // Move to the nearest lower odd number
  if (n % 2n === 0n) n -= 1n;

  for (let k = n; k >= 2n; k -= 2n) {
    if (isPrime(k)) return k;
  }

  return null;
}
