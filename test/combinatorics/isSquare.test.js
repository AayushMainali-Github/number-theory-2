import { describe, test } from "node:test";
import assert from "node:assert";
import { isSquare } from "../../src/combinatorics/isSquare.js";

describe("isSquare()", () => {
  // 1. Perfect square 1
  test("isSquare(1) → true", () => {
    assert.strictEqual(isSquare(1), true);
  });

  // 2. Perfect square 4
  test("isSquare(4) → true", () => {
    assert.strictEqual(isSquare(4), true);
  });

  // 3. Perfect square 9
  test("isSquare(9) → true", () => {
    assert.strictEqual(isSquare(9), true);
  });

  // 4. Non-square 2
  test("isSquare(2) → false", () => {
    assert.strictEqual(isSquare(2), false);
  });

  // 5. Non-square 10
  test("isSquare(10) → false", () => {
    assert.strictEqual(isSquare(10), false);
  });

  // 6. Large perfect square
  test("isSquare(10000) → true", () => {
    assert.strictEqual(isSquare(10000), true);
  });

  // 7. Large non-square
  test("isSquare(10001) → false", () => {
    assert.strictEqual(isSquare(10001), false);
  });

  // 8. Negative input returns false
  test("isSquare(-9) → false", () => {
    assert.strictEqual(isSquare(-9), false);
  });

  // 9. Zero is a perfect square
  test("isSquare(0) → true", () => {
    assert.strictEqual(isSquare(0), true);
  });

  // 10. BigInt input (perfect square)
  test("isSquare(144n) → true", () => {
    assert.strictEqual(isSquare(144n), true);
  });

  // 11. BigInt input (non-square)
  test("isSquare(145n) → false", () => {
    assert.strictEqual(isSquare(145n), false);
  });

  // 12. Very large BigInt square (10^12)
  test("isSquare(1000000000000n) → true", () => {
    assert.strictEqual(isSquare(1000000000000n), true);
  });

  // 13. Very large BigInt non-square
  test("isSquare(1000000000001n) → false", () => {
    assert.strictEqual(isSquare(1000000000001n), false);
  });

  // 14. Boolean return type
  test("isSquare(81) returns boolean", () => {
    assert.strictEqual(typeof isSquare(81), "boolean");
  });

  // 15. Random check of all perfect squares up to 20²
  test("all squares 1²–20² are true", () => {
    for (let i = 1n; i <= 20n; i++) {
      const sq = i * i;
      assert.strictEqual(isSquare(sq), true);
    }
  });
});
