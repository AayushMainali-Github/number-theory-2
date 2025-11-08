/**
 * Computes ω(n), the number of distinct prime factors of n.
 *
 * This "Small" variant uses straightforward trial division (2, then odd i)
 * and is suitable for small to moderate n. It is BigInt-safe.
 *
 * Conventions:
 * - Handles negative inputs by using |n|.
 * - ω(0) is returned as 0 (undefined mathematically, but consistent with
 *   other functions that handle 0 gracefully in this library).
 * - ω(1) = 0.
 *
 * @example
 * omegaSmall(1)  ➜ 0n
 * omegaSmall(12) ➜ 2n   // 12 = 2^2 · 3
 * omegaSmall(60) ➜ 3n   // 60 = 2^2 · 3 · 5
 *
 * @param {number|bigint} n - Integer input
 * @returns {bigint} Number of distinct prime factors of n
 */
export function omegaSmall(n) {
  n = BigInt(n);
  if (n < 0n) n = -n;

  if (n === 0n) return 0n;
  if (n === 1n) return 0n;

  let count = 0n;

  // Factor 2
  if (n % 2n === 0n) {
    count++;
    while (n % 2n === 0n) n /= 2n;
  }

  // Factor odd primes
  let i = 3n;
  while (i * i <= n) {
    if (n % i === 0n) {
      count++;
      while (n % i === 0n) n /= i;
    }
    i += 2n;
  }

  // Remaining prime
  if (n > 1n) count++;

  return count;
}
