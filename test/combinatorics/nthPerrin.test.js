import { describe, test } from "node:test";
import assert from "node:assert";
import { nthPerrin } from "../../src/combinatorics/nthPerrin.js";

describe("nthPerrin()", () => {
  // 1. Base cases
  test("nthPerrin(0) → 3", () => {
    assert.strictEqual(nthPerrin(0), 3n);
  });

  test("nthPerrin(1) → 0", () => {
    assert.strictEqual(nthPerrin(1), 0n);
  });

  test("nthPerrin(2) → 2", () => {
    assert.strictEqual(nthPerrin(2), 2n);
  });

  // 2. Known values
  test("nthPerrin(8) → 10", () => {
    assert.strictEqual(nthPerrin(8), 10n);
  });

  test("nthPerrin(10) → 17", () => {
    assert.strictEqual(nthPerrin(10), 17n);
  });

  // 3. Negative input throws
  test("nthPerrin(-1) throws RangeError", () => {
    assert.throws(() => nthPerrin(-1), RangeError);
  });

  // 4. Return type is BigInt
  test("nthPerrin(25) returns BigInt", () => {
    const res = nthPerrin(25);
    assert.strictEqual(typeof res, "bigint");
  });
});
