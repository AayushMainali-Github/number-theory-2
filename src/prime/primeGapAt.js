import { prevPrime } from "./prevPrime.js";
import { nextPrime } from "./nextPrime.js";

/**
 * Returns { p, next, gap } at position n where:
 *  - p is the largest prime ≤ n
 *  - next is the prime immediately after p
 *  - gap = next - p
 *
 * Works for Number or BigInt inputs; returns BigInt fields.
 * Throws RangeError if n < 2.
 *
 * @example
 * primeGapAt(100) ➜ { p: 97n, next: 101n, gap: 4n }
 * primeGapAt(2) ➜ { p: 2n, next: 3n, gap: 1n }
 *
 * @param {number|bigint} n
 * @returns {{p: bigint, next: bigint, gap: bigint}}
 */
export function primeGapAt(n) {
  n = BigInt(n);
  if (n < 2n) throw new RangeError("n must be ≥ 2");

  const p = prevPrime(n);
  // prevPrime(n) is guaranteed non-null for n ≥ 2
  const next = nextPrime(p);
  const gap = next - p;
  return { p, next, gap };
}
