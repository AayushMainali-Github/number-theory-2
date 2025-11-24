import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { largestPrimeFactor } from "../../src/index.js";

describe("largestPrimeFactor", () => {
  it("returns null for n < 2", () => {
    assert.equal(largestPrimeFactor(1), null);
    assert.equal(largestPrimeFactor(0), null);
    assert.equal(largestPrimeFactor(-7), null);
  });

  it("returns n for prime n", () => {
    assert.equal(largestPrimeFactor(2), 2n);
    assert.equal(largestPrimeFactor(29), 29n);
  });

  it("handles powers and composites", () => {
    assert.equal(largestPrimeFactor(81), 3n); // 3^4
    assert.equal(largestPrimeFactor(60), 5n); // 2^2 * 3 * 5
    assert.equal(largestPrimeFactor(77), 11n); // semiprime
  });

  it("works with BigInt inputs", () => {
    assert.equal(largestPrimeFactor(625n), 5n);
    assert.equal(largestPrimeFactor(132n), 11n);
  });
});