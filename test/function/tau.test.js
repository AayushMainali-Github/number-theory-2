import { describe, test } from "node:test";
import assert from "node:assert";
import { tau } from "../../src/function/tau.js";

describe("tau()", () => {
  // 1. Base case: τ(1) = 1
  test("tau(1) → 1", () => {
    assert.strictEqual(tau(1), 1n);
  });

  // 2. Prime: τ(p) = 2
  test("tau(7) → 2", () => {
    assert.strictEqual(tau(7), 2n);
  });

  // 3. Composite: τ(6) = 4 (1,2,3,6)
  test("tau(6) → 4", () => {
    assert.strictEqual(tau(6), 4n);
  });

  // 4. τ(12) = 6 (1,2,3,4,6,12)
  test("tau(12) → 6", () => {
    assert.strictEqual(tau(12), 6n);
  });

  // 5. τ(36) = 9 (1,2,3,4,6,9,12,18,36)
  test("tau(36) → 9", () => {
    assert.strictEqual(tau(36), 9n);
  });

  // 6. τ(25) = 3 (1,5,25)
  test("tau(25) → 3", () => {
    assert.strictEqual(tau(25), 3n);
  });

  // 7. τ(100) = 9 (2²×5² → (2+1)(2+1))
  test("tau(100) → 9", () => {
    assert.strictEqual(tau(100), 9n);
  });

  // 8. Prime power p³ → 4 divisors
  test("tau(2³) → 4", () => {
    assert.strictEqual(tau(8), 4n);
  });

  // 9. Large semiprime p*q → 4 divisors
  test("tau(99991 * 10007) → 4", () => {
    const n = 99991n * 10007n;
    assert.strictEqual(tau(n), 4n);
  });

  // 10. Works with BigInt input
  test("tau(36n) → 9n", () => {
    assert.strictEqual(tau(36n), 9n);
  });

  // 11. Throws on invalid inputs
  test("tau(0) throws", () => {
    assert.throws(() => tau(0), RangeError);
  });

  // 12. Negative numbers throw
  test("tau(-5) throws", () => {
    assert.throws(() => tau(-5), RangeError);
  });
});
