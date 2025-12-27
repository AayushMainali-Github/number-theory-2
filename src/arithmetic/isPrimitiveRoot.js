import { gcd } from "./gcd.js";
import { powMod } from "./powMod.js";
import { totient } from "../function/totient.js";
import { primeFactorization } from "../prime/primeFactorization.js";

/**
 * Determine if g is a primitive root modulo n.
 *
 * @param {number|bigint} g
 * @param {number|bigint} n
 * @returns {boolean}
 */
export function isPrimitiveRoot(g, n) {
  g = BigInt(g);
  n = BigInt(n);

  if (n <= 1n) return false;
  if (gcd(g, n) !== 1n) return false;

  const phi = totient(n);
  const factors = primeFactorization(phi);

  for (const f of factors) {
    if (powMod(g, phi / f.prime, n) === 1n) {
      return false;
    }
  }

  return true;
}
