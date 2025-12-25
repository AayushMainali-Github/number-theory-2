import { powMod } from "../arithmetic/powMod.js";

/**
 * Compute the Legendre symbol (a|p).
 * p must be an odd prime.
 *
 * Returns:
 *  1 if a is a quadratic residue modulo p and a ≢ 0 (mod p)
 * -1 if a is a quadratic non-residue modulo p
 *  0 if a ≡ 0 (mod p)
 *
 * @param {number|bigint} a
 * @param {number|bigint} p - Odd prime
 * @returns {number}
 */
export function legendreSymbol(a, p) {
  a = BigInt(a);
  p = BigInt(p);

  if (p <= 2n || p % 2n === 0n) {
    throw new Error("p must be an odd prime");
  }

  const result = powMod(a, (p - 1n) / 2n, p);
  
  if (result === 0n) return 0;
  if (result === 1n) return 1;
  return -1; // result === p - 1n
}
