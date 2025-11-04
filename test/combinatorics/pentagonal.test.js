import { describe, test } from "node:test";
import assert from "node:assert";
import { pentagonal } from "../../src/combinatorics/pentagonal.js";

describe("pentagonal()", () => {
  // 1. First term
  test("pentagonal(1) → 1", () => {
    assert.strictEqual(pentagonal(1), 1n);
  });

  // 2. Second term
  test("pentagonal(2) → 5", () => {
    assert.strictEqual(pentagonal(2), 5n);
  });

  // 3. Fifth term
  test("pentagonal(5) → 35", () => {
    assert.strictEqual(pentagonal(5), 35n);
  });

  // 4. Tenth term
  test("pentagonal(10) → 145", () => {
    assert.strictEqual(pentagonal(10), 145n);
  });

  // 5. Large value
  test("pentagonal(100) → 14850", () => {
    assert.strictEqual(pentagonal(100), 14950n);
  });

  // 6. BigInt input
  test("pentagonal(50n) → 3725", () => {
    assert.strictEqual(pentagonal(50n), 3725n);
  });

  // 7. Large BigInt
  test("pentagonal(1000n) runs", () => {
    const val = pentagonal(1000n);
    assert.strictEqual(typeof val, "bigint");
    assert(val > 0n);
  });

  // 8. Negative input throws
  test("pentagonal(-5) throws RangeError", () => {
    assert.throws(() => pentagonal(-5), RangeError);
  });

  // 9. Zero input throws
  test("pentagonal(0) throws RangeError", () => {
    assert.throws(() => pentagonal(0), RangeError);
  });

  // 10. Return type check
  test("pentagonal(10) returns BigInt", () => {
    assert.strictEqual(typeof pentagonal(10), "bigint");
  });

  // 11. Cross-check formula manually for n=3
  test("pentagonal(3) = 12", () => {
    assert.strictEqual(pentagonal(3), 12n);
  });

  // 12. Difference between terms follows 3n - 2 pattern
  test("pentagonal(n+1) - pentagonal(n) = 3n + 1", () => {
    for (let i = 1n; i <= 50n; i++) {
      const diff = pentagonal(i + 1n) - pentagonal(i);
      assert.strictEqual(diff, 3n * i + 1n);
    }
  });
});