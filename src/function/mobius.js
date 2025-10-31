import { primeFactorization } from "../prime/primeFactorization.js";

/**
 * Computes the Möbius function μ(n).
 *
 * Definition:
 *   μ(n) =
 *     1      if n = 1
 *     0      if n has a squared prime factor
 *     (-1)^k if n is the product of k distinct primes
 *
 * Only defined for n ≥ 1.
 * Throws a RangeError for n ≤ 0.
 *
 * @example
 * mobius(1)  ➜  1
 * mobius(2)  ➜ -1
 * mobius(6)  ➜  1
 * mobius(12) ➜  0   (since 12 = 2² * 3)
 *
 * @param {number|bigint} n - The integer for which μ(n) is computed
 * @returns {bigint} The Möbius function value (−1n, 0n, or 1n)
 * @throws {RangeError} If n ≤ 0
 */
export function mobius(n) {
  n = BigInt(n);

  if (n <= 0n) {
    throw new RangeError("mobius() is only defined for n ≥ 1");
  }

  if (n === 1n) return 1n;

  const factors = primeFactorization(n);

  // μ(n) = 0 if n has a squared prime factor
  for (const { power } of factors) {
    if (power > 1) return 0n;
  }

  // μ(n) = (-1)^k, where k = number of distinct primes
  const k = BigInt(factors.length);
  return k % 2n === 0n ? 1n : -1n;
}
