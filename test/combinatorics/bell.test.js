import { describe, test } from "node:test";
import assert from "node:assert";
import { bell } from "../../src/combinatorics/bell.js";

// Known Bell numbers (n=0..15):
// 1, 1, 2, 5, 15, 52, 203, 877, 4140, 21147,
// 115975, 678570, 4213597, 27644437, 190899322, 1382958545

describe("bell()", () => {
  // 1. Base cases
  test("bell(0) → 1", () => {
    assert.strictEqual(bell(0), 1n);
  });

  test("bell(1) → 1", () => {
    assert.strictEqual(bell(1), 1n);
  });

  // 2. Small values
  test("bell(2) → 2", () => {
    assert.strictEqual(bell(2), 2n);
  });

  test("bell(3) → 5", () => {
    assert.strictEqual(bell(3), 5n);
  });

  test("bell(4) → 15", () => {
    assert.strictEqual(bell(4), 15n);
  });

  test("bell(5) → 52", () => {
    assert.strictEqual(bell(5), 52n);
  });

  // 3. Medium values
  test("bell(8) → 4140", () => {
    assert.strictEqual(bell(8), 4140n);
  });

  test("bell(9) → 21147", () => {
    assert.strictEqual(bell(9), 21147n);
  });

  test("bell(10) → 115975 (BigInt input)", () => {
    assert.strictEqual(bell(10n), 115975n);
  });

  // 4. Larger values to validate triangle logic
  test("bell(12) → 4213597", () => {
    assert.strictEqual(bell(12), 4213597n);
  });

  test("bell(13) → 27644437", () => {
    assert.strictEqual(bell(13), 27644437n);
  });

  test("bell(14) → 190899322", () => {
    assert.strictEqual(bell(14), 190899322n);
  });

  // 5. Type and error checks
  test("returns BigInt", () => {
    assert.strictEqual(typeof bell(6), "bigint");
  });

  test("negative n throws RangeError", () => {
    assert.throws(() => bell(-1), RangeError);
  });
});
