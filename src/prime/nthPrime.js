import { sieve } from "./sieve.js";

/**
 * Returns the k-th prime as a BigInt.
 * k must be a positive integer (Number or BigInt). Uses Dusart/PNT upper bounds
 * with a fallback expansion if the bound is insufficient.
 *
 * @example
 * nthPrime(1) ➜ 2n
 * nthPrime(6) ➜ 13n
 * nthPrime(10) ➜ 29n
 * nthPrime(100) ➜ 541n
 *
 * @param {number|bigint} k
 * @returns {bigint}
 */
export function nthPrime(k) {
  // Normalize and validate k
  let n;
  if (typeof k === "bigint") {
    if (k < 1n) throw new RangeError("k must be a positive integer");
    if (k > BigInt(Number.MAX_SAFE_INTEGER)) {
      throw new RangeError("k too large for memory-safe sieve bounds");
    }
    n = Number(k);
  } else {
    if (!Number.isFinite(k) || k < 1 || Math.floor(k) !== k) {
      throw new RangeError("k must be a positive integer");
    }
    n = k;
  }

  // Small cases directly
  if (n === 1) return 2n;
  if (n === 2) return 3n;
  if (n === 3) return 5n;
  if (n === 4) return 7n;
  if (n === 5) return 11n;

  // Upper bound: p_n < n (ln n + ln ln n) for n >= 6 (Dusart)
  const ln = Math.log;
  const baseBound = Math.ceil(n * (ln(n) + ln(ln(n))));
  // Add small safety margin
  let limit = baseBound + 32;

  let primes = sieve(limit);
  while (primes.length < n) {
    // Expand the limit progressively
    limit = Math.min(limit * 2, Number.MAX_SAFE_INTEGER);
    primes = sieve(limit);
    if (limit === Number.MAX_SAFE_INTEGER && primes.length < n) {
      throw new RangeError("Prime bound exceeded for nthPrime computation");
    }
  }

  return primes[n - 1];
}
