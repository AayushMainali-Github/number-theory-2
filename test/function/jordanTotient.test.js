import { describe, test } from "node:test";
import assert from "node:assert";
import { jordanTotient } from "../../src/function/jordanTotient.js";
import { totient } from "../../src/function/totient.js";

describe("jordanTotient()", () => {
  // 1. J_1(n) equals Euler's totient φ(n)
  test("jordanTotient(n, 1) equals totient(n) for various n", () => {
    const values = [1, 2, 3, 4, 5, 6, 12, 30, 36];
    for (const n of values) {
      assert.strictEqual(jordanTotient(n, 1), totient(n));
    }
  });

  // 2. Prime powers
  test("jordanTotient(8, 2) → 48", () => {
    assert.strictEqual(jordanTotient(8, 2), 48n);
  });

  test("jordanTotient(9, 3) → 702", () => {
    assert.strictEqual(jordanTotient(9, 3), 702n);
  });

  // 3. Composite values
  test("jordanTotient(12, 2) → 96", () => {
    assert.strictEqual(jordanTotient(12, 2), 96n);
  });

  test("jordanTotient(10, 2) → 72", () => {
    assert.strictEqual(jordanTotient(10, 2), 72n);
  });

  // 4. BigInt inputs and BigInt k
  test("jordanTotient(12n, 2) → 96n", () => {
    assert.strictEqual(jordanTotient(12n, 2), 96n);
  });

  test("jordanTotient(10, 2n) → 72n", () => {
    assert.strictEqual(jordanTotient(10, 2n), 72n);
  });

  // 5. Domain errors
  test("jordanTotient(0, 1) throws RangeError", () => {
    assert.throws(() => jordanTotient(0, 1), RangeError);
  });

  test("jordanTotient(10, 0) throws RangeError", () => {
    assert.throws(() => jordanTotient(10, 0), RangeError);
  });

  // 6. Return type is BigInt
  test("jordanTotient returns BigInt", () => {
    assert.strictEqual(typeof jordanTotient(12, 2), "bigint");
  });
});
