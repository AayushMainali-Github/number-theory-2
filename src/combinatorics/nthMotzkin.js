/**
 * Compute the n-th Motzkin number.
 * Uses the linear recurrence:
 * M(0) = 1, M(1) = 1, and for n ≥ 2,
 * M(n) = ((2n + 1) M(n-1) + (3n - 3) M(n-2)) / (n + 2).
 * Works with BigInt and non-negative integer inputs.
 *
 * @example
 * nthMotzkin(6) ➜ 51n
 * nthMotzkin(10) ➜ 512n
 *
 * @param {number|bigint} n - Index of Motzkin number (0-based)
 * @returns {bigint} The n-th Motzkin number
 */
export function nthMotzkin(n) {
  n = BigInt(n);
  if (n < 0n) throw new RangeError("Index cannot be negative");
  if (n === 0n) return 1n;
  if (n === 1n) return 1n;

  let prev2 = 1n; // M(0)
  let prev1 = 1n; // M(1)
  for (let i = 2n; i <= n; i++) {
    const numerator = (2n * i + 1n) * prev1 + (3n * i - 3n) * prev2;
    const denom = i + 2n;
    const next = numerator / denom;
    prev2 = prev1;
    prev1 = next;
  }
  return prev1;
}