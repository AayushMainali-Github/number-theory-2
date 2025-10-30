/**
 * Compute the prime factorization of a positive integer n,
 * returning an array of objects with { prime, power }.
 *
 * Works for both Number and BigInt.
 *
 * Example:
 *   primeFactorization(132) ➜ [
 *     { prime: 2n, power: 2 },
 *     { prime: 3n, power: 1 },
 *     { prime: 11n, power: 1 }
 *   ]
 *
 * @param {number|bigint} n - Integer ≥ 2
 * @returns {{ prime: bigint, power: number }[]} Prime factors with exponents
 */
export function primeFactorization(n) {
  n = BigInt(n);
  if (n < 2n) throw new RangeError("primeFactorization() requires n ≥ 2");

  const factors = [];

  // Handle factor 2 separately for efficiency
  let power = 0;
  while (n % 2n === 0n) {
    n /= 2n;
    power++;
  }
  if (power > 0) factors.push({ prime: 2n, power });

  // Handle odd factors
  let i = 3n;
  while (i * i <= n) {
    power = 0;
    while (n % i === 0n) {
      n /= i;
      power++;
    }
    if (power > 0) factors.push({ prime: i, power });
    i += 2n;
  }

  // If remainder > 1, it's a prime
  if (n > 1n) factors.push({ prime: n, power: 1 });

  return factors;
}
