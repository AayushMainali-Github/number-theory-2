import { describe, test } from "node:test";
import assert from "node:assert";
import { omegaSmall } from "../../src/function/omegaSmall.js";
import { primeFactorization } from "../../src/prime/primeFactorization.js";

describe("omegaSmall()", () => {
  // 1. Base and simple cases
  test("omegaSmall(0) → 0", () => {
    assert.strictEqual(omegaSmall(0), 0n);
  });

  test("omegaSmall(1) → 0", () => {
    assert.strictEqual(omegaSmall(1), 0n);
  });

  test("prime input has ω = 1", () => {
    assert.strictEqual(omegaSmall(2), 1n);
    assert.strictEqual(omegaSmall(13), 1n);
  });

  // 2. Composite numbers
  test("12 = 2^2 · 3 ⇒ ω = 2", () => {
    assert.strictEqual(omegaSmall(12), 2n);
  });

  test("60 = 2^2 · 3 · 5 ⇒ ω = 3", () => {
    assert.strictEqual(omegaSmall(60), 3n);
  });

  test("powers of a single prime ⇒ ω = 1", () => {
    assert.strictEqual(omegaSmall(2 ** 5), 1n);
    assert.strictEqual(omegaSmall(9), 1n); // 3^2
  });

  // 3. BigInt inputs
  test("BigInt input 66n = 2 · 3 · 11 ⇒ ω = 3", () => {
    assert.strictEqual(omegaSmall(66n), 3n);
  });

  test("negative input uses |n|", () => {
    assert.strictEqual(omegaSmall(-60), 3n);
  });

  // 4. Consistency with primeFactorization length for small values
  test("matches distinct factor count via primeFactorization", () => {
    for (let n = 2; n <= 200; n++) {
      const factors = primeFactorization(n);
      const distinct = BigInt(factors.length);
      assert.strictEqual(omegaSmall(n), distinct);
    }
  });

  // 5. Type check
  test("returns BigInt", () => {
    assert.strictEqual(typeof omegaSmall(100), "bigint");
  });
});