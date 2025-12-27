import { modInverse } from "./modInverse.js";
import { powMod } from "./powMod.js";
import { modMul } from "./modMul.js";

/**
 * Solve for x in a^x ≡ b (mod m) using the Baby-step Giant-step algorithm.
 *
 * @example
 * discreteLog(2, 8, 11) ➜ 3n (since 2^3 = 8 ≡ 8 (mod 11))
 *
 * @param {number|bigint} a
 * @param {number|bigint} b
 * @param {number|bigint} m
 * @returns {bigint|null} x such that a^x ≡ b (mod m), or null if no solution
 */
export function discreteLog(a, b, m) {
  a = BigInt(a);
  b = BigInt(b);
  m = BigInt(m);

  a %= m;
  b %= m;

  if (b === 1n) return 0n;
  if (a === 0n) return b === 0n ? 1n : null;

  // Baby-step Giant-step
  const n = BigInt(Math.ceil(Math.sqrt(Number(m))));

  // Baby steps: Store a^j (mod m) for j in [0, n-1]
  const babySteps = new Map();
  let curr = 1n;
  for (let j = 0n; j < n; j++) {
    babySteps.set(curr, j);
    curr = (curr * a) % m;
  }

  // Giant steps: Check b * (a^-n)^i (mod m) for i in [0, n]
  // a^-n ≡ (a^n)^-1 ≡ (a^-1)^n
  const invAN = modInverse(powMod(a, n, m), m);
  curr = b;
  for (let i = 0n; i <= n; i++) {
    if (babySteps.has(curr)) {
      return i * n + babySteps.get(curr);
    }
    curr = (curr * invAN) % m;
  }

  return null;
}
