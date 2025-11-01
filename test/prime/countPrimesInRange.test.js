import { describe, test } from "node:test";
import assert from "node:assert";
import { countPrimesInRange } from "../../src/prime/countPrimesInRange.js";

describe("countPrimesInRange()", () => {
  // 1. Simple range
  test("countPrimesInRange(10, 30) → 6", () => {
    assert.strictEqual(countPrimesInRange(10, 30), 6n);
  });

  // 2. From 1 to 10 → 4 primes (2,3,5,7)
  test("countPrimesInRange(1, 10) → 4", () => {
    assert.strictEqual(countPrimesInRange(1, 10), 4n);
  });

  // 3. Equal bounds at prime → 1
  test("countPrimesInRange(13, 13) → 1", () => {
    assert.strictEqual(countPrimesInRange(13, 13), 1n);
  });

  // 4. Equal bounds at non-prime → 0
  test("countPrimesInRange(15, 15) → 0", () => {
    assert.strictEqual(countPrimesInRange(15, 15), 0n);
  });

  // 5. Range with negative start → 4
  test("countPrimesInRange(-50, 10) → 4", () => {
    assert.strictEqual(countPrimesInRange(-50, 10), 4n);
  });

  // 6. Larger range check
  test("countPrimesInRange(1, 100) → 25", () => {
    assert.strictEqual(countPrimesInRange(1, 100), 25n);
  });

  // 7. Range containing no primes
  test("countPrimesInRange(90, 90) → 0", () => {
    assert.strictEqual(countPrimesInRange(90, 90), 0n);
  });

  // 8. b < a → RangeError
  test("countPrimesInRange(100, 10) throws RangeError", () => {
    assert.throws(() => countPrimesInRange(100, 10), RangeError);
  });

  // 9. Entirely below 2 → 0
  test("countPrimesInRange(-10, 1) → 0", () => {
    assert.strictEqual(countPrimesInRange(-10, 1), 0n);
  });

  // 10. BigInt input
  test("countPrimesInRange(10n, 30n) → 6n", () => {
    assert.strictEqual(countPrimesInRange(10n, 30n), 6n);
  });
});
