/**
 * Compute factorial of n (n!).
 *
 * Supports BigInt for large n.
 * Throws RangeError for negative numbers.
 *
 * @example
 * factorial(5) ➜ 120n
 * factorial(0) ➜ 1n
 *
 * @param {number|bigint} n
 * @returns {bigint}
 */
export function factorial(n) {
  n = BigInt(n);
  if (n < 0n) throw new RangeError("Factorial is not defined for negative numbers");

  let result = 1n;
  for (let i = 2n; i <= n; i++) {
    result *= i;
  }
  return result;
}
