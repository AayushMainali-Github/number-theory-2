import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { cousinPrimesInRange } from "../../src/index.js";

describe("cousinPrimesInRange", () => {
  it("lists cousin pairs in [2, 30]", () => {
    const res = cousinPrimesInRange(2, 30);
    assert.deepEqual(res, [[7n, 11n], [13n, 17n], [19n, 23n]]);
  });

  it("works with BigInt input", () => {
    const res = cousinPrimesInRange(2n, 30n);
    assert.deepEqual(res, [[7n, 11n], [13n, 17n], [19n, 23n]]);
  });

  it("handles empty ranges and boundaries", () => {
    assert.deepEqual(cousinPrimesInRange(14, 16), []);
    assert.deepEqual(cousinPrimesInRange(23, 23), []);
  });

  it("throws when a > b", () => {
    assert.throws(() => cousinPrimesInRange(30, 2), RangeError);
  });
});