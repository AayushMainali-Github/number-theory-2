import { describe, test } from "node:test";
import assert from "node:assert";
import { isPentagonal } from "../../src/combinatorics/isPentagonal.js";

describe("isPentagonal()", () => {
  // 1. First pentagonal number
  test("isPentagonal(1) → true", () => {
    assert.strictEqual(isPentagonal(1), true);
  });

  // 2. Second pentagonal number
  test("isPentagonal(5) → true", () => {
    assert.strictEqual(isPentagonal(5), true);
  });

  // 3. Third pentagonal number
  test("isPentagonal(12) → true", () => {
    assert.strictEqual(isPentagonal(12), true);
  });

  // 4. Non-pentagonal number
  test("isPentagonal(13) → false", () => {
    assert.strictEqual(isPentagonal(13), false);
  });

  // 5. Fifth pentagonal number
  test("isPentagonal(35) → true", () => {
    assert.strictEqual(isPentagonal(35), true);
  });

  // 6. Random non-pentagonal number
  test("isPentagonal(36) → false", () => {
    assert.strictEqual(isPentagonal(36), false);
  });

  // 7. BigInt input (valid)
  test("isPentagonal(145n) → true", () => {
    assert.strictEqual(isPentagonal(145n), true);
  });

  // 8. BigInt input (invalid)
  test("isPentagonal(146n) → false", () => {
    assert.strictEqual(isPentagonal(146n), false);
  });

  // 9. Negative number returns false
  test("isPentagonal(-12) → false", () => {
    assert.strictEqual(isPentagonal(-12), false);
  });

  // 10. Zero returns false
  test("isPentagonal(0) → false", () => {
    assert.strictEqual(isPentagonal(0), false);
  });

  // 11. Large pentagonal number
  test("isPentagonal(14950) → true", () => {
    assert.strictEqual(isPentagonal(14950), true);
  });

  // 12. Boundary off-by-one
  test("isPentagonal(14849) → false", () => {
    assert.strictEqual(isPentagonal(14849), false);
  });

  // 13. All first 10 pentagonal numbers are true
  test("first 10 pentagonal numbers → true", () => {
    const pentas = [1, 5, 12, 22, 35, 51, 70, 92, 117, 145];
    for (const n of pentas) {
      assert.strictEqual(isPentagonal(n), true);
    }
  });

  // 14. Boolean return type
  test("isPentagonal(35) returns boolean", () => {
    assert.strictEqual(typeof isPentagonal(35), "boolean");
  });

  // 15. Very large BigInt pentagonal
  test("isPentagonal(pentagonal(10000n)) → true", () => {
    const bigPenta = (10000n * (3n * 10000n - 1n)) / 2n;
    assert.strictEqual(isPentagonal(bigPenta), true);
  });
});
