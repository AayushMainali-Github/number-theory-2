import { sieveRange } from "./sieveRange.js";

/**
 * Returns all twin prime pairs (p, p+2) within [a, b].
 * Uses the segmented sieve to collect primes, then scans for pairs.
 * Works for Number or BigInt; returns array of [bigint, bigint].
 * Throws RangeError if a > b.
 *
 * @example
 * twinPrimesInRange(2, 20) ➜ [[3n, 5n], [5n, 7n], [11n, 13n], [17n, 19n]]
 *
 * @param {number|bigint} a
 * @param {number|bigint} b
 * @returns {Array<[bigint, bigint]>}
 */
export function twinPrimesInRange(a, b) {
  a = BigInt(a);
  b = BigInt(b);
  if (a > b) throw new RangeError("a must be ≤ b");

  const primes = sieveRange(a, b);
  const res = [];
  for (let i = 0; i + 1 < primes.length; i++) {
    const p = primes[i];
    const q = primes[i + 1];
    if (q - p === 2n) res.push([p, q]);
  }
  return res;
}
