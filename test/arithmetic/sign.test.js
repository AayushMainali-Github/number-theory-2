import { test, describe } from "node:test";
import assert from "node:assert";
import { sign } from "../../src/arithmetic/sign.js";

describe("sign()", () => {
  // 1. Negative number
  test("sign(-5) → -1", () => {
    assert.strictEqual(sign(-5), -1);
  });

  // 2. Positive number
  test("sign(7) → 1", () => {
    assert.strictEqual(sign(7), 1);
  });

  // 3. Zero
  test("sign(0) → 0", () => {
    assert.strictEqual(sign(0), 0);
  });

  // 4. Negative BigInt
  test("sign(-9007199254740993n) → -1", () => {
    assert.strictEqual(sign(-9007199254740993n), -1);
  });

  // 5. Positive BigInt
  test("sign(9007199254740993n) → 1", () => {
    assert.strictEqual(sign(9007199254740993n), 1);
  });

  // 6. One (positive)
  test("sign(1) → 1", () => {
    assert.strictEqual(sign(1), 1);
  });

  // 7. Negative one
  test("sign(-1) → -1", () => {
    assert.strictEqual(sign(-1), -1);
  });

  // 8. Very large positive BigInt
  test("sign(2n ** 100n) → 1", () => {
    assert.strictEqual(sign(2n ** 100n), 1);
  });

  // 9. Very large negative BigInt
  test("sign(-(2n ** 100n)) → -1", () => {
    assert.strictEqual(sign(-(2n ** 100n)), -1);
  });
});
