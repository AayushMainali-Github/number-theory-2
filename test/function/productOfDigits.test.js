import { describe, test } from "node:test";
import assert from "node:assert";
import { productOfDigits } from "../../src/function/productOfDigits.js";

describe("productOfDigits()", () => {
  // 1. Simple case
  test("productOfDigits(1234) → 24", () => {
    assert.strictEqual(productOfDigits(1234), 24n);
  });

  // 2. Contains zero
  test("productOfDigits(105) → 0", () => {
    assert.strictEqual(productOfDigits(105), 0n);
  });

  // 3. All same digits
  test("productOfDigits(999) → 729", () => {
    assert.strictEqual(productOfDigits(999), 729n);
  });

  // 4. Negative number
  test("productOfDigits(-234) → 24", () => {
    assert.strictEqual(productOfDigits(-234), 24n);
  });

  // 5. Zero input
  test("productOfDigits(0) → 0", () => {
    assert.strictEqual(productOfDigits(0), 0n);
  });

  // 6. All ones
  test("productOfDigits(1111) → 1", () => {
    assert.strictEqual(productOfDigits(1111), 1n);
  });

  // 7. BigInt input with trailing zero
  test("productOfDigits(9876543210n) → 0", () => {
    assert.strictEqual(productOfDigits(9876543210n), 0n);
  });

  // 8. Large BigInt product
  test("productOfDigits(987654321n) → 362880n", () => {
    assert.strictEqual(productOfDigits(987654321n), 362880n);
  });

  // 9. Returns bigint type
  test("productOfDigits(123) returns bigint", () => {
    assert.strictEqual(typeof productOfDigits(123), "bigint");
  });

  // 10. Edge case: number with one digit
  test("productOfDigits(7) → 7", () => {
    assert.strictEqual(productOfDigits(7), 7n);
  });

  // 11. Input with repeating pattern
  test("productOfDigits(1212) → 4", () => {
    assert.strictEqual(productOfDigits(1212), 4n);
  });
});
