import { gcd } from "./gcd.js";
import { mod } from "./mod.js";
import { modInverse } from "./modInverse.js";

/**
 * Solve a linear congruence a·x ≡ b (mod m).
 * Returns canonical solution x in [0, m/g) with modulus m/g, or throws if no solution.
 *
 * @param {number|bigint} a
 * @param {number|bigint} b
 * @param {number|bigint} m - modulus, must be > 0
 * @returns {{ x: bigint, modulo: bigint }}
 */
export function solveCongruence(a, b, m) {
  a = BigInt(a);
  b = BigInt(b);
  m = BigInt(m);
  if (m <= 0n) throw new RangeError("Modulus must be positive");

  // Normalize b to [0, m)
  b = mod(b, m);

  const g = gcd(a, m);
  if (b % g !== 0n) {
    throw new Error("No solution to the congruence");
  }

  const a1 = a / g;
  const b1 = b / g;
  const m1 = m / g;

  // Find inverse of a1 mod m1
  const inv = modInverse(mod(a1, m1), m1);
  const x0 = mod(inv * b1, m1);
  return { x: x0, modulo: m1 };
}
