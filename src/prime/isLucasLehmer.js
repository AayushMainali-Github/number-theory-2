import { powMod } from "../arithmetic/powMod.js";

/**
 * Lucas-Lehmer primality test for Mersenne numbers.
 * A Mersenne number is of the form M_p = 2^p - 1.
 * This test is deterministic and highly efficient for such numbers.
 *
 * @example
 * isLucasLehmer(7) ➜ true (M_3 = 2^3 - 1 = 7)
 * isLucasLehmer(31) ➜ true (M_5 = 2^5 - 1 = 31)
 *
 * @param {number|bigint} p - The exponent p in 2^p - 1 (p must be prime)
 * @returns {boolean}
 */
export function isLucasLehmer(p) {
  p = BigInt(p);

  // M_2 = 2^2 - 1 = 3 is prime
  if (p === 2n) return true;
  if (p < 2n) return false;

  // The exponent p itself must be prime for 2^p - 1 to be prime
  // However, this function specifically tests the Mersenne number M_p
  // We assume the caller provides a prime p or we check it elsewhere
  // But for the Lucas-Lehmer algorithm:
  
  const m = (1n << p) - 1n;
  let s = 4n;

  for (let i = 0n; i < p - 2n; i++) {
    s = (s * s - 2n) % m;
  }

  return s === 0n;
}
