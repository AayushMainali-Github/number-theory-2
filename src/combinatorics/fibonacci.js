/**
 * Generate Fibonacci numbers up to the n-th term (0-indexed).
 * Uses iterative approach for efficiency. Works with Number or BigInt.
 *
 * @example
 * fibonacci(0) ➜ [0n]
 * fibonacci(5) ➜ [0n, 1n, 1n, 2n, 3n, 5n]
 *
 * @param {number|bigint} n - Index of the last Fibonacci number to generate (must be ≥ 0)
 * @returns {bigint[]} Array of Fibonacci numbers up to index n
 */
export function fibonacci(n) {
  // Convert and validate input
  n = BigInt(n);
  if (n < 0n) throw new RangeError("Fibonacci index must be non-negative");

  // Handle small cases
  if (n === 0n) return [0n];
  if (n === 1n) return [0n, 1n];

  const result = [0n, 1n];
  for (let i = 2n; i <= n; i++) {
    const next = result[Number(i - 1n)] + result[Number(i - 2n)];
    result.push(next);
  }
  return result;
}
