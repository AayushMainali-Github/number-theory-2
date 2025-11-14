/**
 * Integer ceiling division: returns ceil(a / b) for integers.
 * Works with Number or BigInt inputs, returns BigInt.
 *
 * @example
 * ceilDiv(7, 3)   ➜ 3n
 * ceilDiv(-7, 3)  ➜ -2n
 * ceilDiv(7, -3)  ➜ -2n
 * ceilDiv(-7, -3) ➜ 3n
 *
 * @param {number|bigint} a
 * @param {number|bigint} b - divisor, must be ≠ 0
 * @returns {bigint}
 */
export function ceilDiv(a, b) {
  a = BigInt(a);
  b = BigInt(b);
  if (b === 0n) throw new RangeError("Division by zero");

  const q0 = a / b; // truncated toward zero
  const r0 = a % b; // remainder with the sign of a
  if (r0 === 0n) return q0;

  const sameSign = (a > 0n && b > 0n) || (a < 0n && b < 0n);
  return sameSign ? q0 + 1n : q0;
}