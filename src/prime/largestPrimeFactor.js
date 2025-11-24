import { primeFactorization } from "./primeFactorization.js";

/**
 * Returns the largest prime dividing n (or null if n < 2).
 * Works for Number or BigInt inputs; returns BigInt or null.
 *
 * @example
 * largestPrimeFactor(1) ➜ null
 * largestPrimeFactor(77) ➜ 11n
 * largestPrimeFactor(81) ➜ 3n
 *
 * @param {number|bigint} n
 * @returns {bigint|null}
 */
export function largestPrimeFactor(n) {
  n = BigInt(n);
  if (n < 2n) return null;
  const m = n < 0n ? -n : n;
  const factors = primeFactorization(m);
  return factors.length ? factors[factors.length - 1].prime : null;
}