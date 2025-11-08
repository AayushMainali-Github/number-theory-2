import { describe, test } from "node:test";
import assert from "node:assert";
import { reducedTotient } from "../../src/function/reducedTotient.js";

describe("reducedTotient()", () => {
  // 1. Base case
  test("reducedTotient(1) → {1,1}", () => {
    const r = reducedTotient(1);
    assert.strictEqual(r.num, 1n);
    assert.strictEqual(r.den, 1n);
  });

  // 2. Prime input: (p-1)/p (already reduced)
  test("reducedTotient(7) → {6,7}", () => {
    const r = reducedTotient(7);
    assert.strictEqual(r.num, 6n);
    assert.strictEqual(r.den, 7n);
  });

  // 3. Composite examples with reduction
  test("reducedTotient(10) → {2,5}", () => {
    const r = reducedTotient(10);
    assert.strictEqual(r.num, 2n);
    assert.strictEqual(r.den, 5n);
  });

  test("reducedTotient(12) → {1,3}", () => {
    const r = reducedTotient(12);
    assert.strictEqual(r.num, 1n);
    assert.strictEqual(r.den, 3n);
  });

  test("reducedTotient(36) → {1,3}", () => {
    const r = reducedTotient(36);
    assert.strictEqual(r.num, 1n);
    assert.strictEqual(r.den, 3n);
  });

  // 4. BigInt input
  test("reducedTotient(12n) → {1n,3n}", () => {
    const r = reducedTotient(12n);
    assert.strictEqual(r.num, 1n);
    assert.strictEqual(r.den, 3n);
  });

  // 5. Domain errors
  test("reducedTotient(0) throws RangeError", () => {
    assert.throws(() => reducedTotient(0), RangeError);
  });

  test("reducedTotient(-5) throws RangeError", () => {
    assert.throws(() => reducedTotient(-5), RangeError);
  });

  // 6. Return types are BigInt
  test("reducedTotient returns BigInt components", () => {
    const r = reducedTotient(30);
    assert.strictEqual(typeof r.num, "bigint");
    assert.strictEqual(typeof r.den, "bigint");
  });
});