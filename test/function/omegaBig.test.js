import { describe, test } from "node:test";
import assert from "node:assert";
import { omegaBig } from "../../src/function/omegaBig.js";
import { primeFactorization } from "../../src/prime/primeFactorization.js";

describe("omegaBig()", () => {
  // 1. Base and simple cases
  test("omegaBig(0) → 0", () => {
    assert.strictEqual(omegaBig(0), 0n);
  });

  test("omegaBig(1) → 0", () => {
    assert.strictEqual(omegaBig(1), 0n);
  });

  test("prime input has Ω = 1", () => {
    assert.strictEqual(omegaBig(2), 1n);
    assert.strictEqual(omegaBig(13), 1n);
  });

  // 2. Composite numbers (multiplicity)
  test("12 = 2^2 · 3 ⇒ Ω = 3", () => {
    assert.strictEqual(omegaBig(12), 3n);
  });

  test("60 = 2^2 · 3 · 5 ⇒ Ω = 4", () => {
    assert.strictEqual(omegaBig(60), 4n);
  });

  test("powers of a single prime ⇒ Ω = exponent", () => {
    assert.strictEqual(omegaBig(2 ** 5), 5n);
    assert.strictEqual(omegaBig(9), 2n); // 3^2
  });

  // 3. BigInt inputs
  test("BigInt input 66n = 2 · 3 · 11 ⇒ Ω = 3", () => {
    assert.strictEqual(omegaBig(66n), 3n);
  });

  test("negative input uses |n|", () => {
    assert.strictEqual(omegaBig(-60), 4n);
  });

  // 4. Consistency with primeFactorization multiplicities for small values
  test("matches sum of powers via primeFactorization", () => {
    for (let n = 2; n <= 200; n++) {
      const factors = primeFactorization(n);
      const omega = factors.reduce((acc, f) => acc + BigInt(f.power), 0n);
      assert.strictEqual(omegaBig(n), omega);
    }
  });

  // 5. Type check
  test("returns BigInt", () => {
    assert.strictEqual(typeof omegaBig(100), "bigint");
  });
});