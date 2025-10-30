import { factorial } from "./factorial.js";

/**
 * Compute the binomial coefficient "n choose k".
 * Formula: C(n, k) = n! / (k! * (n - k)!)
 *
 * @example
 * combination(5, 2) ➜ 10n
 * combination(10, 3) ➜ 120n
 *
 * @param {number|bigint} n
 * @param {number|bigint} k
 * @returns {bigint}
 */
export function combination(n, k) {
  n = BigInt(n);
  k = BigInt(k);

  if (n < 0n || k < 0n) throw new RangeError("n and k must be non-negative");
  if (k > n) return 0n;

  return factorial(n) / (factorial(k) * factorial(n - k));
}
