import { test, describe } from "node:test";
import assert from "node:assert";
import { ceilDiv } from "../../src/arithmetic/ceilDiv.js";

describe("ceilDiv()", () => {
  // 1. Basic positive division
  test("ceilDiv(7,3) → 3", () => {
    assert.strictEqual(ceilDiv(7, 3), 3n);
  });

  // 2. Negative numerator
  test("ceilDiv(-7,3) → -2", () => {
    assert.strictEqual(ceilDiv(-7, 3), -2n);
  });

  // 3. Negative denominator
  test("ceilDiv(7,-3) → -2", () => {
    assert.strictEqual(ceilDiv(7, -3), -2n);
  });

  // 4. Both negative
  test("ceilDiv(-7,-3) → 3", () => {
    assert.strictEqual(ceilDiv(-7, -3), 3n);
  });

  // 5. Exact division cases
  test("ceilDiv(10,5) → 2", () => {
    assert.strictEqual(ceilDiv(10, 5), 2n);
  });
  test("ceilDiv(-10,5) → -2", () => {
    assert.strictEqual(ceilDiv(-10, 5), -2n);
  });
  test("ceilDiv(10,-5) → -2", () => {
    assert.strictEqual(ceilDiv(10, -5), -2n);
  });
  test("ceilDiv(-10,-5) → 2", () => {
    assert.strictEqual(ceilDiv(-10, -5), 2n);
  });

  // 6. Large BigInt
  test("ceilDiv(10^20, 97) is consistent", () => {
    const a = 10n ** 20n;
    const b = 97n;
    const q = a / b;
    const r = a % b;
    const expected = r === 0n ? q : q + 1n;
    assert.strictEqual(ceilDiv(a, b), expected);
  });

  // 7. Division by zero throws
  test("throws RangeError on b = 0", () => {
    assert.throws(() => ceilDiv(1, 0), RangeError);
  });
});