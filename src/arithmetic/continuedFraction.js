/**
 * Convert a rational number n/d into a continued fraction representation.
 *
 * @example
 * toContinuedFraction(45, 16) ➜ [2n, 1n, 4n, 3n] (45/16 = 2 + 1/(1 + 1/(4 + 1/3)))
 *
 * @param {number|bigint} n - Numerator
 * @param {number|bigint} d - Denominator
 * @returns {bigint[]} Array of continued fraction coefficients [a0, a1, ..., ak]
 */
export function toContinuedFraction(n, d) {
  n = BigInt(n);
  d = BigInt(d);

  if (d === 0n) throw new RangeError("Denominator cannot be zero");

  const result = [];
  while (d !== 0n) {
    const a = n / d;
    result.push(a);
    const temp = n % d;
    n = d;
    d = temp;
  }

  return result;
}

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
