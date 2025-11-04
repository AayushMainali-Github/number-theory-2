import bigintSqrt from "../utils/bigintSqrt.js";

/**
 * Check whether x is a hexagonal number.
 * A hexagonal number has the form H_n = n(2n − 1), n ≥ 1.
 *
 * Test via quadratic discriminant:
 *   2n^2 − n − x = 0  ⇒  Δ = 1 + 8x must be a perfect square k^2
 *   and (1 + k) must be divisible by 4, then n = (1 + k) / 4 ∈ ℕ.
 *
 * Works with Number and BigInt. Returns a boolean.
 *
 * @example
 * isHexagonal(1)   ➜ true
 * isHexagonal(6)   ➜ true
 * isHexagonal(7)   ➜ false
 * isHexagonal(190) ➜ true
 *
 * @param {number|bigint} x
 * @returns {boolean}
 */
export function isHexagonal(x) {
  x = BigInt(x);
  if (x <= 0n) return false;

  const D = 1n + 8n * x; // discriminant
  const k = bigintSqrt(D); // integer sqrt
  if (k * k !== D) return false; // Δ must be a perfect square
  return (1n + k) % 4n === 0n; // (1 + √Δ) divisible by 4
}
