/**
 * Generate Tribonacci numbers up to the n-th term (0-indexed).
 * Uses iterative approach. Works with Number or BigInt.
 *
 * Definition used:
 * T(0) = 0, T(1) = 0, T(2) = 1, and T(n) = T(n-1) + T(n-2) + T(n-3) for n ≥ 3.
 *
 * @example
 * tribonacci(0) ➜ [0n]
 * tribonacci(1) ➜ [0n, 0n]
 * tribonacci(2) ➜ [0n, 0n, 1n]
 * tribonacci(6) ➜ [0n, 0n, 1n, 1n, 2n, 4n, 7n]
 *
 * @param {number|bigint} n - Index of the last Tribonacci number to generate (must be ≥ 0)
 * @returns {bigint[]} Array of Tribonacci numbers up to index n
 */
export function tribonacci(n) {
  n = BigInt(n);
  if (n < 0n) throw new RangeError("Tribonacci index must be non-negative");

  if (n === 0n) return [0n];
  if (n === 1n) return [0n, 0n];
  if (n === 2n) return [0n, 0n, 1n];

  const result = [0n, 0n, 1n];
  for (let i = 3n; i <= n; i++) {
    const a = result[Number(i - 1n)];
    const b = result[Number(i - 2n)];
    const c = result[Number(i - 3n)];
    result.push(a + b + c);
  }
  return result;
}