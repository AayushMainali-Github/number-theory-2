import { describe, test } from "node:test";
import assert from "node:assert";
import { floorDiv } from "../../src/arithmetic/floorDiv.js";

describe("floorDiv()", () => {
  test("floorDiv(7,3) → {q:2,r:1}", () => {
    const { q, r } = floorDiv(7, 3);
    assert.strictEqual(q, 2n);
    assert.strictEqual(r, 1n);
  });

  test("floorDiv(-7,3) → {q:-3,r:2}", () => {
    const { q, r } = floorDiv(-7, 3);
    assert.strictEqual(q, -3n);
    assert.strictEqual(r, 2n);
  });

  test("floorDiv(7,-3) → {q:-2,r:1}", () => {
    const { q, r } = floorDiv(7, -3);
    assert.strictEqual(q, -2n);
    assert.strictEqual(r, 1n);
  });

  test("throws division by zero", () => {
    assert.throws(() => floorDiv(1, 0), RangeError);
  });
});