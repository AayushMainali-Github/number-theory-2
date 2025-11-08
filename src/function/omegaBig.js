/**
 * Computes Ω(n), the number of prime factors of n counted with multiplicity.
 *
 * This "Big" omega counts repeated prime factors (e.g., Ω(12) = 3 since 12 = 2²·3).
 * Uses straightforward trial division and is BigInt-safe.
 *
 * Conventions:
 * - Handles negative inputs by using |n|.
 * - Ω(0) is returned as 0 (undefined mathematically, but consistent with
 *   library style for graceful handling).
 * - Ω(1) = 0.
 *
 * @example
 * omegaBig(1)   ➜ 0n
 * omegaBig(12)  ➜ 3n   // 12 = 2^2 · 3
 * omegaBig(60)  ➜ 4n   // 60 = 2^2 · 3 · 5
 * omegaBig(2^5) ➜ 5n
 *
 * @param {number|bigint} n - Integer input
 * @returns {bigint} Number of prime factors of n (with multiplicity)
 */
export function omegaBig(n) {
  n = BigInt(n);
  if (n < 0n) n = -n;

  if (n === 0n) return 0n;
  if (n === 1n) return 0n;

  let count = 0n;

  // Factor 2 with multiplicity
  while (n % 2n === 0n) {
    count++;
    n /= 2n;
  }

  // Factor odd primes with multiplicity
  let i = 3n;
  while (i * i <= n) {
    while (n % i === 0n) {
      count++;
      n /= i;
    }
    i += 2n;
  }

  // Remaining prime
  if (n > 1n) count++;

  return count;
}
