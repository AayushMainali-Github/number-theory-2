/**
 * Computes the number of steps to reach 1 under the Collatz process.
 *
 * Process:
 *   For n > 1,
 *     - If n is even: n ← n / 2
 *     - If n is odd:  n ← 3n + 1
 * Count steps until n becomes 1.
 *
 * Works with Number and BigInt. Only defined for n ≥ 1.
 * Returns BigInt step count.
 *
 * @example
 * collatzSteps(1)  ➜ 0n
 * collatzSteps(6)  ➜ 8n
 * collatzSteps(19) ➜ 20n
 *
 * @param {number|bigint} n - Positive integer ≥ 1
 * @returns {bigint} Number of steps to reach 1
 * @throws {RangeError} If n ≤ 0
 */
export function collatzSteps(n) {
  let x = BigInt(n);
  if (x <= 0n) throw new RangeError("collatzSteps() is only defined for n ≥ 1");
  if (x === 1n) return 0n;

  let steps = 0n;
  while (x !== 1n) {
    if (x % 2n === 0n) x /= 2n;
    else x = 3n * x + 1n;
    steps++;
  }
  return steps;
}