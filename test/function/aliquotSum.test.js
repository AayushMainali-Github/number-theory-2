import { describe, test } from "node:test";
import assert from "node:assert";
import { aliquotSum } from "../../src/function/aliquotSum.js";

describe("aliquotSum()", () => {
  // 1. Perfect number (aliquot sum equals n)
  test("aliquotSum(6) → 6", () => {
    assert.strictEqual(aliquotSum(6), 6n);
  });

  // 2. Abundant number (aliquot sum > n)
  test("aliquotSum(12) → 16", () => {
    assert.strictEqual(aliquotSum(12), 16n);
  });

  // 3. Deficient number (aliquot sum < n)
  test("aliquotSum(8) → 7", () => {
    assert.strictEqual(aliquotSum(8), 7n);
  });

  // 4. Prime number (aliquot sum = 1)
  test("aliquotSum(13) → 1", () => {
    assert.strictEqual(aliquotSum(13), 1n);
  });

  // 5. Larger perfect number
  test("aliquotSum(28) → 28", () => {
    assert.strictEqual(aliquotSum(28), 28n);
  });

  // 6. BigInt input
  test("aliquotSum(496n) → 496", () => {
    assert.strictEqual(aliquotSum(496n), 496n);
  });

  // 7. Edge case: 1 (only divisor is itself)
  test("aliquotSum(1) → 0", () => {
    assert.strictEqual(aliquotSum(1), 0n);
  });

  // 8. Negative number throws RangeError
  test("aliquotSum(-6) throws RangeError", () => {
    assert.throws(() => aliquotSum(-6), RangeError);
  });

  // 9. Zero throws RangeError
  test("aliquotSum(0) throws RangeError", () => {
    assert.throws(() => aliquotSum(0), RangeError);
  });

  // 10. Random number sanity
  test("aliquotSum(20) → 22", () => {
    // Divisors: 1, 2, 4, 5, 10 → 22
    assert.strictEqual(aliquotSum(20), 22n);
  });
});
