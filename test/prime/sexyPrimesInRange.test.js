import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { sexyPrimesInRange } from "../../src/index.js";

describe("sexyPrimesInRange", () => {
  it("lists sexy prime pairs in [2, 30]", () => {
    const res = sexyPrimesInRange(2, 30);
    assert.deepEqual(res, [[23n, 29n]]);
  });

  it("works with BigInt input", () => {
    const res = sexyPrimesInRange(2n, 30n);
    assert.deepEqual(res, [[23n, 29n]]);
  });

  it("handles empty ranges and boundaries", () => {
    assert.deepEqual(sexyPrimesInRange(14, 16), []);
    assert.deepEqual(sexyPrimesInRange(29, 29), []);
  });

  it("throws when a > b", () => {
    assert.throws(() => sexyPrimesInRange(30, 2), RangeError);
  });
});