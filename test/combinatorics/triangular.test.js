import { describe, test } from "node:test";
import assert from "node:assert";
import { triangular } from "../../src/combinatorics/triangular.js";

describe("triangular()", () => {
  // 1. First term
  test("triangular(1) → 1", () => {
    assert.strictEqual(triangular(1), 1n);
  });

  // 2. Second term
  test("triangular(2) → 3", () => {
    assert.strictEqual(triangular(2), 3n);
  });

  // 3. Fifth term
  test("triangular(5) → 15", () => {
    assert.strictEqual(triangular(5), 15n);
  });

  // 4. Tenth term
  test("triangular(10) → 55", () => {
    assert.strictEqual(triangular(10), 55n);
  });

  // 5. Large n (1000th term)
  test("triangular(1000) → 500500", () => {
    assert.strictEqual(triangular(1000), 500500n);
  });

  // 6. BigInt input
  test("triangular(100n) → 5050", () => {
    assert.strictEqual(triangular(100n), 5050n);
  });

  // 7. Large triangular number (n=1e6)
  test("triangular(1_000_000n) → 500000500000", () => {
    assert.strictEqual(triangular(1_000_000n), 500000500000n);
  });

  // 8. Negative n throws RangeError
  test("triangular(-5) throws RangeError", () => {
    assert.throws(() => triangular(-5), RangeError);
  });

  // 9. Zero throws RangeError
  test("triangular(0) throws RangeError", () => {
    assert.throws(() => triangular(0), RangeError);
  });

  // 10. Ensure result is BigInt
  test("triangular(10) returns BigInt", () => {
    assert.strictEqual(typeof triangular(10), "bigint");
  });

  // 11. Cross-check formula manually
  test("triangular(20) = 210", () => {
    assert.strictEqual(triangular(20), 210n);
  });

  // 12. Compare consecutive differences → arithmetic sequence
  test("triangular(n+1) - triangular(n) = n+1", () => {
    for (let i = 1n; i <= 50n; i++) {
      const diff = triangular(i + 1n) - triangular(i);
      assert.strictEqual(diff, i + 1n);
    }
  });
});
