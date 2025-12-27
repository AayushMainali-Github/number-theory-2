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
