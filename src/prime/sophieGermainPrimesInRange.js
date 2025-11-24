import { sieveRange } from "./sieveRange.js";
import { isPrime } from "./isPrime.js";

/**
 * Returns primes p in [a, b] where 2p + 1 is also prime.
 * Works for Number or BigInt inputs; returns bigint[].
 * Throws RangeError if a > b.
 *
 * @example
 * sophieGermainPrimesInRange(2, 50) ➜ [2n, 3n, 5n, 11n, 23n, 29n, 41n]
 *
 * @param {number|bigint} a
 * @param {number|bigint} b
 * @returns {bigint[]}
 */
export function sophieGermainPrimesInRange(a, b) {
  a = BigInt(a);
  b = BigInt(b);
  if (a > b) throw new RangeError("a must be ≤ b");

  const primes = sieveRange(a, b);
  const res = [];
  for (const p of primes) {
    const q = 2n * p + 1n;
    if (isPrime(q)) res.push(p);
  }
  return res;
}