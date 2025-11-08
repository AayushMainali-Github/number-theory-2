import { primeFactorization } from "../prime/primeFactorization.js";

/**
 * Computes Jordan's totient function J_k(n).
 *
 * Definition:
 *   J_k(n) = n^k × Π_{p | n} (1 - 1/p^k)
 * where the product is over all distinct prime divisors p of n.
 *
 * Works with both Number and BigInt. Only defined for n ≥ 1 and k ≥ 1.
 * Returns a BigInt.
 *
 * @example
 * jordanTotient(12, 2) ➜ 96n
 * jordanTotient(8, 2)  ➜ 48n   // 8^2 × (1 - 1/2^2)
 * jordanTotient(9, 3)  ➜ 702n  // 9^3 × (1 - 1/3^3)
 *
 * @param {number|bigint} n - Positive integer ≥ 1
 * @param {number|bigint} k - Positive integer ≥ 1 (order)
 * @returns {bigint} J_k(n)
 * @throws {RangeError} If n ≤ 0 or k ≤ 0
 */
export function jordanTotient(n, k) {
  let nBig = BigInt(n);
  let kBig = BigInt(k);

  if (nBig <= 0n) throw new RangeError("jordanTotient() requires n ≥ 1");
  if (kBig <= 0n) throw new RangeError("jordanTotient() requires k ≥ 1");
  if (nBig === 1n) return 1n; // empty product convention

  const factors = primeFactorization(nBig);
  let result = nBig ** kBig;

  for (const { prime } of factors) {
    const p = BigInt(prime);
    const pPowK = p ** kBig;
    // Multiply by (1 - 1/p^k) via exact integer arithmetic
    result = (result / pPowK) * (pPowK - 1n);
  }

  return result;
}
