import { describe, test } from "node:test";
import assert from "node:assert";
import { sumOfDigits } from "../../src/function/sumOfDigits.js";

describe("sumOfDigits()", () => {
  // 1. Basic case
  test("sumOfDigits(942) → 15", () => {
    assert.strictEqual(sumOfDigits(942), 15n);
  });

  // 2. Simple increasing digits
  test("sumOfDigits(12345) → 15", () => {
    assert.strictEqual(sumOfDigits(12345), 15n);
  });

  // 3. Single digit input
  test("sumOfDigits(7) → 7", () => {
    assert.strictEqual(sumOfDigits(7), 7n);
  });

  // 4. Negative number
  test("sumOfDigits(-123) → 6", () => {
    assert.strictEqual(sumOfDigits(-123), 6n);
  });

  // 5. Input with zero inside
  test("sumOfDigits(1010) → 2", () => {
    assert.strictEqual(sumOfDigits(1010), 2n);
  });

  // 6. All same digits
  test("sumOfDigits(99999) → 45", () => {
    assert.strictEqual(sumOfDigits(99999), 45n);
  });

  // 7. Zero input
  test("sumOfDigits(0) → 0", () => {
    assert.strictEqual(sumOfDigits(0), 0n);
  });

  // 8. Large BigInt input
  test("sumOfDigits(1000000000000000000n) → 1", () => {
    assert.strictEqual(sumOfDigits(1000000000000000000n), 1n);
  });

  // 9. BigInt with multiple digits
  test("sumOfDigits(9876543210n) → 45", () => {
    assert.strictEqual(sumOfDigits(9876543210n), 45n);
  });

  // 10. Type check → returns bigint
  test("sumOfDigits(1234) returns bigint", () => {
    assert.strictEqual(typeof sumOfDigits(1234), "bigint");
  });

  // 11. Large mixed number
  test("sumOfDigits(1002003004) → 10", () => {
    assert.strictEqual(sumOfDigits(1002003004), 10n);
  });
});
