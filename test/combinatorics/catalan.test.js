import { describe, test } from "node:test";
import assert from "node:assert";
import { catalan } from "../../src/combinatorics/catalan.js";
import { combination } from "../../src/combinatorics/combination.js";

// Known Catalan numbers n=0..15:
// 1, 1, 2, 5, 14, 42, 132, 429, 1430, 4862,
// 16796, 58786, 208012, 742900, 2674440, 9694845

describe("catalan()", () => {
  // 1. Base cases
  test("catalan(0) → 1", () => {
    assert.strictEqual(catalan(0), 1n);
  });

  test("catalan(1) → 1", () => {
    assert.strictEqual(catalan(1), 1n);
  });

  // 2. Small values
  test("catalan(2) → 2", () => {
    assert.strictEqual(catalan(2), 2n);
  });

  test("catalan(3) → 5", () => {
    assert.strictEqual(catalan(3), 5n);
  });

  test("catalan(4) → 14", () => {
    assert.strictEqual(catalan(4), 14n);
  });

  test("catalan(5) → 42", () => {
    assert.strictEqual(catalan(5), 42n);
  });

  // 3. Medium values
  test("catalan(8) → 1430", () => {
    assert.strictEqual(catalan(8), 1430n);
  });

  test("catalan(9) → 4862", () => {
    assert.strictEqual(catalan(9), 4862n);
  });

  test("catalan(10n) → 16796 (BigInt input)", () => {
    assert.strictEqual(catalan(10n), 16796n);
  });

  // 4. Relation to binomial: (2n choose n) = C_n * (n+1)
  test("binomial relation holds for n=0..12", () => {
    for (let n = 0; n <= 12; n++) {
      const bn = BigInt(n);
      const lhs = combination(bn * 2n, bn);
      const rhs = catalan(bn) * (bn + 1n);
      assert.strictEqual(lhs, rhs);
    }
  });

  // 5. Recurrence check: C_{n+1} = sum_{i=0..n} C_i * C_{n-i}
  test("recurrence holds for n=0..9", () => {
    const C = [];
    for (let i = 0; i <= 10; i++) C[i] = catalan(i);
    for (let n = 0; n <= 9; n++) {
      let sum = 0n;
      for (let i = 0; i <= n; i++) sum += C[i] * C[n - i];
      assert.strictEqual(C[n + 1], sum);
    }
  });

  // 6. Type and error checks
  test("returns BigInt", () => {
    assert.strictEqual(typeof catalan(6), "bigint");
  });

  test("negative n throws RangeError", () => {
    assert.throws(() => catalan(-1), RangeError);
  });
});