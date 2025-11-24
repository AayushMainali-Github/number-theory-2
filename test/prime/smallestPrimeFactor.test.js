import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { smallestPrimeFactor } from "../../src/index.js";

describe("smallestPrimeFactor", () => {
  it("returns null for n < 2", () => {
    assert.equal(smallestPrimeFactor(1), null);
    assert.equal(smallestPrimeFactor(0), null);
    assert.equal(smallestPrimeFactor(-10), null);
  });

  it("returns n for prime n", () => {
    assert.equal(smallestPrimeFactor(2), 2n);
    assert.equal(smallestPrimeFactor(13), 13n);
  });

  it("returns the smallest prime for powers and composites", () => {
    assert.equal(smallestPrimeFactor(2 ** 10), 2n);
    assert.equal(smallestPrimeFactor(45), 3n); // 45 = 3 * 3 * 5
    assert.equal(smallestPrimeFactor(64), 2n);
  });

  it("works with BigInt inputs", () => {
    assert.equal(smallestPrimeFactor(81n), 3n);
    assert.equal(smallestPrimeFactor(77n), 7n);
  });
});