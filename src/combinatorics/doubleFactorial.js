/**
 * Compute double factorial of n (n!!).
 * Supports BigInt for large n.
 *
 * Definitions:
 *  - 0!! = 1
 *  - 1!! = 1
 *  - n!! = n * (n-2) * (n-4) * ... down to 2 or 1
 *
 * @example
 * doubleFactorial(7) ➜ 105n
 * doubleFactorial(10) ➜ 3840n
 *
 * @param {number|bigint} n
 * @returns {bigint}
 */
export function doubleFactorial(n) {
  n = BigInt(n);
  if (n < 0n)
    throw new RangeError(
      "Double factorial is not defined for negative numbers",
    );
  if (n === 0n || n === 1n) return 1n;

  let result = 1n;
  for (let i = n; i > 1n; i -= 2n) {
    result *= i;
  }
  return result;
}
