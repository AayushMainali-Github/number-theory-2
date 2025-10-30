/**
 * Returns all positive divisors of a given integer n.
 *
 * Works for both Number and BigInt.
 * Always returns results as BigInts.
 * Throws RangeError for n = 0 or |n| < 1.
 *
 * Examples:
 *   divisors(12) ➜ [1n, 2n, 3n, 4n, 6n, 12n]
 *   divisors(28) ➜ [1n, 2n, 4n, 7n, 14n, 28n]
 *   divisors(13) ➜ [1n, 13n]
 *
 * @param {number|bigint} n - The integer to find divisors of
 * @returns {bigint[]} Array of all positive divisors in ascending order
 */
export function divisors(n) {
  n = BigInt(n);
  if (n === 0n) throw new RangeError("Cannot compute divisors of zero");
  if (n < 0n) n = -n;

  const result = new Set();

  for (let i = 1n; i * i <= n; i++) {
    if (n % i === 0n) {
      result.add(i);
      result.add(n / i);
    }
  }

  return Array.from(result).sort((a, b) => (a < b ? -1 : 1));
}
