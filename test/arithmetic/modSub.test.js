import { test, describe } from "node:test";
import assert from "node:assert";
import { modSub } from "../../src/arithmetic/modSub.js";
import { mod } from "../../src/arithmetic/mod.js";

describe("modSub()", () => {
  // 1. Basic
  test("modSub(7,9,10) → 8", () => {
    assert.strictEqual(modSub(7, 9, 10), 8n);
  });

  // 2. Equal values → 0
  test("modSub(5,5,13) → 0", () => {
    assert.strictEqual(modSub(5, 5, 13), 0n);
  });

  // 3. Negative b
  test("modSub(3,-4,7) → 0", () => {
    assert.strictEqual(modSub(3, -4, 7), 0n);
  });

  // 4. Negative a
  test("modSub(-3,4,7) → 0", () => {
    assert.strictEqual(modSub(-3, 4, 7), 0n);
  });

  // 5. Mixed types
  test("modSub(20n, 7, 13) → 0", () => {
    assert.strictEqual(modSub(20n, 7, 13), 0n);
  });

  // 6. Property vs mod(a-b,m)
  test("modSub equals mod(a-b, m)", () => {
    const a = -123456789n;
    const b = 987654321n;
    const m = 1000003n;
    assert.strictEqual(modSub(a, b, m), mod(a - b, m));
  });

  // 7. Non-positive modulus throws
  test("throws RangeError on m ≤ 0", () => {
    assert.throws(() => modSub(1, 2, 0), RangeError);
    assert.throws(() => modSub(1, 2, -5), RangeError);
  });
});
