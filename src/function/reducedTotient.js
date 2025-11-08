import { totient } from "./totient.js";

/**
 * Returns the reduced totient φ(n)/n as a simplified rational { num, den }.
 *
 * Only defined for n ≥ 1.
 * The fraction is reduced to lowest terms.
 *
 * @example
 * reducedTotient(1)  ➜ { num: 1n, den: 1n }    // φ(1)/1 = 1
 * reducedTotient(10) ➜ { num: 1n, den: 2n }    // φ(10)/10 = 5/10 → 1/2
 * reducedTotient(12) ➜ { num: 1n, den: 3n }    // φ(12)/12 = 4/12 → 1/3
 *
 * @param {number|bigint} n - Positive integer ≥ 1
 * @returns {{ num: bigint, den: bigint }} Reduced fraction φ(n)/n
 * @throws {RangeError} If n ≤ 0
 */
export function reducedTotient(n) {
  const nBig = BigInt(n);
  if (nBig <= 0n) throw new RangeError("reducedTotient() is only defined for n ≥ 1");

  const phi = totient(nBig);

  // Reduce phi/n by their gcd
  const g = gcdBig(phi, nBig);
  return { num: phi / g, den: nBig / g };
}

// Internal: compute gcd for BigInt values
function gcdBig(a, b) {
  a = a < 0n ? -a : a;
  b = b < 0n ? -b : b;
  while (b !== 0n) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}