/**
 * Compute the Extended Euclidean Algorithm (EEA) for two integers.
 * Returns an array [g, x, y] such that:
 *     a * x + b * y = g
 * where g = gcd(a, b)
 *
 * Works for both Number and BigInt inputs.
 * Handles negative numbers correctly.
 *
 * @example
 * extendedGCD(240, 46) ➜ [2n, -9n, 47n]
 * extendedGCD(99, 78) ➜ [3n, -11n, 14n]
 *
 * @param {number|bigint} a - First integer
 * @param {number|bigint} b - Second integer
 * @returns {[bigint, bigint, bigint]} [gcd, x, y]
 */
export function extendedGCD(a, b) {
  a = BigInt(a);
  b = BigInt(b);

  if (b === 0n) return [a < 0n ? -a : a, a < 0n ? -1n : 1n, 0n];

  let old_r = a;
  let r = b;
  let old_s = 1n;
  let s = 0n;
  let old_t = 0n;
  let t = 1n;

  while (r !== 0n) {
    const q = old_r / r;
    [old_r, r] = [r, old_r - q * r];
    [old_s, s] = [s, old_s - q * s];
    [old_t, t] = [t, old_t - q * t];
  }

  // Ensure gcd is always non-negative
  if (old_r < 0n) {
    old_r = -old_r;
    old_s = -old_s;
    old_t = -old_t;
  }

  return [old_r, old_s, old_t];
}
