import { describe, test } from "node:test";
import assert from "node:assert";
import { doubleFactorial } from "../../src/combinatorics/doubleFactorial.js";

describe("doubleFactorial()", () => {
  // 1. Base cases
  test("doubleFactorial(0) → 1", () => {
    assert.strictEqual(doubleFactorial(0), 1n);
  });

  test("doubleFactorial(1) → 1", () => {
    assert.strictEqual(doubleFactorial(1), 1n);
  });

  // 2. Known values
  test("doubleFactorial(7) → 105", () => {
    assert.strictEqual(doubleFactorial(7), 105n);
  });

  test("doubleFactorial(10) → 3840", () => {
    assert.strictEqual(doubleFactorial(10), 3840n);
  });

  // 3. BigInt input
  test("doubleFactorial(15n) returns BigInt", () => {
    const res = doubleFactorial(15n);
    assert.strictEqual(typeof res, "bigint");
  });

  // 4. Negative throws
  test("doubleFactorial(-1) throws RangeError", () => {
    assert.throws(() => doubleFactorial(-1), RangeError);
  });
});