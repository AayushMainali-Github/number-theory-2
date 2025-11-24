import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { isPrimePower } from "../../src/index.js";

describe("isPrimePower", () => {
  it("returns null for n < 2 and non-powers", () => {
    assert.equal(isPrimePower(1), null);
    assert.equal(isPrimePower(0), null);
    assert.equal(isPrimePower(-1), null);
    assert.equal(isPrimePower(12), null);
    assert.equal(isPrimePower(30), null);
    assert.equal(isPrimePower(7), null); // prime but k must be ≥ 2
  });

  it("detects perfect powers", () => {
    assert.deepEqual(isPrimePower(27), { p: 3n, k: 3 });
    assert.deepEqual(isPrimePower(81), { p: 3n, k: 4 });
    assert.deepEqual(isPrimePower(625), { p: 5n, k: 4 });
  });

  it("supports BigInt inputs", () => {
    assert.deepEqual(isPrimePower(27n), { p: 3n, k: 3 });
    assert.deepEqual(isPrimePower(64n), { p: 2n, k: 6 });
  });

  it("handles negative perfect powers via absolute value", () => {
    assert.deepEqual(isPrimePower(-27), { p: 3n, k: 3 });
  });
});