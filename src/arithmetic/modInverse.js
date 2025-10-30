import { extendedGCD } from "./extendedGCD.js";
import { mod } from "./mod.js";

/**
 * Compute the modular multiplicative inverse of a under modulo m.
 * Returns x such that (a * x) ≡ 1 (mod m)
 *
 * Works for both Number and BigInt and handles negative inputs.
 *
 * @example
 * modInverse(3, 11) ➜ 4n  (since 3 * 4 mod 11 = 1)
 * modInverse(-3, 11) ➜ 7n
 *
 * @param {number|bigint} a - Value to invert
 * @param {number|bigint} m - Modulus (must be > 0)
 * @returns {bigint} modular inverse of a mod m
 */
export function modInverse(a, m) {
  a = BigInt(a);
  m = BigInt(m);

  if (m <= 0n) throw new RangeError("Modulus must be positive");

  // Normalize a into [0, m)
  a = mod(a, m);

  // Destructure the tuple [gcd, x, y]
  const [g, x] = extendedGCD(a, m);

  // Inverse exists only if gcd == 1
  if (g !== 1n) {
    throw new Error("Modular inverse does not exist");
  }

  // Normalize result to [0, m)
  return mod(x, m);
}
