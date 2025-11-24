import { primeFactorization } from "./primeFactorization.js";

/**
 * Detects if n = p^k for prime p and k ≥ 2.
 * Returns { p: bigint, k: number } | null.
 * Works for Number or BigInt inputs. Negative inputs are treated by |n|.
 *
 * @example
 * isPrimePower(27) ➜ { p: 3n, k: 3 }
 * isPrimePower(81) ➜ { p: 3n, k: 4 }
 * isPrimePower(12) ➜ null
 *
 * @param {number|bigint} n
 * @returns {{ p: bigint, k: number } | null}
 */
export function isPrimePower(n) {
  n = BigInt(n);
  if (n < 0n) n = -n;
  if (n < 2n) return null;

  const factors = primeFactorization(n);
  if (factors.length !== 1) return null;
  const f = factors[0];
  if (f.power >= 2) return { p: f.prime, k: f.power };
  return null;
}