import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { prevPrime } from "../../src/index.js";

describe("prevPrime", () => {
  it("returns 2 for n=2", () => {
    assert.equal(prevPrime(2), 2n);
  });

  it("returns 97 for n=100", () => {
    assert.equal(prevPrime(100), 97n);
  });

  it("works with BigInt input", () => {
    assert.equal(prevPrime(100n), 97n);
  });

  it("returns null for n < 2", () => {
    assert.equal(prevPrime(1), null);
    assert.equal(prevPrime(-10), null);
    assert.equal(prevPrime(1n), null);
  });
});
