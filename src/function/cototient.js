import { totient } from "./totient.js";

/**
 * Computes the cototient of n, defined as n − φ(n).
 * Counts integers in [1, n] that are not coprime to n.
 *
 * Only defined for n ≥ 1. Returns BigInt.
 *
 * @example
 * cototient(1)  ➜ 0n
 * cototient(10) ➜ 5n   // φ(10) = 5 → 10 - 5 = 5
 * cototient(12) ➜ 8n   // φ(12) = 4 → 12 - 4 = 8
 *
 * @param {number|bigint} n - Positive integer ≥ 1
 * @returns {bigint} n − φ(n)
 * @throws {RangeError} If n ≤ 0
 */
export function cototient(n) {
  const nBig = BigInt(n);
  if (nBig <= 0n) throw new RangeError("cototient() is only defined for n ≥ 1");
  if (nBig === 1n) return 0n;
  return nBig - totient(nBig);
}