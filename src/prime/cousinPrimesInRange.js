import { sieveRange } from "./sieveRange.js";

/**
 * Returns all cousin prime pairs (p, p+4) within [a, b].
 * Uses segmented sieve to collect primes, then scans for pairs.
 * Works for Number or BigInt; returns array of [bigint, bigint].
 * Throws RangeError if a > b.
 *
 * @example
 * cousinPrimesInRange(2, 30) ➜ [[7n, 11n], [13n, 17n], [19n, 23n]]
 *
 * @param {number|bigint} a
 * @param {number|bigint} b
 * @returns {Array<[bigint, bigint]>}
 */
export function cousinPrimesInRange(a, b) {
  a = BigInt(a);
  b = BigInt(b);
  if (a > b) throw new RangeError("a must be ≤ b");

  const primes = sieveRange(a, b);
  const res = [];
  for (let i = 0; i + 1 < primes.length; i++) {
    const p = primes[i];
    const q = primes[i + 1];
    if (q - p === 4n) res.push([p, q]);
  }
  return res;
}