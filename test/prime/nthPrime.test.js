import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { nthPrime } from "../../src/index.js";

describe("nthPrime", () => {
  it("handles small n correctly", () => {
    assert.equal(nthPrime(1), 2n);
    assert.equal(nthPrime(2), 3n);
    assert.equal(nthPrime(3), 5n);
    assert.equal(nthPrime(4), 7n);
    assert.equal(nthPrime(5), 11n);
    assert.equal(nthPrime(6), 13n);
  });

  it("returns known values for larger n", () => {
    assert.equal(nthPrime(10), 29n);
    assert.equal(nthPrime(100), 541n);
    assert.equal(nthPrime(1000), 7919n);
  });

  it("accepts BigInt input", () => {
    assert.equal(nthPrime(10n), 29n);
  });

  it("rejects non-positive or non-integer k", () => {
    assert.throws(() => nthPrime(0), RangeError);
    assert.throws(() => nthPrime(-3), RangeError);
    assert.throws(() => nthPrime(1.5), RangeError);
  });
});
