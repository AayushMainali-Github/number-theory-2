import { powMod } from "../arithmetic/powMod.js";

/**
 * Miller-Rabin probabilistic primality test.
 *
 * Checks if a number n is prime by performing k rounds of testing.
 * The test is accurate for all n < 2^64 with a specific set of bases,
 * and remains highly reliable for larger numbers.
 *
 * @example
 * isMillerRabin(13) ➜ true
 * isMillerRabin(15) ➜ false
 * isMillerRabin(9999999967n, 5) ➜ true
 *
 * @param {number|bigint} n - The number to test
 * @param {number} k - Number of iterations (for large n; default varies)
 * @returns {boolean}
 */
export function isMillerRabin(n, k = 10) {
  n = BigInt(n);

  if (n < 2n) return false;
  if (n === 2n || n === 3n) return true;
  if (n % 2n === 0n) return false;

  // Write n - 1 as 2^s * d
  let d = n - 1n;
  let s = 0n;
  while (d % 2n === 0n) {
    d /= 2n;
    s++;
  }

  // Bases for deterministic test for n < 2^64 (n < 18,446,744,073,709,551,616)
  // For larger n, we use the specified number of random-ish bases or k iterations
  const bases = n < 3825123056546413051n
    ? [2n, 3n, 5n, 7n, 11n, 13n, 17n, 19n, 23n]
    : [2n, 3n, 5n, 7n, 11n, 13n, 17n, 19n, 23n, 29n, 31n, 37n];

  // If n is small enough, use a fixed set of bases for a deterministic result
  if (n < 3317044064679887385961981n) {
    for (const a of bases) {
      if (n <= a) break;
      if (!millerRabinTest(n, a, d, s)) return false;
    }
    return true;
  }

  // For very large n, use random bases
  for (let i = 0; i < k; i++) {
    // Basic random base selection (a in [2, n-2])
    // Note: Simple BigInt random generation
    let a = 2n + (BigInt(i + 1) % (n - 4n));
    if (!millerRabinTest(n, a, d, s)) return false;
  }

  return true;
}

function millerRabinTest(n, a, d, s) {
  let x = powMod(a, d, n);
  if (x === 1n || x === n - 1n) return true;

  for (let r = 1n; r < s; r++) {
    x = powMod(x, 2n, n);
    if (x === n - 1n) return true;
  }

  return false;
}
