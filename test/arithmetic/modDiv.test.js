import { test, describe } from "node:test";
import assert from "node:assert";
import { modDiv } from "../../src/arithmetic/modDiv.js";
import { modInverse } from "../../src/arithmetic/modInverse.js";
import { modMul } from "../../src/arithmetic/modMul.js";

describe("modDiv()", () => {
  // 1. Simple invertible case
  test("modDiv(6,2,11) → 3", () => {
    assert.strictEqual(modDiv(6, 2, 11), 3n);
  });

  // 2. Negative divisor
  test("modDiv(5,-2,13) → 4", () => {
    assert.strictEqual(modDiv(5, -2, 13), 4n);
  });

  // 3. Mixed types
  test("modDiv(10n, 3, 13) equals a*inv(b) mod m", () => {
    const a = 10n;
    const inv = modInverse(3, 13);
    assert.strictEqual(modDiv(a, 3, 13), modMul(a, inv, 13));
  });

  // 4. Non-invertible divisor throws
  test("modDiv(4,2,6) throws Error", () => {
    assert.throws(() => modDiv(4, 2, 6), Error);
  });

  // 5. Non-positive modulus throws
  test("throws RangeError on m ≤ 0", () => {
    assert.throws(() => modDiv(1, 2, 0), RangeError);
    assert.throws(() => modDiv(1, 2, -5), RangeError);
  });
});
