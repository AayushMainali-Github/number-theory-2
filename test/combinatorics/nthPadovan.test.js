import { describe, test } from "node:test";
import assert from "node:assert";
import { nthPadovan } from "../../src/combinatorics/nthPadovan.js";

describe("nthPadovan()", () => {
  // 1. Base cases
  test("nthPadovan(0) → 1", () => {
    assert.strictEqual(nthPadovan(0), 1n);
  });

  test("nthPadovan(1) → 1", () => {
    assert.strictEqual(nthPadovan(1), 1n);
  });

  test("nthPadovan(2) → 1", () => {
    assert.strictEqual(nthPadovan(2), 1n);
  });

  // 2. Known values
  test("nthPadovan(5) → 3", () => {
    assert.strictEqual(nthPadovan(5), 3n);
  });

  test("nthPadovan(8) → 7", () => {
    assert.strictEqual(nthPadovan(8), 7n);
  });

  test("nthPadovan(12) → 21", () => {
    assert.strictEqual(nthPadovan(12), 21n);
  });

  // 3. Negative input throws
  test("nthPadovan(-1) throws RangeError", () => {
    assert.throws(() => nthPadovan(-1), RangeError);
  });

  // 4. Return type is BigInt
  test("nthPadovan(25) returns BigInt", () => {
    const res = nthPadovan(25);
    assert.strictEqual(typeof res, "bigint");
  });
});