import { primeFactorization } from "../prime/primeFactorization.js";
import { lcm } from "../arithmetic/lcm.js";

/**
 * Computes the Carmichael function λ(n).
 *
 * Definition:
 *   λ(n) = lcm( λ(p₁^a₁), λ(p₂^a₂), ..., λ(pₖ^aₖ) )
 *
 * For a prime power p^a:
 *   - If p = 2 and a ≤ 2 → λ(2^a) = 2^(a-2) = 1 for a=1, 2 for a=2
 *   - If p = 2 and a > 2 → λ(2^a) = 2^(a-2)
 *   - If p is odd → λ(p^a) = (p - 1) * p^(a - 1)
 *
 * Works for both Number and BigInt.
 * Only defined for n ≥ 1.
 *
 * @example
 * carmichael(1)  ➜ 1n
 * carmichael(8)  ➜ 2n
 * carmichael(9)  ➜ 6n
 * carmichael(12) ➜ 2n
 * carmichael(561) ➜ 80n
 *
 * @param {number|bigint} n - Integer ≥ 1
 * @returns {bigint} Carmichael value λ(n)
 * @throws {RangeError} If n ≤ 0
 */
export function carmichael(n) {
  n = BigInt(n);
  if (n <= 0n) throw new RangeError("carmichael() is only defined for n ≥ 1");
  if (n === 1n) return 1n;

  const factors = primeFactorization(n);
  const values = [];

  for (const { prime, power } of factors) {
    const p = BigInt(prime);
    const a = BigInt(power);

    let lambda_p_a;
    if (p === 2n) {
      if (a === 1n) lambda_p_a = 1n;
      else if (a === 2n) lambda_p_a = 2n;
      else lambda_p_a = 2n ** (a - 2n);
    } else {
      lambda_p_a = (p - 1n) * p ** (a - 1n);
    }

    values.push(lambda_p_a);
  }

  // Take LCM of all λ(p^a)
  let result = values[0];
  for (let i = 1; i < values.length; i++) {
    result = lcm(result, values[i]);
  }

  return result;
}
