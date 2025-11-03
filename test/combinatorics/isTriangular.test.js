import { describe, test } from "node:test";
import assert from "node:assert";
import { isTriangular } from "../../src/combinatorics/isTriangular.js";

describe("isTriangular()", () => {
  // 1. Smallest triangular number
  test("isTriangular(1) → true", () => {
    assert.strictEqual(isTriangular(1), true);
  });

  // 2. Second triangular number
  test("isTriangular(3) → true", () => {
    assert.strictEqual(isTriangular(3), true);
  });

  // 3. Medium triangular number
  test("isTriangular(15) → true", () => {
    assert.strictEqual(isTriangular(15), true);
  });

  // 4. Larger triangular number
  test("isTriangular(55) → true", () => {
    assert.strictEqual(isTriangular(55), true);
  });

  // 5. Non-triangular number
  test("isTriangular(14) → false", () => {
    assert.strictEqual(isTriangular(14), false);
  });

  // 6. Random composite non-triangular
  test("isTriangular(20) → false", () => {
    assert.strictEqual(isTriangular(20), false);
  });

  // 7. BigInt input for triangular number
  test("isTriangular(210n) → true", () => {
    assert.strictEqual(isTriangular(210n), true);
  });

  // 8. BigInt input for non-triangular
  test("isTriangular(211n) → false", () => {
    assert.strictEqual(isTriangular(211n), false);
  });

  // 9. Negative number should return false
  test("isTriangular(-10) → false", () => {
    assert.strictEqual(isTriangular(-10), false);
  });

  // 10. Zero should return false
  test("isTriangular(0) → false", () => {
    assert.strictEqual(isTriangular(0), false);
  });

  // 11. Large triangular number (n = 1000 → 500500)
  test("isTriangular(500500) → true", () => {
    assert.strictEqual(isTriangular(500500), true);
  });

  // 12. Large non-triangular near boundary
  test("isTriangular(500499) → false", () => {
    assert.strictEqual(isTriangular(500499), false);
  });

  // 13. Verify all first 10 triangular numbers
  test("first 10 triangular numbers are true", () => {
    const triangulars = [1, 3, 6, 10, 15, 21, 28, 36, 45, 55];
    for (const n of triangulars) {
      assert.strictEqual(isTriangular(n), true);
    }
  });

  // 14. Verify non-triangular values between 1–30 are false
  test("non-triangular numbers in 1–30 → false", () => {
    const triangulars = new Set([1, 3, 6, 10, 15, 21, 28]);
    for (let i = 1; i <= 30; i++) {
      if (!triangulars.has(i)) {
        assert.strictEqual(isTriangular(i), false);
      }
    }
  });

  // 15. Large BigInt triangular (n=1e6 → 500000500000)
  test("isTriangular(500000500000n) → true", () => {
    assert.strictEqual(isTriangular(500000500000n), true);
  });

  // 16. Ensure function returns boolean type
  test("isTriangular(45) returns boolean", () => {
    assert.strictEqual(typeof isTriangular(45), "boolean");
  });
});
