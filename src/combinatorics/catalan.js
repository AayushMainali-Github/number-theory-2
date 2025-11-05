/**
 * Compute the n-th Catalan number.
 *
 * Catalan numbers count many combinatorial objects (Dyck paths, valid parentheses, etc.).
 * Formula: C_n = binomial(2n, n) / (n + 1)
 *
 * Works with Number and BigInt input; returns BigInt. Throws for negative n.
 *
 * @example
 * catalan(0) ➜ 1n
 * catalan(5) ➜ 42n
 * catalan(10) ➜ 16796n
 *
 * @param {number|bigint} n - Non-negative integer index (n ≥ 0)
 * @returns {bigint} The n-th Catalan number
 */
import { combination } from "./combination.js";

export function catalan(n) {
  n = BigInt(n);
  if (n < 0n) throw new RangeError("catalan() requires n ≥ 0");

  // C_0 = 1
  if (n === 0n) return 1n;

  // Use BigInt-safe binomial formula: C_n = (2n choose n) / (n+1)
  const twoN = n * 2n;
  const binom = combination(twoN, n);
  return binom / (n + 1n);
}