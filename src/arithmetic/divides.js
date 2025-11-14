import { mod } from "./mod.js";

/**
 * Returns true if a divides b (a | b).
 * Disallows a = 0 to avoid degenerate case; throw RangeError.
 *
 * @param {number|bigint} a - potential divisor (≠ 0)
 * @param {number|bigint} b - integer
 * @returns {boolean}
 */
export function divides(a, b) {
  a = BigInt(a);
  b = BigInt(b);
  if (a === 0n) throw new RangeError("Divisor must be non-zero");
  return mod(b, a) === 0n;
}
