import { describe, test } from "node:test";
import assert from "node:assert";
import { combination } from "../../src/combinatorics/combination.js";

describe("combination()", () => {
  // 1. Standard binomial value verification.
  test("combination(5, 2) → 10", () => {
    assert.strictEqual(combination(5, 2), 10n);
  });

  // 2. Another known value check.
  test("combination(10, 3) → 120", () => {
    assert.strictEqual(combination(10, 3), 120n);
  });

  // 3. Choosing 0 items should yield 1.
  test("combination(10, 0) → 1", () => {
    assert.strictEqual(combination(10, 0), 1n);
  });

  // 4. Choosing all items should yield 1.
  test("combination(10, 10) → 1", () => {
    assert.strictEqual(combination(10, 10), 1n);
  });

  // 5. Combination symmetry property.
  test("combination(50, 25) = combination(50, 25)", () => {
    assert.strictEqual(combination(50, 25), combination(50, 25));
  });

  // 6. Validates known large binomial coefficient.
  test("combination(100, 3) → 161700", () => {
    assert.strictEqual(combination(100, 3), 161700n);
  });

  // 7. Should return 0 if k > n.
  test("combination(10, 11) → 0", () => {
    assert.strictEqual(combination(10, 11), 0n);
  });

  // 8. Negative n should throw an error.
  test("combination(-5, 2) throws RangeError", () => {
    assert.throws(() => combination(-5, 2), RangeError);
  });

  // 9. Negative k should throw an error.
  test("combination(5, -2) throws RangeError", () => {
    assert.throws(() => combination(5, -2), RangeError);
  });

  // 10. BigInt inputs should be supported.
  test("combination(30n, 15n) returns BigInt", () => {
    const result = combination(30n, 15n);
    assert.strictEqual(typeof result, "bigint");
  });

  // 11. Tests the monotonic increase up to middle point.
  test("combination(20, 5) < combination(20, 10)", () => {
    assert(combination(20, 5) < combination(20, 10));
  });
});
