import { mod } from "./mod.js";

/**
 * Returns the least absolute residue of a modulo m, i.e.,
 * a representative in (-m/2, m/2] with minimal absolute value.
 * Tie at m even and r = m/2 resolves to +m/2.
 *
 * @example
 * leastAbsoluteResidue(9, 10)  ➜ -1n
 * leastAbsoluteResidue(-1, 10) ➜ -1n
 * leastAbsoluteResidue(5, 10)  ➜ 5n
 * leastAbsoluteResidue(5, 7)   ➜ -2n
 *
 * @param {number|bigint} a
 * @param {number|bigint} m - modulus, must be > 0
 * @returns {bigint}
 */
export function leastAbsoluteResidue(a, m) {
  a = BigInt(a);
  m = BigInt(m);
  if (m <= 0n) throw new RangeError("Modulus must be positive");

  const r = mod(a, m); // 0 ≤ r < m
  const half = m / 2n;

  if (r > half) return r - m; // map to negative side for smaller |value|
  // If r == half (m even), tie resolves to +half by returning r
  return r;
}
