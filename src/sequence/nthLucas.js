/**
 * Compute the n-th Lucas number.
 * Works with BigInt and non-negative integer inputs.
 *
 * Lucas sequence:
 * L(0) = 2
 * L(1) = 1
 * L(n) = L(n-1) + L(n-2)
 *
 * @example
 * nthLucas(10) ➜ 123n
 *
 * @param {number|bigint} n - Index of Lucas number (0-based)
 * @returns {bigint} The n-th Lucas number
 */
export function nthLucas(n) {
  n = BigInt(n);
  if (n < 0n) throw new RangeError("Index cannot be negative");
  if (n === 0n) return 2n;
  if (n === 1n) return 1n;

  let a = 2n;
  let b = 1n;
  for (let i = 2n; i <= n; i++) {
    [a, b] = [b, a + b];
  }

  return b;
}
