import { describe, test } from "node:test";
import assert from "node:assert";
import { isAbundant } from "../../src/function/isAbundant.js";

describe("isAbundant()", () => {
  // 1. Classic abundant number
  test("isAbundant(12) → true", () => {
    assert.strictEqual(isAbundant(12), true);
  });

  // 2. Classic deficient number
  test("isAbundant(8) → false", () => {
    assert.strictEqual(isAbundant(8), false);
  });

  // 3. Perfect number (not abundant)
  test("isAbundant(6) → false", () => {
    assert.strictEqual(isAbundant(6), false);
  });

  // 4. Another abundant number
  test("isAbundant(18) → true", () => {
    assert.strictEqual(isAbundant(18), true);
  });

  // 5. Prime number (always not abundant)
  test("isAbundant(13) → false", () => {
    assert.strictEqual(isAbundant(13), false);
  });

  // 6. BigInt input
  test("isAbundant(945n) → true", () => {
    assert.strictEqual(isAbundant(945n), true);
  });

  // 7. Throws on invalid input (<= 0)
  test("isAbundant(-5) throws RangeError", () => {
    assert.throws(() => isAbundant(-5), RangeError);
  });
});
