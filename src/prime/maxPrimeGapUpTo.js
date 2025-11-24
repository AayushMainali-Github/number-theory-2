import { sieve } from "./sieve.js";

/**
 * Returns the largest prime gap up to n as
 * { gap: bigint, from: bigint, to: bigint }.
 * If n < 2 or there are fewer than 2 primes ≤ n, returns { gap: 0n, from: 0n, to: 0n }.
 * Works for Number or BigInt inputs.
 *
 * @example
 * maxPrimeGapUpTo(20) ➜ { gap: 4n, from: 7n, to: 11n }
 *
 * @param {number|bigint} n
 * @returns {{ gap: bigint, from: bigint, to: bigint }}
 */
export function maxPrimeGapUpTo(n) {
  n = BigInt(n);
  if (n < 2n) return { gap: 0n, from: 0n, to: 0n };

  const primes = sieve(n);
  if (primes.length < 2) {
    const only = primes.length === 1 ? primes[0] : 0n;
    return { gap: 0n, from: only, to: only };
  }

  let bestGap = 0n;
  let bestFrom = primes[0];
  let bestTo = primes[0];
  for (let i = 0; i + 1 < primes.length; i++) {
    const p = primes[i];
    const q = primes[i + 1];
    const gap = q - p;
    if (gap > bestGap) {
      bestGap = gap;
      bestFrom = p;
      bestTo = q;
    }
  }

  return { gap: bestGap, from: bestFrom, to: bestTo };
}