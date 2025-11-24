import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { maxPrimeGapUpTo } from "../../src/index.js";

describe("maxPrimeGapUpTo", () => {
  it("returns zeros for n < 2", () => {
    assert.deepEqual(maxPrimeGapUpTo(1), { gap: 0n, from: 0n, to: 0n });
    assert.deepEqual(maxPrimeGapUpTo(-10), { gap: 0n, from: 0n, to: 0n });
  });

  it("handles single prime case at n = 2", () => {
    assert.deepEqual(maxPrimeGapUpTo(2), { gap: 0n, from: 2n, to: 2n });
  });

  it("finds correct max gap up to 20", () => {
    const res = maxPrimeGapUpTo(20);
    assert.equal(res.gap, 4n);
    assert.equal(res.from, 7n);
    assert.equal(res.to, 11n);
    assert.equal(res.to - res.from, res.gap);
  });

  it("works with BigInt input", () => {
    const res = maxPrimeGapUpTo(20n);
    assert.equal(res.gap, 4n);
    assert.equal(res.from, 7n);
    assert.equal(res.to, 11n);
  });
});