/**
 * Generate Perrin numbers up to the n-th term (0-indexed).
 * Uses iterative approach. Works with Number or BigInt.
 *
 * Definition:
 * R(0) = 3, R(1) = 0, R(2) = 2, and R(n) = R(n-2) + R(n-3) for n ≥ 3.
 *
 * @example
 * perrin(0) ➜ [3n]
 * perrin(6) ➜ [3n, 0n, 2n, 3n, 2n, 5n, 5n]
 *
 * @param {number|bigint} n - Index of the last Perrin number to generate (must be ≥ 0)
 * @returns {bigint[]} Array of Perrin numbers up to index n
 */
export function perrin(n) {
  n = BigInt(n);
  if (n < 0n) throw new RangeError("Perrin index must be non-negative");

  if (n === 0n) return [3n];
  if (n === 1n) return [3n, 0n];
  if (n === 2n) return [3n, 0n, 2n];

  const result = [3n, 0n, 2n];
  for (let i = 3n; i <= n; i++) {
    const a = result[Number(i - 2n)];
    const b = result[Number(i - 3n)];
    result.push(a + b);
  }
  return result;
}