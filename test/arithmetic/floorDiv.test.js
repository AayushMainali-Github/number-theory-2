import { test, describe } from "node:test";
import assert from "node:assert";
import { floorDiv } from "../../src/arithmetic/floorDiv.js";

describe("floorDiv()", () => {
  // 1. Basic positive division
  test("floorDiv(7,3) → {q:2,r:1}", () => {
    const { q, r } = floorDiv(7, 3);
    assert.strictEqual(q, 2n);
    assert.strictEqual(r, 1n);
    assert.strictEqual(7n, 3n * q + r);
    assert.ok(r >= 0n && r < 3n);
  });

  // 2. Negative dividend
  test("floorDiv(-7,3) → {q:-3,r:2}", () => {
    const { q, r } = floorDiv(-7, 3);
    assert.strictEqual(q, -3n);
    assert.strictEqual(r, 2n);
    assert.strictEqual(-7n, 3n * q + r);
    assert.ok(r >= 0n && r < 3n);
  });

  // 3. Negative divisor
  test("floorDiv(7,-3) → {q:-2,r:1}", () => {
    const { q, r } = floorDiv(7, -3);
    assert.strictEqual(q, -2n);
    assert.strictEqual(r, 1n);
    assert.strictEqual(7n, (-3n) * q + r);
    assert.ok(r >= 0n && r < 3n);
  });

  // 4. Both negative
  test("floorDiv(-7,-3) → {q:3,r:2}", () => {
    const { q, r } = floorDiv(-7, -3);
    assert.strictEqual(q, 3n);
    assert.strictEqual(r, 2n);
    assert.strictEqual(-7n, (-3n) * q + r);
    assert.ok(r >= 0n && r < 3n);
  });

  // 5. Exact division (remainder 0)
  test("floorDiv(12,3) → {q:4,r:0}", () => {
    const { q, r } = floorDiv(12, 3);
    assert.strictEqual(q, 4n);
    assert.strictEqual(r, 0n);
    assert.strictEqual(12n, 3n * q + r);
  });

  // 6. Zero dividend
  test("floorDiv(0,7) → {q:0,r:0}", () => {
    const { q, r } = floorDiv(0, 7);
    assert.strictEqual(q, 0n);
    assert.strictEqual(r, 0n);
    assert.strictEqual(0n, 7n * q + r);
  });

  // 7. Large BigInt positive
  test("floorDiv(10^20, 97) respects identity and remainder bounds", () => {
    const a = 10n ** 20n;
    const b = 97n;
    const { q, r } = floorDiv(a, b);
    assert.strictEqual(a, b * q + r);
    assert.ok(r >= 0n && r < b);
  });

  // 8. Large BigInt negative dividend
  test("floorDiv(-10^20, 97) remainder in [0,97)", () => {
    const a = -(10n ** 20n);
    const b = 97n;
    const { q, r } = floorDiv(a, b);
    assert.strictEqual(a, b * q + r);
    assert.ok(r >= 0n && r < b);
  });

  // 9. Negative divisor with large BigInt
  test("floorDiv(10^20, -97) remainder in [0,97)", () => {
    const a = 10n ** 20n;
    const b = -97n;
    const { q, r } = floorDiv(a, b);
    assert.strictEqual(a, b * q + r);
    assert.ok(r >= 0n && r < 97n);
  });

  // 10. Small edge cases
  test("floorDiv(1,2) → {q:0,r:1}", () => {
    const { q, r } = floorDiv(1, 2);
    assert.strictEqual(q, 0n);
    assert.strictEqual(r, 1n);
    assert.strictEqual(1n, 2n * q + r);
  });

  // 11. Division by zero throws RangeError
  test("throws RangeError on divisor 0", () => {
    assert.throws(() => floorDiv(1, 0), RangeError);
  });
});