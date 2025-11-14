import { gcd } from "./gcd.js";
import { mod } from "./mod.js";
import { modInverse } from "./modInverse.js";

/**
 * Chinese Remainder Theorem for pairwise coprime moduli.
 * Given arrays `remainders` and `moduli`, returns x in [0, M) where M=∏ moduli,
 * such that x ≡ r_i (mod m_i) for each i.
 *
 * @param {Array<number|bigint>} remainders
 * @param {Array<number|bigint>} moduli - all > 0 and pairwise coprime
 * @returns {{ x: bigint, modulus: bigint }} solution x and combined modulus M
 */
export function crt(remainders, moduli) {
  if (
    !Array.isArray(remainders) ||
    !Array.isArray(moduli) ||
    remainders.length !== moduli.length ||
    remainders.length === 0
  ) {
    throw new TypeError("crt requires two non-empty arrays of equal length");
  }

  const r = remainders.map(BigInt);
  const m = moduli.map(BigInt);

  // Validate moduli and pairwise coprime
  for (const mi of m) {
    if (mi <= 0n) throw new RangeError("All moduli must be positive");
  }
  for (let i = 0; i < m.length; i++) {
    for (let j = i + 1; j < m.length; j++) {
      if (gcd(m[i], m[j]) !== 1n) {
        throw new Error("Moduli must be pairwise coprime");
      }
    }
  }

  const M = m.reduce((acc, mi) => acc * mi, 1n);

  let x = 0n;
  for (let i = 0; i < m.length; i++) {
    const Mi = M / m[i];
    const inv = modInverse(Mi, m[i]);
    x = mod(x + r[i] * Mi * inv, M);
  }

  return { x, modulus: M };
}
