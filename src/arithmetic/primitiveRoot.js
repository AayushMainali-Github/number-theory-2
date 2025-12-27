import { gcd } from "./gcd.js";
import { powMod } from "./powMod.js";
import { totient } from "../function/totient.js";
import { primeFactorization } from "../prime/primeFactorization.js";

/**
 * Find the smallest primitive root modulo n.
 * Exist only if n is 2, 4, p^k, or 2*p^k for odd prime p.
 *
 * @param {number|bigint} n
 * @returns {bigint|null} Smallest primitive root, or null if it doesn't exist
 */
export function primitiveRoot(n) {
  n = BigInt(n);

  if (n === 2n) return 1n;
  if (n === 4n) return 3n;

  // Primitive roots exist only for 2, 4, p^k, 2*p^k
  // For simplicity, we search for the smallest positive integer g
  // that satisfies the primitive root condition.
  // Note: This logic is generally used for prime p, but works for n that have primitive roots.

  const phi = totient(n);
  const factors = primeFactorization(phi);

  for (let g = 2n; g < n; g++) {
    if (gcd(g, n) !== 1n) continue;

    let isRoot = true;
    for (const f of factors) {
      if (powMod(g, phi / f.prime, n) === 1n) {
        isRoot = false;
        break;
      }
    }

    if (isRoot) return g;
  }

  return null;
}
