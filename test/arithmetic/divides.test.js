import { test, describe } from "node:test";
import assert from "node:assert";
import { divides } from "../../src/arithmetic/divides.js";

describe("divides()", () => {
  // 1. Basic true case
  test("divides(3,12) → true", () => {
    assert.strictEqual(divides(3, 12), true);
  });

  // 2. Basic false case
  test("divides(5,12) → false", () => {
    assert.strictEqual(divides(5, 12), false);
  });

  // 3. Zero dividend is divisible by any non-zero a
  test("divides(7,0) → true", () => {
    assert.strictEqual(divides(7, 0), true);
  });

  // 4. Negative dividend
  test("divides(3,-12) → true", () => {
    assert.strictEqual(divides(3, -12), true);
  });

  // 5. Negative divisor
  test("divides(-3,12) → true", () => {
    assert.strictEqual(divides(-3, 12), true);
  });

  // 6. Both negative
  test("divides(-4,-20) → true", () => {
    assert.strictEqual(divides(-4, -20), true);
  });

  // 7. Divisor 1
  test("divides(1, 999999) → true", () => {
    assert.strictEqual(divides(1, 999999), true);
  });

  // 8. Divisor -1
  test("divides(-1, 999999) → true", () => {
    assert.strictEqual(divides(-1, 999999), true);
  });

  // 9. Large BigInt powers
  test("divides(2^50, 2^100) → true", () => {
    const a = 2n ** 50n;
    const b = 2n ** 100n;
    assert.strictEqual(divides(a, b), true);
  });

  // 10. Large BigInt non-divisible
  test("divides(2^50, 3^50) → false", () => {
    const a = 2n ** 50n;
    const b = 3n ** 50n;
    assert.strictEqual(divides(a, b), false);
  });

  // 11. Prime divides composite
  test("divides(13, 13*97) → true", () => {
    assert.strictEqual(divides(13, 13 * 97), true);
  });

  // 12. Composite divides prime (false)
  test("divides(6, 97) → false", () => {
    assert.strictEqual(divides(6, 97), false);
  });

  // 13. Throws when divisor is zero
  test("throws RangeError when a = 0", () => {
    assert.throws(() => divides(0, 5), RangeError);
    assert.throws(() => divides(0, 0), RangeError);
  });
});