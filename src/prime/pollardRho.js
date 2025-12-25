import { gcd } from "../arithmetic/gcd.js";

/**
 * Pollard's rho algorithm for integer factorization.
 * Finds a non-trivial factor of a composite number n.
 *
 * @example
 * pollardRho(8051n) ➜ 83n (Factor of 8051)
 *
 * @param {number|bigint} n - Composite number to factor
 * @param {bigint} [seed=2n] - Initial value for x
 * @param {bigint} [c=1n] - Constant in f(x) = x^2 + c
 * @returns {bigint|null} A factor of n, or null if failure
 */
export function pollardRho(n, seed = 2n, c = 1n) {
  n = BigInt(n);
  if (n % 2n === 0n) return 2n;
  if (n % 3n === 0n) return 3n;

  let x = BigInt(seed);
  let y = BigInt(seed);
  let d = 1n;

  const f = (val) => (val * val + c) % n;

  while (d === 1n) {
    x = f(x);
    y = f(f(y));
    d = gcd(x > y ? x - y : y - x, n);

    if (d === n) {
      // Failure to find a factor with these parameters
      return null;
    }
  }

  return d;
}
