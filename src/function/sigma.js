import { primeFactorization } from "../prime/primeFactorization.js";

/**
 * Computes the sum of all positive divisors of n — the classical sigma function σ(n).
 *
 * Definition:
 *   If n = p₁^a₁ × p₂^a₂ × … × pₖ^aₖ,
 *   then σ(n) = Π [ (pᵢ^(aᵢ + 1) - 1) / (pᵢ - 1) ]
 *
 * Works for both Number and BigInt.
 * Only defined for n ≥ 1.
 *
 * @example
 * sigma(1)  ➜ 1n
 * sigma(6)  ➜ 12n   (1 + 2 + 3 + 6)
 * sigma(12) ➜ 28n   (1 + 2 + 3 + 4 + 6 + 12)
 * sigma(100) ➜ 217n (1 + 2 + 4 + 5 + 10 + 20 + 25 + 50 + 100)
 *
 * @param {number|bigint} n - Positive integer
 * @returns {bigint} Sum of all positive divisors of n
 * @throws {RangeError} If n ≤ 0
 */
export function sigma(n) {
  n = BigInt(n);
  if (n <= 0n) throw new RangeError("sigma() is only defined for n ≥ 1");
  if (n === 1n) return 1n;

  const factors = primeFactorization(n);
  let result = 1n;

  for (const { prime, power } of factors) {
    const p = BigInt(prime);
    const a = BigInt(power);
    const term = (p ** (a + 1n) - 1n) / (p - 1n);
    result *= term;
  }

  return result;
}
