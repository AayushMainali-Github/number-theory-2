import { describe, test } from "node:test";
import assert from "node:assert";
import { isPerfect } from "../../src/function/isPerfect.js";

describe("isPerfect()", () => {
  // 1. First known perfect number
  test("isPerfect(6) → true", () => {
    assert.strictEqual(isPerfect(6), true);
  });

  // 2. Second perfect number
  test("isPerfect(28) → true", () => {
    assert.strictEqual(isPerfect(28), true);
  });

  // 3. Non-perfect number (abundant)
  test("isPerfect(12) → false", () => {
    assert.strictEqual(isPerfect(12), false);
  });

  // 4. Non-perfect number (deficient)
  test("isPerfect(8) → false", () => {
    assert.strictEqual(isPerfect(8), false);
  });

  // 5. Large perfect number
  test("isPerfect(496) → true", () => {
    assert.strictEqual(isPerfect(496), true);
  });

  // 6. Prime number (never perfect)
  test("isPerfect(13) → false", () => {
    assert.strictEqual(isPerfect(13), false);
  });

  // 7. BigInt input perfect number
  test("isPerfect(8128n) → true", () => {
    assert.strictEqual(isPerfect(8128n), true);
  });

  // 8. BigInt non-perfect
  test("isPerfect(945n) → false", () => {
    assert.strictEqual(isPerfect(945n), false);
  });

  // 9. Throws for invalid input (≤ 0)
  test("isPerfect(0) throws RangeError", () => {
    assert.throws(() => isPerfect(0), RangeError);
  });

  // 10. Negative input throws
  test("isPerfect(-6) throws RangeError", () => {
    assert.throws(() => isPerfect(-6), RangeError);
  });
});
