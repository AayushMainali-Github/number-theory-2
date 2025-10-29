/**
 * Generate all prime numbers up to a given limit using the Segmented Sieve of Eratosthenes.
 * Efficient for large ranges (e.g., up to 10^8) with low memory overhead.
 * Works with Number or BigInt input, but uses Number for internal array indexing.
 *
 * @example
 * sieve(30) ➜ [2n, 3n, 5n, 7n, 11n, 13n, 17n, 19n, 23n, 29n]
 *
 * @param {number|bigint} limit - Upper bound (inclusive)
 * @returns {bigint[]} Array of prime numbers as BigInts
 */
export function sieve(limit) {
  limit = BigInt(limit);
  if (limit < 2n) return [];

  // Convert to Number for internal array handling
  const max = Number(limit);
  if (!Number.isSafeInteger(max)) {
    throw new RangeError("Limit too large for JavaScript memory-safe sieve");
  }

  const segmentSize = Math.max(32768, Math.floor(Math.sqrt(max)) + 1);
  const sqrtLimit = Math.floor(Math.sqrt(max));
  const isPrime = new Array(sqrtLimit + 1).fill(true);
  const basePrimes = [];

  // Simple sieve up to sqrt(limit)
  for (let i = 2; i * i <= sqrtLimit; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= sqrtLimit; j += i) {
        isPrime[j] = false;
      }
    }
  }

  for (let i = 2; i <= sqrtLimit; i++) {
    if (isPrime[i]) basePrimes.push(i);
  }

  // Segmented sieve
  let primes = [];
  let low = 2;
  let high = Math.min(segmentSize + 1, max + 1);

  while (low <= max) {
    const mark = new Array(high - low).fill(true);

    for (const p of basePrimes) {
      const start = Math.max(p * p, Math.ceil(low / p) * p);
      for (let j = start; j < high; j += p) {
        mark[j - low] = false;
      }
    }

    for (let i = 0; i < mark.length; i++) {
      if (mark[i] && low + i <= max) primes.push(BigInt(low + i));
    }

    low = high;
    high = Math.min(high + segmentSize, max + 1);
  }

  return primes;
}
