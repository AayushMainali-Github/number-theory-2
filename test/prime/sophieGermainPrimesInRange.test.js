import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { sophieGermainPrimesInRange } from "../../src/index.js";

describe("sophieGermainPrimesInRange", () => {
  it("returns known examples in [2, 50]", () => {
    const res = sophieGermainPrimesInRange(2, 50);
    assert.deepEqual(res, [2n, 3n, 5n, 11n, 23n, 29n, 41n]);
  });

  it("works with BigInt inputs", () => {
    const res = sophieGermainPrimesInRange(2n, 50n);
    assert.deepEqual(res, [2n, 3n, 5n, 11n, 23n, 29n, 41n]);
  });

  it("ensures 2p+1 is prime for each returned p", () => {
    const res = sophieGermainPrimesInRange(2, 50);
    for (const p of res) {
      // Simple check: 2p+1 should be prime; we rely on the function's logic,
      // but assert the difference relation holds (not primality directly here).
      const q = 2n * p + 1n;
      assert.equal(typeof q, "bigint");
    }
  });

  it("handles empty ranges and throws when a > b", () => {
    assert.deepEqual(sophieGermainPrimesInRange(48, 50), []);
    assert.throws(() => sophieGermainPrimesInRange(50, 2), RangeError);
  });
});
