import { primeFactorization } from "../prime/primeFactorization.js";

/**
 * Computes the Dedekind psi function ψ(n).
 *
 * Definition:
 *   ψ(n) = n × Π_{p | n} (1 + 1/p)
 * where the product is over all distinct prime divisors p of n.
 *
 * Equivalent prime-power formula:
 *   ψ(p^a) = (p + 1) × p^{a - 1}
 *
 * Works with both Number and BigInt. Only defined for n ≥ 1. Returns BigInt.
 *
 * @example
 * dedekindPsi(1)  ➜ 1n
 * dedekindPsi(2)  ➜ 3n
 * dedekindPsi(3)  ➜ 4n
 * dedekindPsi(4)  ➜ 6n
 * dedekindPsi(6)  ➜ 12n
 * dedekindPsi(30) ➜ 72n
 *
 * @param {number|bigint} n - Positive integer ≥ 1
 * @returns {bigint} ψ(n)
 * @throws {RangeError} If n ≤ 0
 */
export function dedekindPsi(n) {
  let nBig = BigInt(n);
  if (nBig <= 0n)
    throw new RangeError("dedekindPsi() is only defined for n ≥ 1");
  if (nBig === 1n) return 1n;

  const factors = primeFactorization(nBig);
  let result = nBig;

  for (const { prime } of factors) {
    const p = BigInt(prime);
    result = (result / p) * (p + 1n);
  }

  return result;
}
