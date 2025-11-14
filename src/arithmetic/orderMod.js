import { isCoprime } from "../prime/isCoprime.js";
import { carmichael } from "../function/carmichael.js";
import { divisors } from "./divisors.js";
import { powMod } from "./powMod.js";
import { mod } from "./mod.js";

/**
 * Multiplicative order of a modulo m: the smallest positive k such that a^k ≡ 1 (mod m).
 * Defined only when gcd(a, m) = 1 and m > 1.
 *
 * Implementation uses Carmichael λ(m) and tests divisors of λ(m) in ascending order.
 *
 * @example
 * orderMod(2, 7)  ➜ 3n    // 2^3 ≡ 1 (mod 7)
 * orderMod(3, 10) ➜ 4n    // 3^4 ≡ 1 (mod 10)
 * orderMod(5, 8)  ➜ 2n    // 5^2 ≡ 1 (mod 8)
 *
 * @param {number|bigint} a
 * @param {number|bigint} m - modulus, must be > 1
 * @returns {bigint}
 */
export function orderMod(a, m) {
  a = BigInt(a);
  m = BigInt(m);
  if (m <= 1n) throw new RangeError("Modulus must be greater than 1");

  // Normalize a into [0, m)
  a = mod(a, m);

  if (!isCoprime(a, m)) {
    throw new Error("orderMod is defined only when a and m are coprime");
  }

  const lambda = carmichael(m);
  const ds = divisors(lambda);

  for (const d of ds) {
    if (powMod(a, d, m) === 1n) return d;
  }

  // Fallback (should not happen): return λ(m)
  return lambda;
}
