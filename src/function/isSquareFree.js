import { primeFactorization } from "../prime/primeFactorization.js";

/**
 * Determines whether a positive integer n is square-free.
 *
 * Definition:
 *   n is square-free if no prime factor appears with multiplicity > 1
 *   in its prime factorization (i.e., n is not divisible by any square > 1).
 *
 * Works with both Number and BigInt. Only defined for n ≥ 1.
 *
 * @example
 * isSquareFree(1)   ➜ true
 * isSquareFree(10)  ➜ true   // 10 = 2 × 5
 * isSquareFree(12)  ➜ false  // 12 = 2^2 × 3
 * isSquareFree(121) ➜ false  // 121 = 11^2
 *
 * @param {number|bigint} n - Positive integer
 * @returns {boolean} True if n is square-free, otherwise false
 * @throws {RangeError} If n ≤ 0
 */
export function isSquareFree(n) {
  n = BigInt(n);
  if (n <= 0n) throw new RangeError("isSquareFree() is only defined for n ≥ 1");
  if (n === 1n) return true;

  const factors = primeFactorization(n);
  for (const { power } of factors) {
    if (power > 1) return false;
  }
  return true;
}