import { primeFactorization } from "../prime/primeFactorization.js";

/**
 * Computes the sum of unitary divisors of n (σ*(n)).
 *
 * Formula:
 *   If n = ∏ p_i^{a_i}, then σ*(n) = ∏ (1 + p_i^{a_i}).
 *
 * Only defined for n ≥ 1. Returns BigInt.
 *
 * @example
 * sigmaUnitary(1)  ➜ 1n
 * sigmaUnitary(12) ➜ 20n   // (1 + 2^2)(1 + 3^1) = 5·4
 * sigmaUnitary(30) ➜ 72n   // (1 + 2)(1 + 3)(1 + 5) = 3·4·6
 *
 * @param {number|bigint} n - Positive integer ≥ 1
 * @returns {bigint} Sum of unitary divisors of n
 * @throws {RangeError} If n ≤ 0
 */
export function sigmaUnitary(n) {
  n = BigInt(n);
  if (n <= 0n) throw new RangeError("sigmaUnitary() is only defined for n ≥ 1");
  if (n === 1n) return 1n;

  const factors = primeFactorization(n);
  let result = 1n;
  for (const { prime, power } of factors) {
    const p = BigInt(prime);
    const a = BigInt(power);
    result *= 1n + p ** a;
  }
  return result;
}