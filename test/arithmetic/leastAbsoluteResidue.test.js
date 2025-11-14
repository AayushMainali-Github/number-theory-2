import { test, describe } from "node:test";
import assert from "node:assert";
import { leastAbsoluteResidue } from "../../src/arithmetic/leastAbsoluteResidue.js";

describe("leastAbsoluteResidue()", () => {
  // 1. Basic mapping to negative side
  test("leastAbsoluteResidue(9,10) → -1", () => {
    assert.strictEqual(leastAbsoluteResidue(9, 10), -1n);
  });

  // 2. Negative input
  test("leastAbsoluteResidue(-1,10) → -1", () => {
    assert.strictEqual(leastAbsoluteResidue(-1, 10), -1n);
  });

  // 3. Tie case (m even)
  test("leastAbsoluteResidue(5,10) → 5", () => {
    assert.strictEqual(leastAbsoluteResidue(5, 10), 5n);
  });

  // 4. Odd modulus maps above floor(m/2)
  test("leastAbsoluteResidue(5,7) → -2", () => {
    assert.strictEqual(leastAbsoluteResidue(5, 7), -2n);
  });

  // 5. Large BigInt
  test("leastAbsoluteResidue(10^20 + 3, 10) → 3", () => {
    const a = 10n ** 20n + 3n;
    assert.strictEqual(leastAbsoluteResidue(a, 10n), 3n);
  });

  // 6. Non-positive modulus throws
  test("throws RangeError on m ≤ 0", () => {
    assert.throws(() => leastAbsoluteResidue(1, 0), RangeError);
    assert.throws(() => leastAbsoluteResidue(1, -5), RangeError);
  });
});
