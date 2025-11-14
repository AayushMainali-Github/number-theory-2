import { mod } from "./mod.js";

/**
 * Fast modular exponentiation via binary exponentiation.
 * Returns (base^exp) mod mod.
 *
 * @example
 * powMod(2, 10, 1000) ➜ 24n
 * powMod(5n, 0n, 13n) ➜ 1n
 * powMod(-2, 3, 5) ➜ 2n  // negative base normalization
 *
 * @param {number|bigint} base
 * @param {number|bigint} exp  - must be ≥ 0
 * @param {number|bigint} m    - modulus, must be > 0
 * @returns {bigint}
 */
export function powMod(base, exp, m) {
  base = BigInt(base);
  exp = BigInt(exp);
  m = BigInt(m);

  if (m <= 0n) throw new RangeError("Modulus must be positive");
  if (exp < 0n) throw new RangeError("Exponent must be non-negative");

  // Normalize base into [0, m)
  base = mod(base, m);

  let result = 1n;
  let b = base;
  let e = exp;

  while (e > 0n) {
    if (e & 1n) {
      result = mod(result * b, m);
    }
    b = mod(b * b, m);
    e >>= 1n;
  }

  return result;
}
