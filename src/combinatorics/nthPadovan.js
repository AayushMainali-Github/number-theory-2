/**
 * Compute the n-th Padovan number.
 * Works with BigInt and non-negative integer inputs.
 *
 * Definition:
 * P(0) = 1, P(1) = 1, P(2) = 1, and P(n) = P(n-2) + P(n-3) for n ≥ 3.
 *
 * @example
 * nthPadovan(5) ➜ 3n
 * nthPadovan(8) ➜ 7n
 *
 * @param {number|bigint} n - Index of Padovan number (0-based)
 * @returns {bigint} The n-th Padovan number
 */
export function nthPadovan(n) {
  n = BigInt(n);
  if (n < 0n) throw new RangeError("Index cannot be negative");
  if (n === 0n) return 1n;
  if (n === 1n) return 1n;
  if (n === 2n) return 1n;

  let a = 1n; // P(0)
  let b = 1n; // P(1)
  let c = 1n; // P(2)
  for (let i = 3n; i <= n; i++) {
    const next = a + b; // P(n-3) + P(n-2)
    a = b;
    b = c;
    c = next;
  }
  return c;
}