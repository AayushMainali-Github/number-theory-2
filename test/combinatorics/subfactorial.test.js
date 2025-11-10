import { describe, test } from "node:test";
import assert from "node:assert";
import { subfactorial } from "../../src/combinatorics/subfactorial.js";

describe("subfactorial()", () => {
  // 1. Base cases
  test("subfactorial(0) → 1", () => {
    assert.strictEqual(subfactorial(0), 1n);
  });

  test("subfactorial(1) → 0", () => {
    assert.strictEqual(subfactorial(1), 0n);
  });

  test("subfactorial(2) → 1", () => {
    assert.strictEqual(subfactorial(2), 1n);
  });

  // 2. Known values
  test("subfactorial(3) → 2", () => {
    assert.strictEqual(subfactorial(3), 2n);
  });

  test("subfactorial(6) → 265", () => {
    assert.strictEqual(subfactorial(6), 265n);
  });

  // 3. BigInt input
  test("subfactorial(25n) returns BigInt", () => {
    const res = subfactorial(25n);
    assert.strictEqual(typeof res, "bigint");
  });

  // 4. Negative throws
  test("subfactorial(-1) throws RangeError", () => {
    assert.throws(() => subfactorial(-1), RangeError);
  });
});
