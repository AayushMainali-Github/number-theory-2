import { mod } from "./mod.js";

/**
 * Modular subtraction: returns (a - b) mod m with proper normalization.
 *
 * Works with Number or BigInt inputs and handles negative values.
 *
 * @example
 * modSub(7, 9, 10) ➜ 8n
 * modSub(3, -4, 7) ➜ 0n
 *
 * @param {number|bigint} a
 * @param {number|bigint} b
 * @param {number|bigint} m - modulus, must be > 0
 * @returns {bigint}
 */
export function modSub(a, b, m) {
  a = BigInt(a);
  b = BigInt(b);
  m = BigInt(m);
  if (m <= 0n) throw new RangeError("Modulus must be positive");
  return mod(a - b, m);
}