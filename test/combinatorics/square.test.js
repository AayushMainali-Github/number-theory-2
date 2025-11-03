import { describe, test } from "node:test";
import assert from "node:assert";
import { square } from "../../src/combinatorics/square.js";

describe("square()", () => {
  // 1. First square number
  test("square(1) → 1", () => {
    assert.strictEqual(square(1), 1n);
  });

  // 2. Second square number
  test("square(2) → 4", () => {
    assert.strictEqual(square(2), 4n);
  });

  // 3. Fifth square number
  test("square(5) → 25", () => {
    assert.strictEqual(square(5), 25n);
  });

  // 4. Tenth square number
  test("square(10) → 100", () => {
    assert.strictEqual(square(10), 100n);
  });

  // 5. Large square
  test("square(1000) → 1,000,000", () => {
    assert.strictEqual(square(1000), 1_000_000n);
  });

  // 6. BigInt input
  test("square(100n) → 10,000", () => {
    assert.strictEqual(square(100n), 10_000n);
  });

  // 7. Large BigInt
  test("square(1_000_000n) → 1,000,000²", () => {
    assert.strictEqual(square(1_000_000n), 1_000_000n * 1_000_000n);
  });

  // 8. Negative input throws
  test("square(-5) throws RangeError", () => {
    assert.throws(() => square(-5), RangeError);
  });

  // 9. Zero throws
  test("square(0) throws RangeError", () => {
    assert.throws(() => square(0), RangeError);
  });

  // 10. Return type is BigInt
  test("square(10) returns BigInt", () => {
    assert.strictEqual(typeof square(10), "bigint");
  });

  // 11. Consistency check
  test("square(20) = 400", () => {
    assert.strictEqual(square(20), 400n);
  });

  // 12. Compare differences (odd sequence)
  test("square(n+1) - square(n) = 2n + 1", () => {
    for (let i = 1n; i <= 50n; i++) {
      const diff = square(i + 1n) - square(i);
      assert.strictEqual(diff, 2n * i + 1n);
    }
  });

  // 13. Compare square(12) with 144
  test("square(12) → 144", () => {
    assert.strictEqual(square(12), 144n);
  });

  // 14. square(10000) = 100 million
  test("square(10000) → 100_000_000", () => {
    assert.strictEqual(square(10000), 100_000_000n);
  });

  // 15. square(50) = 2500
  test("square(50) → 2500", () => {
    assert.strictEqual(square(50), 2500n);
  });
});
