import { omegaBig } from "./omegaBig.js";

/**
 * Computes the Liouville function λ(n) = (−1)^{Ω(n)},
 * where Ω(n) counts prime factors with multiplicity.
 *
 * Domain: only defined for n ≥ 1.
 * Throws RangeError for n ≤ 0.
 *
 * Works for both Number and BigInt inputs. Returns BigInt (−1n or 1n).
 *
 * @example
 * liouville(1)  ➜  1n   // Ω(1) = 0
 * liouville(2)  ➜ -1n   // Ω(2) = 1
 * liouville(12) ➜ -1n   // 12 = 2^2·3 ⇒ Ω = 3
 * liouville(36) ➜  1n   // 36 = 2^2·3^2 ⇒ Ω = 4
 *
 * @param {number|bigint} n - Positive integer (n ≥ 1)
 * @returns {bigint} −1n or 1n
 * @throws {RangeError} If n ≤ 0
 */
export function liouville(n) {
  n = BigInt(n);
  if (n <= 0n) {
    throw new RangeError("liouville() is only defined for n ≥ 1");
  }

  const omega = omegaBig(n);
  return omega % 2n === 0n ? 1n : -1n;
}