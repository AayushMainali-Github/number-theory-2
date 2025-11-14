import { mod } from "./mod.js";

/**
 * Modular multiplication: returns (a * b) mod m with proper normalization.
 *
 * Works with Number or BigInt inputs and handles negative values.
 *
 * @example
 * modMul(7, 9, 10) ➜ 3n
 * modMul(-3, 4, 7) ➜ 2n
 *
 * @param {number|bigint} a
 * @param {number|bigint} b
 * @param {number|bigint} m - modulus, must be > 0
 * @returns {bigint}
 */
export function modMul(a, b, m) {
  a = BigInt(a);
  b = BigInt(b);
  m = BigInt(m);
  if (m <= 0n) throw new RangeError("Modulus must be positive");
  return mod(a * b, m);
}