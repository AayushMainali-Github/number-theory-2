import { describe, test } from "node:test";
import assert from "node:assert";
import { isSquareFree } from "../../src/function/isSquareFree.js";

describe("isSquareFree()", () => {
  // 1. Base cases
  test("isSquareFree(1) → true", () => {
    assert.strictEqual(isSquareFree(1), true);
  });

  // 2. Small primes and square-free composites
  test("isSquareFree(2), isSquareFree(3), isSquareFree(5) → true", () => {
    assert.strictEqual(isSquareFree(2), true);
    assert.strictEqual(isSquareFree(3), true);
    assert.strictEqual(isSquareFree(5), true);
  });

  test("isSquareFree(10) → true", () => {
    assert.strictEqual(isSquareFree(10), true); // 2 × 5
  });

  test("isSquareFree(30) → true", () => {
    assert.strictEqual(isSquareFree(30), true); // 2 × 3 × 5
  });

  // 3. Non-square-free examples
  test("isSquareFree(12) → false", () => {
    assert.strictEqual(isSquareFree(12), false); // 2^2 × 3
  });

  test("isSquareFree(36) → false", () => {
    assert.strictEqual(isSquareFree(36), false); // (2 × 3)^2
  });

  test("isSquareFree(121) → false", () => {
    assert.strictEqual(isSquareFree(121), false); // 11^2
  });

  // 4. BigInt inputs
  test("isSquareFree(99991n * 10007n) → true", () => {
    const n = 99991n * 10007n;
    assert.strictEqual(isSquareFree(n), true);
  });

  test("isSquareFree(18n) → false", () => {
    assert.strictEqual(isSquareFree(18n), false); // 2 × 3^2
  });

  // 5. Domain errors
  test("isSquareFree(0) throws RangeError", () => {
    assert.throws(() => isSquareFree(0), RangeError);
  });

  test("isSquareFree(-12) throws RangeError", () => {
    assert.throws(() => isSquareFree(-12), RangeError);
  });
});