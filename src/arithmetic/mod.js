/**
 * Compute the true mathematical modulus of two numbers.
 * Works with both positive and negative divisors, always returning a result
 * with the same sign as the divisor (unlike JS %).
 *
 * @example
 * mod(10, 3) ➜ 1n
 * mod(-10, 3) ➜ 2n
 * mod(10, -3) ➜ -2n
 * mod(-10, -3) ➜ -1n
 *
 * @param {number|bigint} a - Dividend
 * @param {number|bigint} n - Divisor (modulus)
 * @returns {bigint} The remainder with the same sign as n
 */
export function mod(a, n) {
  a = BigInt(a);
  n = BigInt(n);

  if (n === 0n) {
    throw new RangeError("Modulo by zero is undefined.");
  }

  let result = a % n;

  // Adjust based on the sign of n
  if (result !== 0n) {
    if ((n > 0n && result < 0n) || (n < 0n && result > 0n)) {
      result += n;
    }
  }

  return result;
}
