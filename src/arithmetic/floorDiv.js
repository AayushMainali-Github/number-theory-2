import { mod } from "./mod.js";

/**
 * Euclidean division: returns q, r with a = b*q + r and 0 ≤ r < |b|.
 * Works for Number or BigInt inputs; outputs are BigInt.
 *
 * @param {number|bigint} a
 * @param {number|bigint} b - divisor, must be ≠ 0
 * @returns {{ q: bigint, r: bigint }}
 */
export function floorDiv(a, b) {
  a = BigInt(a);
  b = BigInt(b);
  if (b === 0n) throw new RangeError("Division by zero");

  const absB = b < 0n ? -b : b;
  const r = mod(a, absB); // ensures 0 ≤ r < |b|
  const q = (a - r) / b;  // exact division for quotient
  return { q, r };
}