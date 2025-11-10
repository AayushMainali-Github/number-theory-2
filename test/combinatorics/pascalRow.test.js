import { describe, test } from "node:test";
import assert from "node:assert";
import { pascalRow } from "../../src/combinatorics/pascalRow.js";
import { combination } from "../../src/combinatorics/combination.js";

describe("pascalRow()", () => {
  // 1. Base cases
  test("pascalRow(0) → [1]", () => {
    assert.deepStrictEqual(pascalRow(0), [1n]);
  });

  test("pascalRow(1) → [1,1]", () => {
    assert.deepStrictEqual(pascalRow(1), [1n, 1n]);
  });

  // 2. Row correctness
  test("pascalRow(6) → [1,6,15,20,15,6,1]", () => {
    assert.deepStrictEqual(pascalRow(6), [1n, 6n, 15n, 20n, 15n, 6n, 1n]);
  });

  // 3. Matches combination values
  test("pascalRow(10)[k] = C(10,k)", () => {
    const row = pascalRow(10);
    row.forEach((val, k) => {
      assert.strictEqual(val, combination(10, k));
    });
  });

  // 4. Type and length checks
  test("returns array of BigInts and has length n+1", () => {
    const n = 12;
    const row = pascalRow(n);
    assert.strictEqual(row.length, n + 1);
    assert.ok(row.every((v) => typeof v === "bigint"));
  });

  // 5. Domain errors
  test("pascalRow(-1) throws RangeError", () => {
    assert.throws(() => pascalRow(-1), RangeError);
  });
});