/**
 * Determine if a number (Number or BigInt) is prime.
 * Uses simple trial division up to √n for exactness.
 * Handles negatives, zero, one, and large BigInts safely.
 *
 * @example
 * isPrime(7) ➜ true
 * isPrime(15) ➜ false
 * isPrime(9999999967n) ➜ true
 *
 * @param {number|bigint} n
 * @returns {boolean}
 */
export function isPrime(n) {
  n = BigInt(n);

  // Handle negatives, 0, 1
  if (n < 2n) return false;
  if (n === 2n || n === 3n) return true;

  // Exclude even and divisible by 3
  if (n % 2n === 0n || n % 3n === 0n) return false;

  // Trial division using 6k ± 1 rule
  const limit = bigintSqrt(n);
  for (let i = 5n; i <= limit; i += 6n) {
    if (n % i === 0n || n % (i + 2n) === 0n) {
      return false;
    }
  }

  return true;
}

/**
 * Compute the integer square root of a BigInt using Newton's method.
 * Returns the floor value of sqrt(n).
 *
 * @param {bigint} n
 * @returns {bigint}
 */
function bigintSqrt(n) {
  if (n < 0n) throw new RangeError("Cannot compute sqrt of negative number");
  if (n < 2n) return n;

  let x0 = n;
  let x1 = (n >> 1n) + 1n;

  while (x1 < x0) {
    x0 = x1;
    x1 = (x1 + n / x1) >> 1n;
  }

  return x0;
}
