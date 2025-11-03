/**
 * Compute the n-th Fibonacci number.
 * Works with BigInt and non-negative integer inputs.
 *
 * Fibonacci sequence:
 * F(0) = 0
 * F(1) = 1
 * F(n) = F(n-1) + F(n-2)
 *
 * @example
 * nthFibonacci(10) ➜ 55n
 *
 * @param {number|bigint} n - Index of Fibonacci number (0-based)
 * @returns {bigint} The n-th Fibonacci number
 */
export function nthFibonacci(n) {
  n = BigInt(n);
  if (n < 0n) throw new RangeError("Index cannot be negative");
  if (n === 0n) return 0n;
  if (n === 1n) return 1n;

  let a = 0n;
  let b = 1n;
  for (let i = 2n; i <= n; i++) {
    [a, b] = [b, a + b];
  }

  return b;
}
