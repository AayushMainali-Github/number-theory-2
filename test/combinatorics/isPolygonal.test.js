import { describe, test } from "node:test";
import assert from "node:assert";
import { isPolygonal } from "../../src/combinatorics/isPolygonal.js";
import { polygonal } from "../../src/combinatorics/polygonal.js";
import { triangular } from "../../src/combinatorics/triangular.js";
import { square } from "../../src/combinatorics/square.js";
import { pentagonal } from "../../src/combinatorics/pentagonal.js";

describe("isPolygonal()", () => {
  // 1. Triangular numbers
  test("s=3 recognizes triangular numbers", () => {
    for (let n = 1n; n <= 50n; n++) {
      const t = triangular(n);
      assert.strictEqual(isPolygonal(3, t), true);
    }
  });

  // 2. Squares
  test("s=4 recognizes square numbers", () => {
    for (let n = 1n; n <= 50n; n++) {
      const s = square(n);
      assert.strictEqual(isPolygonal(4, s), true);
    }
  });

  // 3. Pentagonal numbers
  test("s=5 recognizes pentagonal numbers", () => {
    for (let n = 1n; n <= 50n; n++) {
      const p = pentagonal(n);
      assert.strictEqual(isPolygonal(5, p), true);
    }
  });

  // 4. Random composite checks across sides
  test("isPolygonal(s, polygonal(s, n)) is true for ranges", () => {
    for (let s = 3n; s <= 10n; s++) {
      for (let n = 1n; n <= 50n; n++) {
        const x = polygonal(s, n);
        assert.strictEqual(isPolygonal(s, x), true);
      }
    }
  });

  // 5. Non-members should be false
  test("non-members return false", () => {
    assert.strictEqual(isPolygonal(3, 2), false); // 2 not triangular
    assert.strictEqual(isPolygonal(4, 3), false); // 3 not square
    assert.strictEqual(isPolygonal(5, 36), false); // 36 not pentagonal
  });

  // 6. BigInt inputs and large values
  test("BigInt inputs supported and large values work", () => {
    const s = 7n;
    const n = 10000n;
    const x = polygonal(s, n);
    assert.strictEqual(isPolygonal(s, x), true);
    assert.strictEqual(isPolygonal(7n, x), true);
  });

  // 7. Invalid domain returns false
  test("invalid s or x returns false", () => {
    assert.strictEqual(isPolygonal(2, 1), false); // s < 3
    assert.strictEqual(isPolygonal(3, 0), false); // x < 1
    assert.strictEqual(isPolygonal(100, -5), false); // negative x
  });
});