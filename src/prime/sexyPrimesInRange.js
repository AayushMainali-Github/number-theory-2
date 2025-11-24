import { sieveRange } from "./sieveRange.js";

/**
 * Returns all sexy prime pairs (p, p+6) within [a, b].
 * Uses segmented sieve to collect primes, then scans for pairs.
 * Works for Number or BigInt; returns array of [bigint, bigint].
 * Throws RangeError if a > b.
 *
 * @example
 * sexyPrimesInRange(2, 30) ➜ [[23n, 29n]]
 *
 * @param {number|bigint} a
 * @param {number|bigint} b
 * @returns {Array<[bigint, bigint]>}
 */
export function sexyPrimesInRange(a, b) {
  a = BigInt(a);
  b = BigInt(b);
  if (a > b) throw new RangeError("a must be ≤ b");

  const primes = sieveRange(a, b);
  const res = [];
  for (let i = 0; i + 1 < primes.length; i++) {
    const p = primes[i];
    const q = primes[i + 1];
    if (q - p === 6n) res.push([p, q]);
  }
  return res;
}