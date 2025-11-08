import { describe, test } from "node:test";
import assert from "node:assert";
import { radical } from "../../src/function/radical.js";
import { primeFactorization } from "../../src/prime/primeFactorization.js";

describe("radical()", () => {
  // 1. Base cases
  test("radical(0) → 0", () => {
    assert.strictEqual(radical(0), 0n);
  });

  test("radical(1) → 1", () => {
    assert.strictEqual(radical(1), 1n);
  });

  // 2. Primes and simple composites
  test("radical(2) → 2", () => {
    assert.strictEqual(radical(2), 2n);
  });

  test("radical(12) → 6 (2·3)", () => {
    assert.strictEqual(radical(12), 6n);
  });

  test("radical(60) → 30 (2·3·5)", () => {
    assert.strictEqual(radical(60), 30n);
  });

  test("radical(36) → 6 (2·3)", () => {
    assert.strictEqual(radical(36), 6n);
  });

  // 3. Prime powers
  test("radical(2^5) → 2", () => {
    assert.strictEqual(radical(2 ** 5), 2n);
  });

  test("radical(3^4) → 3", () => {
    assert.strictEqual(radical(81), 3n);
  });

  // 4. BigInt inputs and negatives
  test("radical(99991n * 10007n) → product (squarefree)", () => {
    const p = 99991n,
      q = 10007n;
    assert.strictEqual(radical(p * q), p * q);
  });

  test("negative input uses |n|", () => {
    assert.strictEqual(radical(-12), 6n);
  });

  // 5. Consistency with primeFactorization distinct primes
  test("matches product of distinct primes via primeFactorization", () => {
    for (let n = 2; n <= 200; n++) {
      const factors = primeFactorization(n);
      const prod = factors.reduce((acc, f) => acc * BigInt(f.prime), 1n);
      assert.strictEqual(radical(n), prod);
    }
  });

  // 6. Type check
  test("returns BigInt", () => {
    assert.strictEqual(typeof radical(100), "bigint");
  });
});
