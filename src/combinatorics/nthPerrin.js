/**
 * Compute the n-th Perrin number.
 * Works with BigInt and non-negative integer inputs.
 *
 * Definition:
 * R(0) = 3, R(1) = 0, R(2) = 2, and R(n) = R(n-2) + R(n-3) for n ≥ 3.
 *
 * @example
 * nthPerrin(8) ➜ 10n
 * nthPerrin(10) ➜ 17n
 *
 * @param {number|bigint} n - Index of Perrin number (0-based)
 * @returns {bigint} The n-th Perrin number
 */
export function nthPerrin(n) {
  n = BigInt(n);
  if (n < 0n) throw new RangeError("Index cannot be negative");
  if (n === 0n) return 3n;
  if (n === 1n) return 0n;
  if (n === 2n) return 2n;

  let a = 3n; // R(0)
  let b = 0n; // R(1)
  let c = 2n; // R(2)
  for (let i = 3n; i <= n; i++) {
    const next = a + b; // R(n-3) + R(n-2)
    a = b;
    b = c;
    c = next;
  }
  return c;
}
