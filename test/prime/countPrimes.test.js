import { describe, test } from "node:test";
import assert from "node:assert";
import { countPrimes } from "../../src/prime/countPrimes.js";

describe("countPrimes()", () => {
  // 1. Small range
  test("countPrimes(10) → 4", () => {
    assert.strictEqual(countPrimes(10), 4n);
  });

  // 2. countPrimes(2) → 1
  test("countPrimes(2) → 1", () => {
    assert.strictEqual(countPrimes(2), 1n);
  });

  // 3. countPrimes(30) → 10
  test("countPrimes(30) → 10", () => {
    assert.strictEqual(countPrimes(30), 10n);
  });

  // 4. countPrimes(100) → 25
  test("countPrimes(100) → 25", () => {
    assert.strictEqual(countPrimes(100), 25n);
  });

  // 5. countPrimes(1000) → 168
  test("countPrimes(1000) → 168", () => {
    assert.strictEqual(countPrimes(1000), 168n);
  });

  // 6. n < 2 should return 0
  test("countPrimes(1) → 0", () => {
    assert.strictEqual(countPrimes(1), 0n);
  });

  // 7. n < 2 should return 0
  test("countPrimes(0) → 0", () => {
    assert.strictEqual(countPrimes(0), 0n);
  });

  // 8. n < 2 should return 0
  test("countPrimes(-10) → 0", () => {
    assert.strictEqual(countPrimes(-10), 0n);
  });

  // 9. Works for BigInt
  test("countPrimes(100n) → 25n", () => {
    assert.strictEqual(countPrimes(100n), 25n);
  });

  // 10. Performance check
  test("countPrimes(1e5) runs", () => {
    const result = countPrimes(100000);
    assert(result > 0n);
  });
});
