import { describe, test } from "node:test";
import assert from "node:assert";
import { permutation } from "../../src/combinatorics/permutation.js";
const { combination } = await import("../../src/combinatorics/combination.js");

describe("permutation()", () => {
  // 1. Basic permutation formula verification.
  test("permutation(5, 2) → 20", () => {
    assert.strictEqual(permutation(5, 2), 20n);
  });

  // 2. Known case from 10 choose 3.
  test("permutation(10, 3) → 720", () => {
    assert.strictEqual(permutation(10, 3), 720n);
  });

  // 3. Selecting zero items should yield one arrangement.
  test("permutation(10, 0) → 1", () => {
    assert.strictEqual(permutation(10, 0), 1n);
  });

  // 4. All items chosen → n!
  test("permutation(10, 10) → 3628800", () => {
    assert.strictEqual(permutation(10, 10), 3628800n);
  });

  // 5. If k > n, permutations should be 0.
  test("permutation(10, 11) → 0", () => {
    assert.strictEqual(permutation(10, 11), 0n);
  });

  // 6. Empty set case.
  test("permutation(0, 0) → 1", () => {
    assert.strictEqual(permutation(0, 0), 1n);
  });

  // 7. Negative inputs should not be allowed.
  test("permutation(-5, 2) throws RangeError", () => {
    assert.throws(() => permutation(-5, 2), RangeError);
  });

  // 8. BigInt compatibility test.
  test("permutation(20n, 10n) returns BigInt", () => {
    const result = permutation(20n, 10n);
    assert.strictEqual(typeof result, "bigint");
  });

  // 9. Permutation count should always exceed combinations.
  test("permutation(20, 10) > combination(20, 10)", () => {
    assert(permutation(20, 10) > combination(20, 10));
  });

  // 10. Large n,k should still run efficiently.
  test("permutation(100, 5) runs successfully", () => {
    const result = permutation(100, 5);
    assert(result > 0n);
  });

  // 11. Relationship between nPk and (n-1)Pk.
  test("permutation(6, 5) = 6 × permutation(5, 5)", () => {
    assert.strictEqual(permutation(6, 5), 6n * permutation(5, 5));
  });

  // 12. Zero k always returns 1 regardless of n.
  test("permutation(99, 0) → 1", () => {
    assert.strictEqual(permutation(99, 0), 1n);
  });
});
