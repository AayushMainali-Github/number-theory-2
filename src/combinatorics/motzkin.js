/**
 * Generate Motzkin numbers up to the n-th term (0-indexed).
 * Uses the linear recurrence:
 * M(0) = 1, M(1) = 1, and for n ≥ 2,
 * M(n) = ((2n + 1) M(n-1) + (3n - 3) M(n-2)) / (n + 2).
 * Works with Number or BigInt.
 *
 * @example
 * motzkin(0) ➜ [1n]
 * motzkin(6) ➜ [1n, 1n, 2n, 4n, 9n, 21n, 51n]
 *
 * @param {number|bigint} n - Index of the last Motzkin number to generate (must be ≥ 0)
 * @returns {bigint[]} Array of Motzkin numbers up to index n
 */
export function motzkin(n) {
  n = BigInt(n);
  if (n < 0n) throw new RangeError("Motzkin index must be non-negative");

  if (n === 0n) return [1n];
  if (n === 1n) return [1n, 1n];

  const result = [1n, 1n];
  for (let i = 2n; i <= n; i++) {
    const m1 = result[Number(i - 1n)];
    const m2 = result[Number(i - 2n)];
    const numerator = (2n * i + 1n) * m1 + (3n * i - 3n) * m2;
    const denom = i + 2n;
    result.push(numerator / denom);
  }
  return result;
}
