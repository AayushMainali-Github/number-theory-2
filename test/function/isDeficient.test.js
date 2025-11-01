import { describe, test } from "node:test";
import assert from "node:assert";
import { isDeficient } from "../../src/function/isDeficient.js";

describe("isDeficient()", () => {
  // 1. Classic deficient number
  test("isDeficient(8) → true", () => {
    assert.strictEqual(isDeficient(8), true);
  });

  // 2. Classic non-deficient number (abundant)
  test("isDeficient(12) → false", () => {
    assert.strictEqual(isDeficient(12), false);
  });

  // 3. Perfect number (not deficient)
  test("isDeficient(6) → false", () => {
    assert.strictEqual(isDeficient(6), false);
  });

  // 4. Prime number is always deficient
  test("isDeficient(13) → true", () => {
    assert.strictEqual(isDeficient(13), true);
  });

  // 5. Smallest case
  test("isDeficient(1) → true", () => {
    assert.strictEqual(isDeficient(1), true);
  });

  // 6. BigInt input
  test("isDeficient(945n) → false", () => {
    assert.strictEqual(isDeficient(945n), false);
  });

  // 7. Throws on invalid input (<= 0)
  test("isDeficient(0) throws RangeError", () => {
    assert.throws(() => isDeficient(0), RangeError);
  });
});
