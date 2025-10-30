import { factorial } from "./factorial.js";

/**
 * Compute the number of permutations (nPk).
 * Formula: P(n, k) = n! / (n - k)!
 *
 * @example
 * permutation(5, 2) ➜ 20n
 * permutation(10, 3) ➜ 720n
 *
 * @param {number|bigint} n
 * @param {number|bigint} k
 * @returns {bigint}
 */
export function permutation(n, k) {
  n = BigInt(n);
  k = BigInt(k);

  if (n < 0n || k < 0n) throw new RangeError("n and k must be non-negative");
  if (k > n) return 0n;

  return factorial(n) / factorial(n - k);
}
