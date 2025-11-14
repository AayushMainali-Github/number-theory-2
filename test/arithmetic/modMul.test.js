import { test, describe } from "node:test";
import assert from "node:assert";
import { modMul } from "../../src/arithmetic/modMul.js";
import { mod } from "../../src/arithmetic/mod.js";

describe("modMul()", () => {
  // 1. Basic
  test("modMul(7,9,10) → 3", () => {
    assert.strictEqual(modMul(7, 9, 10), 3n);
  });

  // 2. Negative a
  test("modMul(-3,4,7) → 2", () => {
    assert.strictEqual(modMul(-3, 4, 7), 2n);
  });

  // 3. Negative b
  test("modMul(3,-4,7) → 2", () => {
    assert.strictEqual(modMul(3, -4, 7), 2n);
  });

  // 4. Mixed types
  test("modMul(5n, 8, 13) → 1", () => {
    assert.strictEqual(modMul(5n, 8, 13), 1n);
  });

  // 5. Large BigInt correctness
  test("modMul(10^20, 10^20, 1009) equals mod(a*b,m)", () => {
    const a = 10n ** 20n;
    const b = 10n ** 20n;
    const m = 1009n;
    assert.strictEqual(modMul(a, b, m), mod(a * b, m));
  });

  // 6. Modulus 1 → 0
  test("modMul(any, any, 1) → 0", () => {
    assert.strictEqual(modMul(123, 456, 1), 0n);
  });

  // 7. Non-positive modulus throws
  test("throws RangeError on m ≤ 0", () => {
    assert.throws(() => modMul(1, 2, 0), RangeError);
    assert.throws(() => modMul(1, 2, -5), RangeError);
  });
});
