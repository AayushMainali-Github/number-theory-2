import { primeFactorization } from "./primeFactorization.js";

/**
 * Returns the smallest prime dividing n (or null if n < 2).
 * Works for Number or BigInt inputs; returns BigInt or null.
 *
 * @example
 * smallestPrimeFactor(1) ➜ null
 * smallestPrimeFactor(2) ➜ 2n
 * smallestPrimeFactor(45) ➜ 3n
 *
 * @param {number|bigint} n
 * @returns {bigint|null}
 */
export function smallestPrimeFactor(n) {
  n = BigInt(n);
  if (n < 2n) return null;
  const m = n < 0n ? -n : n;
  const factors = primeFactorization(m);
  return factors.length ? factors[0].prime : null;
}