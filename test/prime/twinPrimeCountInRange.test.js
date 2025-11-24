import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { twinPrimeCountInRange } from "../../src/index.js";

describe("twinPrimeCountInRange", () => {
  it("counts twin primes in [2, 20]", () => {
    assert.equal(twinPrimeCountInRange(2, 20), 4);
  });

  it("returns 0 for ranges without pairs", () => {
    assert.equal(twinPrimeCountInRange(14, 16), 0);
  });

  it("works with BigInt inputs", () => {
    assert.equal(twinPrimeCountInRange(2n, 20n), 4);
  });

  it("throws when a > b", () => {
    assert.throws(() => twinPrimeCountInRange(20, 2), RangeError);
  });
});