import { describe, test } from "node:test";
import assert from "node:assert";
import { mobius } from "../../src/function/mobius.js";

describe("mobius()", () => {
  // 1. μ(1) = 1
  test("mobius(1) → 1", () => {
    assert.strictEqual(mobius(1), 1n);
  });

  // 2. μ(2) = -1 (prime)
  test("mobius(2) → -1", () => {
    assert.strictEqual(mobius(2), -1n);
  });

  // 3. μ(6) = 1 (2×3)
  test("mobius(6) → 1", () => {
    assert.strictEqual(mobius(6), 1n);
  });

  // 4. μ(12) = 0 (2²×3)
  test("mobius(12) → 0", () => {
    assert.strictEqual(mobius(12), 0n);
  });

  // 5. μ(30) = -1 (2×3×5)
  test("mobius(30) → -1", () => {
    assert.strictEqual(mobius(30), -1n);
  });

  // 6. μ(210) = 1 (2×3×5×7 → 4 distinct primes)
  test("mobius(210) → 1", () => {
    assert.strictEqual(mobius(210), 1n);
  });

  // 7. μ(13²) = 0
  test("mobius(13²) → 0", () => {
    assert.strictEqual(mobius(13n ** 2n), 0n);
  });

  // 8. μ(2×3×7) = -1
  test("mobius(42) → -1", () => {
    assert.strictEqual(mobius(42), -1n);
  });

  // 9. Large semiprime (2 distinct primes)
  test("mobius(99991 * 10007) → 1", () => {
    const p = 99991n,
      q = 10007n;
    assert.strictEqual(mobius(p * q), 1n);
  });

  // 10. Throws RangeError for n = 0
  test("mobius(0) throws RangeError", () => {
    assert.throws(() => mobius(0), RangeError);
  });

  // 11. Throws RangeError for n < 0
  test("mobius(-10) throws RangeError", () => {
    assert.throws(() => mobius(-10), RangeError);
  });
});
