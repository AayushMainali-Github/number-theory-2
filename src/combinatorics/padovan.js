/**
 * Generate Padovan numbers up to the n-th term (0-indexed).
 * Uses iterative approach. Works with Number or BigInt.
 *
 * Definition:
 * P(0) = 1, P(1) = 1, P(2) = 1, and P(n) = P(n-2) + P(n-3) for n ≥ 3.
 *
 * @example
 * padovan(0) ➜ [1n]
 * padovan(5) ➜ [1n, 1n, 1n, 2n, 2n, 3n]
 *
 * @param {number|bigint} n - Index of the last Padovan number to generate (must be ≥ 0)
 * @returns {bigint[]} Array of Padovan numbers up to index n
 */
export function padovan(n) {
  n = BigInt(n);
  if (n < 0n) throw new RangeError("Padovan index must be non-negative");

  if (n === 0n) return [1n];
  if (n === 1n) return [1n, 1n];
  if (n === 2n) return [1n, 1n, 1n];

  const result = [1n, 1n, 1n];
  for (let i = 3n; i <= n; i++) {
    const a = result[Number(i - 2n)];
    const b = result[Number(i - 3n)];
    result.push(a + b);
  }
  return result;
}
