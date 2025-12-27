import { powMod } from "./powMod.js";
import { legendreSymbol } from "../prime/legendreSymbol.js";

/**
 * Compute the modular square root of a modulo p using the Tonelli-Shanks algorithm.
 * Solves x^2 ≡ a (mod p). p must be an odd prime.
 *
 * @example
 * modSqrt(5, 11) ➜ 4n (since 4^2 = 16 ≡ 5 (mod 11))
 *
 * @param {number|bigint} a
 * @param {number|bigint} p - Odd prime
 * @returns {bigint|null} Modular square root x, or null if no solution exists
 */
export function modSqrt(a, p) {
  a = BigInt(a);
  p = BigInt(p);

  if (p === 2n) return a % 2n;
  if (legendreSymbol(a, p) === -1) return null; // No solution

  if (p % 4n === 3n) {
    return powMod(a, (p + 1n) / 4n, p);
  }

  // Tonelli-Shanks
  let s = 0n;
  let q = p - 1n;
  while (q % 2n === 0n) {
    q /= 2n;
    s++;
  }

  // Find a non-residue z
  let z = 2n;
  while (legendreSymbol(z, p) !== -1) {
    z++;
  }

  let m = s;
  let c = powMod(z, q, p);
  let t = powMod(a, q, p);
  let r = powMod(a, (q + 1n) / 2n, p);

  while (t !== 0n && t !== 1n) {
    let i = 0n;
    let temp = t;
    while (temp !== 1n && i < m) {
      temp = (temp * temp) % p;
      i++;
    }

    if (i === m) return null; // Should not happen if legendreSymbol was 1

    let b = powMod(c, 1n << (m - i - 1n), p);
    m = i;
    c = (b * b) % p;
    t = (t * c) % p;
    r = (r * b) % p;
  }

  return r;
}
