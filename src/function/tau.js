import { primeFactorization } from "../prime/primeFactorization.js";

/**
 * Computes the number of positive divisors of n (τ(n)).
 *
 * Mathematical Definition:
 *   If n = p₁^a₁ × p₂^a₂ × … × pₖ^aₖ,
 *   then τ(n) = (a₁ + 1)(a₂ + 1)…(aₖ + 1)
 *
 * Works for both Number and BigInt.
 * Only defined for n ≥ 1.
 *
 * @example
 * tau(1)  ➜ 1n
 * tau(6)  ➜ 4n     (1, 2, 3, 6)
 * tau(12) ➜ 6n     (1, 2, 3, 4, 6, 12)
 * tau(36) ➜ 9n     (1, 2, 3, 4, 6, 9, 12, 18, 36)
 *
 * @param {number|bigint} n - Integer ≥ 1
 * @returns {bigint} Number of positive divisors
 * @throws {RangeError} If n ≤ 0
 */
export function tau(n) {
  n = BigInt(n);
  if (n <= 0n) throw new RangeError("tau() is only defined for n ≥ 1");
  if (n === 1n) return 1n;

  const factors = primeFactorization(n);
  let result = 1n;

  for (const { power } of factors) {
    result *= BigInt(power + 1);
  }

  return result;
}
