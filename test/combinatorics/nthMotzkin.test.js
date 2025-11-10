import { describe, test } from "node:test";
import assert from "node:assert";
import { nthMotzkin } from "../../src/combinatorics/nthMotzkin.js";

describe("nthMotzkin()", () => {
  // 1. Base cases
  test("nthMotzkin(0) → 1", () => {
    assert.strictEqual(nthMotzkin(0), 1n);
  });

  test("nthMotzkin(1) → 1", () => {
    assert.strictEqual(nthMotzkin(1), 1n);
  });

  // 2. Known values
  test("nthMotzkin(6) → 51", () => {
    assert.strictEqual(nthMotzkin(6), 51n);
  });

  test("nthMotzkin(10) → 2188", () => {
    assert.strictEqual(nthMotzkin(10), 2188n);
  });

  // 3. Negative input throws
  test("nthMotzkin(-1) throws RangeError", () => {
    assert.throws(() => nthMotzkin(-1), RangeError);
  });

  // 4. Return type is BigInt
  test("nthMotzkin(20) returns BigInt", () => {
    const res = nthMotzkin(20);
    assert.strictEqual(typeof res, "bigint");
  });
});
