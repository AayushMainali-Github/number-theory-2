/**
 * Generate all prime numbers in the inclusive range [start, end]
 * using a segmented sieve approach.
 *
 * Works efficiently even for very large ranges (up to 10^12 or more)
 * because it only sieves the current segment instead of all numbers up to end.
 *
 * @example
 * sieveRange(10, 30) ➜ [11n, 13n, 17n, 19n, 23n, 29n]
 *
 * @param {number|bigint} start - Starting number (inclusive)
 * @param {number|bigint} end - Ending number (inclusive)
 * @returns {bigint[]} Array of primes within [start, end]
 */
export function sieveRange(start, end) {
  start = BigInt(start);
  end = BigInt(end);

  if (end < 2n || end < start) return [];
  if (start < 2n) start = 2n;

  const rangeSize = Number(end - start + 1n);
  if (!Number.isSafeInteger(rangeSize)) {
    throw new RangeError("Range too large for JavaScript memory-safe sieve");
  }

  // Step 1: Generate base primes up to sqrt(end)
  const sqrtEnd = Math.floor(Math.sqrt(Number(end)));
  const baseIsPrime = new Array(sqrtEnd + 1).fill(true);
  const basePrimes = [];

  for (let i = 2; i * i <= sqrtEnd; i++) {
    if (baseIsPrime[i]) {
      for (let j = i * i; j <= sqrtEnd; j += i) baseIsPrime[j] = false;
    }
  }

  for (let i = 2; i <= sqrtEnd; i++) {
    if (baseIsPrime[i]) basePrimes.push(i);
  }

  // Step 2: Mark non-primes in [start, end]
  const mark = new Array(rangeSize).fill(true);

  for (const p of basePrimes) {
    let base = BigInt(p);

    // Find the first multiple of p in [start, end]
    let firstMultiple =
      start % base === 0n ? start : start + (base - (start % base));
    if (firstMultiple === base) firstMultiple = base * base; // Skip marking prime itself

    for (let j = firstMultiple; j <= end; j += base) {
      mark[Number(j - start)] = false;
    }
  }

  // Step 3: Collect primes
  const primes = [];
  for (let i = 0; i < rangeSize; i++) {
    if (mark[i]) primes.push(start + BigInt(i));
  }

  return primes;
}
