import { sieveRange } from "./sieveRange.js";

/**
 * Counts twin prime pairs (p, p+2) in [a, b].
 * Works for Number or BigInt inputs; returns a Number count.
 * Throws RangeError if a > b.
 *
 * @example
 * twinPrimeCountInRange(2, 20) ➜ 4
 *
 * @param {number|bigint} a
 * @param {number|bigint} b
 * @returns {number}
 */
export function twinPrimeCountInRange(a, b) {
  a = BigInt(a);
  b = BigInt(b);
  if (a > b) throw new RangeError("a must be ≤ b");

  const primes = sieveRange(a, b);
  let count = 0;
  for (let i = 0; i + 1 < primes.length; i++) {
    if (primes[i + 1] - primes[i] === 2n) count++;
  }
  return count;
}