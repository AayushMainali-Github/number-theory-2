import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { sumOfPrimes } from "../../src/index.js";

describe("sumOfPrimes", () => {
  it("sums primes ≤ 10 to 17", () => {
    assert.equal(sumOfPrimes(10), 17n);
  });

  it("sums primes ≤ 100 to 1060", () => {
    assert.equal(sumOfPrimes(100), 1060n);
  });

  it("works with BigInt input", () => {
    assert.equal(sumOfPrimes(10n), 17n);
  });

  it("returns 0n for n < 2", () => {
    assert.equal(sumOfPrimes(1), 0n);
    assert.equal(sumOfPrimes(-5), 0n);
  });
});
