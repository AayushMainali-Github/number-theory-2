import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { primeGapAt } from "../../src/index.js";

describe("primeGapAt", () => {
  it("returns {97, 101, 4} near n=100", () => {
    const { p, next, gap } = primeGapAt(100);
    assert.equal(p, 97n);
    assert.equal(next, 101n);
    assert.equal(gap, 4n);
  });

  it("boundary at n=2", () => {
    const { p, next, gap } = primeGapAt(2);
    assert.equal(p, 2n);
    assert.equal(next, 3n);
    assert.equal(gap, 1n);
  });

  it("works with BigInt input", () => {
    const { p, next, gap } = primeGapAt(100n);
    assert.equal(p, 97n);
    assert.equal(next, 101n);
    assert.equal(gap, 4n);
  });
});
