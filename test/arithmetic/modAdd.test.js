import { test, describe } from "node:test";
import assert from "node:assert";
import { modAdd } from "../../src/arithmetic/modAdd.js";
import { mod } from "../../src/arithmetic/mod.js";

describe("modAdd()", () => {
  // 1. Basic
  test("modAdd(7,9,10) → 6", () => {
    assert.strictEqual(modAdd(7, 9, 10), 6n);
  });

  // 2. Negative a
  test("modAdd(-3,4,7) → 1", () => {
    assert.strictEqual(modAdd(-3, 4, 7), 1n);
  });

  // 3. Negative b
  test("modAdd(3,-4,7) → 6", () => {
    assert.strictEqual(modAdd(3, -4, 7), 6n);
  });

  // 4. Zero addition
  test("modAdd(10,0,13) → 10", () => {
    assert.strictEqual(modAdd(10, 0, 13), 10n);
  });

  // 5. Wrap to 0 when sum multiple of m
  test("modAdd(10,10,10) → 0", () => {
    assert.strictEqual(modAdd(10, 10, 10), 0n);
  });

  // 6. Mixed types
  test("modAdd(5n, 8, 13) → 0", () => {
    assert.strictEqual(modAdd(5n, 8, 13), 0n);
  });

  // 7. Large BigInt correctness
  test("modAdd(10^20, 97^7, 97) equals mod((a+b),m)", () => {
    const a = 10n ** 20n;
    const b = 97n ** 7n;
    const m = 97n;
    assert.strictEqual(modAdd(a, b, m), mod(a + b, m));
  });

  // 8. Modulus 1 → always 0
  test("modAdd(any, any, 1) → 0", () => {
    assert.strictEqual(modAdd(12345, 678, 1), 0n);
  });

  // 9. Non-positive modulus throws
  test("throws RangeError on m ≤ 0", () => {
    assert.throws(() => modAdd(1, 2, 0), RangeError);
    assert.throws(() => modAdd(1, 2, -5), RangeError);
  });
});