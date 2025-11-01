/**
 * Computes the sum of the digits of an integer n.
 *
 * Works for both Number and BigInt inputs.
 * Returns result as a BigInt.
 *
 * @example
 * sumOfDigits(942) ➜ 15n
 * sumOfDigits(-123) ➜ 6n
 *
 * @param {number|bigint} n - The integer to sum digits of
 * @returns {bigint} Sum of digits
 */
export function sumOfDigits(n) {
  n = BigInt(n);
  n = n < 0n ? -n : n; // handle negative numbers

  let sum = 0n;
  while (n > 0n) {
    sum += n % 10n;
    n /= 10n;
  }
  return sum;
}
