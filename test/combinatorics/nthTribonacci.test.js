import { describe, test } from "node:test";
import assert from "node:assert";
import { nthTribonacci } from "../../src/combinatorics/nthTribonacci.js";

describe("nthTribonacci()", () => {
  // 1. Base cases
  test("nthTribonacci(0) → 0", () => {
    assert.strictEqual(nthTribonacci(0), 0n);
  });

  test("nthTribonacci(1) → 0", () => {
    assert.strictEqual(nthTribonacci(1), 0n);
  });

  test("nthTribonacci(2) → 1", () => {
    assert.strictEqual(nthTribonacci(2), 1n);
  });

  // 2. First few known terms
  test("nthTribonacci(3) → 1", () => {
    assert.strictEqual(nthTribonacci(3), 1n);
  });

  test("nthTribonacci(4) → 2", () => {
    assert.strictEqual(nthTribonacci(4), 2n);
  });

  test("nthTribonacci(6) → 7", () => {
    assert.strictEqual(nthTribonacci(6), 7n);
  });

  test("nthTribonacci(10) → 81", () => {
    assert.strictEqual(nthTribonacci(10), 81n);
  });

  // 3. Negative input throws
  test("nthTribonacci(-1) throws RangeError", () => {
    assert.throws(() => nthTribonacci(-1), RangeError);
  });

  // 4. Return type is BigInt
  test("nthTribonacci(25) returns BigInt", () => {
    const res = nthTribonacci(25);
    assert.strictEqual(typeof res, "bigint");
  });

  // 5. Recurrence check: T(n) = T(n-1)+T(n-2)+T(n-3)
  test("T(9) = T(8) + T(7) + T(6)", () => {
    const T9 = nthTribonacci(9);
    const T8 = nthTribonacci(8);
    const T7 = nthTribonacci(7);
    const T6 = nthTribonacci(6);
    assert.strictEqual(T9, T8 + T7 + T6);
  });
});
