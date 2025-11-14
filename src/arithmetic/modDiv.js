import { mod } from "./mod.js";
import { modInverse } from "./modInverse.js";

/**
 * Modular division: returns (a / b) mod m, i.e. a * b^{-1} mod m.
 * Requires b to be invertible modulo m (gcd(b, m) = 1).
 *
 * Works with Number or BigInt inputs and handles negative values.
 *
 * @example
 * modDiv(6, 2, 11) ➜ 3n   // 2^{-1} mod 11 = 6, 6*6 mod 11 = 3
 * modDiv(5, -2, 13) ➜ 4n  // (-2) ≡ 11; 11^{-1} ≡ 6; 5*6 ≡ 4
 *
 * @param {number|bigint} a
 * @param {number|bigint} b
 * @param {number|bigint} m - modulus, must be > 0
 * @returns {bigint}
 */
export function modDiv(a, b, m) {
  a = BigInt(a);
  b = BigInt(b);
  m = BigInt(m);
  if (m <= 0n) throw new RangeError("Modulus must be positive");
  const inv = modInverse(b, m);
  return mod(a * inv, m);
}