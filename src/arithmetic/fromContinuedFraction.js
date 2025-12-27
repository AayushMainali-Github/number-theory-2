/**
 * Convert a continued fraction representation [a0, a1, ..., ak] into a rational number n/d.
 * Returns an object { n, d } where gcd(n, d) = 1.
 *
 * @example
 * fromContinuedFraction([2n, 1n, 4n, 3n]) ➜ { n: 45n, d: 16n }
 *
 * @param {bigint[]} arr - Continued fraction coefficients
 * @returns {{ n: bigint, d: bigint }} Object with numerator (n) and denominator (d)
 */
export function fromContinuedFraction(arr) {
  if (arr.length === 0) return { n: 0n, d: 1n };

  let n = 1n;
  let d = 0n;

  for (let i = arr.length - 1; i >= 0; i--) {
    const a = BigInt(arr[i]);
    // x = a + 1/x_prev = a + d_prev/n_prev = (a*n_prev + d_prev)/n_prev
    const nextN = a * n + d;
    d = n;
    n = nextN;
  }

  return { n, d };
}
