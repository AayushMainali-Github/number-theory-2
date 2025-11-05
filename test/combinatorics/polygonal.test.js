import { describe, test } from "node:test";
import assert from "node:assert";
import { polygonal } from "../../src/combinatorics/polygonal.js";
import { triangular } from "../../src/combinatorics/triangular.js";
import { square } from "../../src/combinatorics/square.js";
import { pentagonal } from "../../src/combinatorics/pentagonal.js";

describe("polygonal()", () => {
  // 1. Basic triangular numbers via polygonal(s=3, n)
  test("polygonal(3, n) matches triangular(n) for n=1..10", () => {
    for (let n = 1n; n <= 10n; n++) {
      assert.strictEqual(polygonal(3, n), triangular(n));
    }
  });

  // 2. Basic square numbers via polygonal(s=4, n)
  test("polygonal(4, n) matches square(n) for n=1..10", () => {
    for (let n = 1n; n <= 10n; n++) {
      assert.strictEqual(polygonal(4, n), square(n));
    }
  });

  // 3. Basic pentagonal numbers via polygonal(s=5, n)
  test("polygonal(5, n) matches pentagonal(n) for n=1..10", () => {
    for (let n = 1n; n <= 10n; n++) {
      assert.strictEqual(polygonal(5, n), pentagonal(n));
    }
  });

  // 4. Direct formula checks for heptagonal (s=7)
  test("polygonal(7, 1..5) direct formula", () => {
    const s = 7n; // (s-2)=5, (s-4)=3
    const expected = (n) => (((s - 2n) * n * n) - ((s - 4n) * n)) / 2n;
    assert.deepStrictEqual(polygonal(7, 1), expected(1n));
    assert.deepStrictEqual(polygonal(7, 2), expected(2n));
    assert.deepStrictEqual(polygonal(7, 3), expected(3n));
    assert.deepStrictEqual(polygonal(7, 4), expected(4n));
    assert.deepStrictEqual(polygonal(7, 5), expected(5n));
  });

  // 5. Difference identity: P(s, n+1) − P(s, n) = (s − 2) n + 1
  test("difference identity holds for multiple s and n", () => {
    for (let s = 3n; s <= 9n; s++) {
      for (let n = 1n; n <= 20n; n++) {
        const lhs = polygonal(s, n + 1n) - polygonal(s, n);
        const rhs = (s - 2n) * n + 1n;
        assert.strictEqual(lhs, rhs);
      }
    }
  });

  // 6. Relation to triangular numbers: P(s, n) = (s − 2) T_{n−1} + n
  test("relation to triangular numbers holds", () => {
    for (let s = 3n; s <= 8n; s++) {
      for (let n = 2n; n <= 20n; n++) {
        const tPrev = triangular(n - 1n);
        const lhs = polygonal(s, n);
        const rhs = (s - 2n) * tPrev + n;
        assert.strictEqual(lhs, rhs);
      }
    }
  });

  // 7. Cross-sides relation: P(s+1, n) − P(s, n) = T_{n−1}
  test("cross-sides relation holds", () => {
    for (let s = 3n; s <= 8n; s++) {
      for (let n = 2n; n <= 20n; n++) {
        const lhs = polygonal(s + 1n, n) - polygonal(s, n);
        const rhs = triangular(n - 1n);
        assert.strictEqual(lhs, rhs);
      }
    }
  });

  // 8. BigInt inputs for s and n
  test("BigInt inputs are supported", () => {
    const val = polygonal(6n, 10n);
    const expected = (((6n - 2n) * 10n * 10n) - ((6n - 4n) * 10n)) / 2n;
    assert.strictEqual(val, expected);
  });

  // 9. Type check
  test("returns BigInt", () => {
    assert.strictEqual(typeof polygonal(7, 3), "bigint");
  });

  // 10. Range checks
  test("throws RangeError for invalid s or n", () => {
    assert.throws(() => polygonal(2, 5), RangeError); // s < 3
    assert.throws(() => polygonal(3, 0), RangeError); // n < 1
  });
});