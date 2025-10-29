/**
 * Compute the Greatest Common Divisor (GCD) of two numbers using Euclid's algorithm.
 * Works for both Number and BigInt inputs.
 *
 * @example
 * gcd(84, 18) ➜ 6n
 * gcd(20n, 30n) ➜ 10n
 *
 * @param {number|bigint} a - First number
 * @param {number|bigint} b - Second number
 * @returns {bigint} The greatest common divisor of a and b
 */
export function gcd(a, b) {
  // Convert both to BigInt
  a = BigInt(a);
  b = BigInt(b);

  // Ensure non-negative
  if (a < 0n) a = -a;
  if (b < 0n) b = -b;

  // Euclidean algorithm
  while (b !== 0n) {
    [a, b] = [b, a % b];
  }

  return a;
}
