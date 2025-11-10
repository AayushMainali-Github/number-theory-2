/**
 * Compute the n-th Tribonacci number.
 * Works with BigInt and non-negative integer inputs.
 *
 * Definition used:
 * T(0) = 0, T(1) = 0, T(2) = 1, and T(n) = T(n-1) + T(n-2) + T(n-3) for n ≥ 3.
 *
 * @example
 * nthTribonacci(6) ➜ 7n
 * nthTribonacci(10) ➜ 81n
 *
 * @param {number|bigint} n - Index of Tribonacci number (0-based)
 * @returns {bigint} The n-th Tribonacci number
 */
export function nthTribonacci(n) {
  n = BigInt(n);
  if (n < 0n) throw new RangeError("Index cannot be negative");
  if (n === 0n) return 0n;
  if (n === 1n) return 0n;
  if (n === 2n) return 1n;

  let a = 0n; // T(0)
  let b = 0n; // T(1)
  let c = 1n; // T(2)
  for (let i = 3n; i <= n; i++) {
    const next = a + b + c;
    a = b;
    b = c;
    c = next;
  }
  return c;
}
