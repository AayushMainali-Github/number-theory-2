import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { twinPrimesInRange } from "../../src/index.js";

describe("twinPrimesInRange", () => {
  it("finds twin primes in [2, 20]", () => {
    const res = twinPrimesInRange(2, 20);
    assert.deepEqual(res, [
      [3n, 5n],
      [5n, 7n],
      [11n, 13n],
      [17n, 19n],
    ]);
  });

  it("returns empty when no pairs exist", () => {
    assert.deepEqual(twinPrimesInRange(14, 16), []);
  });

  it("works with BigInt inputs", () => {
    const res = twinPrimesInRange(2n, 20n);
    assert.deepEqual(res, [
      [3n, 5n],
      [5n, 7n],
      [11n, 13n],
      [17n, 19n],
    ]);
  });

  it("throws when a > b", () => {
    assert.throws(() => twinPrimesInRange(20, 2), RangeError);
  });
});
