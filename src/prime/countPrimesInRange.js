import { sieveRange } from "./sieveRange.js";

/**
 * Counts the number of primes in the inclusive range [a, b].
 *
 * Uses segmented sieve internally for efficient computation.
 * Works for both Number and BigInt inputs.
 *
 * @example
 * countPrimesInRange(10, 30) ➜ 6n   (11, 13, 17, 19, 23, 29)
 * countPrimesInRange(1, 10)  ➜ 4n   (2, 3, 5, 7)
 *
 * @param {number|bigint} a - Start of range (inclusive)
 * @param {number|bigint} b - End of range (inclusive)
 * @returns {bigint} Number of primes in [a, b]
 * @throws {RangeError} If a > b
 */
export function countPrimesInRange(a, b) {
  a = BigInt(a);
  b = BigInt(b);

  if (a > b) throw new RangeError("countPrimesInRange() requires a ≤ b");
  if (b < 2n) return 0n;

  const primes = sieveRange(a, b);
  return BigInt(primes.length);
}
