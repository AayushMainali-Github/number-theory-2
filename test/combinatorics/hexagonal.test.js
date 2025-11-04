// test/combinatorics/hexagonal.test.js
import { describe, test } from "node:test";
import assert from "node:assert";
import { hexagonal } from "../../src/combinatorics/hexagonal.js";

describe("hexagonal()", () => {
  // 1) First term
  test("hexagonal(1) → 1", () => {
    assert.strictEqual(hexagonal(1), 1n);
  });

  // 2) n = 2
  test("hexagonal(2) → 6", () => {
    assert.strictEqual(hexagonal(2), 6n);
  });

  // 3) n = 3
  test("hexagonal(3) → 15", () => {
    assert.strictEqual(hexagonal(3), 15n);
  });

  // 4) n = 4
  test("hexagonal(4) → 28", () => {
    assert.strictEqual(hexagonal(4), 28n);
  });

  // 5) n = 5
  test("hexagonal(5) → 45", () => {
    assert.strictEqual(hexagonal(5), 45n);
  });

  // 6) n = 10
  test("hexagonal(10) → 190", () => {
    assert.strictEqual(hexagonal(10), 190n);
  });

  // 7) n = 20 (BigInt input allowed)
  test("hexagonal(20n) → 780", () => {
    assert.strictEqual(hexagonal(20n), 780n);
  });

  // 8) n = 100
  test("hexagonal(100) → 19900", () => {
    assert.strictEqual(hexagonal(100), 19900n);
  });

  // 9) Finite difference: H(n+1) − H(n) = 4n + 1
  test("hexagonal(n+1) − hexagonal(n) = 4n + 1", () => {
    for (let k = 1n; k <= 10n; k++) {
      const lhs = hexagonal(k + 1n) - hexagonal(k);
      const rhs = 4n * k + 1n;
      assert.strictEqual(lhs, rhs);
    }
  });

  // 10) Polynomial identity: H(n) = 2n^2 − n
  test("matches 2n^2 − n identity", () => {
    for (let k = 1n; k <= 20n; k++) {
      const viaDef = hexagonal(k);
      const viaPoly = 2n * k * k - k;
      assert.strictEqual(viaDef, viaPoly);
    }
  });

  // 11) Reject n < 1
  test("hexagonal(0) throws RangeError", () => {
    assert.throws(() => hexagonal(0), RangeError);
  });

  // 12) Reject negatives
  test("hexagonal(-3) throws RangeError", () => {
    assert.throws(() => hexagonal(-3), RangeError);
  });
});
