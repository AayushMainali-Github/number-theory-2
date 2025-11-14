import { test, describe } from "node:test";
import assert from "node:assert";
import { powMod } from "../../src/arithmetic/powMod.js";

describe("powMod()", () => {
  // 1. Basic example
  test("powMod(2,10,1000) → 24", () => {
    assert.strictEqual(powMod(2, 10, 1000), 24n);
  });

  // 2. Exponent zero → 1 (mod m)
  test("powMod(5,0,13) → 1", () => {
    assert.strictEqual(powMod(5, 0, 13), 1n);
  });

  // 3. Negative base normalization
  test("powMod(-2,3,5) → 2", () => {
    assert.strictEqual(powMod(-2, 3, 5), 2n);
  });

  // 4. Base zero
  test("powMod(0,5,7) → 0", () => {
    assert.strictEqual(powMod(0, 5, 7), 0n);
  });

  // 5. Modulus 1 → always 0
  test("powMod(any, exp, 1) → 0", () => {
    assert.strictEqual(powMod(12345, 678, 1), 0n);
  });

  // 6. Large exponent correctness vs BigInt
  test("powMod(2,1000,1000000007) matches 2^1000 % m", () => {
    const m = 1000000007n;
    const expected = 2n ** 1000n % m;
    assert.strictEqual(powMod(2, 1000, m), expected);
  });

  // 7. Large base normalization
  test("powMod(10000000000n, 20, 97) equals (a^e)%m", () => {
    const a = 10000000000n;
    const e = 20n;
    const m = 97n;
    assert.strictEqual(powMod(a, e, m), a ** e % m);
  });

  // 8. Mixed Number and BigInt types
  test("powMod(5n, 3, 13) → 8", () => {
    assert.strictEqual(powMod(5n, 3, 13), 8n);
  });

  // 9. Negative exponent throws
  test("throws RangeError on negative exponent", () => {
    assert.throws(() => powMod(2, -1, 5), RangeError);
  });

  // 10. Non-positive modulus throws
  test("throws RangeError on m ≤ 0", () => {
    assert.throws(() => powMod(2, 3, 0), RangeError);
    assert.throws(() => powMod(2, 3, -7), RangeError);
  });

  // 11. Property: (a^e % m) for small e
  test("powMod(7,4,20) equals (7^4)%20", () => {
    assert.strictEqual(powMod(7, 4, 20), 7n ** 4n % 20n);
  });

  // 12. Negative base with even exponent returns positive remainder
  test("powMod(-7, 4, 20) equals (abs)^4 % 20", () => {
    assert.strictEqual(powMod(-7, 4, 20), 7n ** 4n % 20n);
  });

  // 13. Negative base with odd exponent (normalized to [0, m))
  test("powMod(-7, 3, 20) equals normalized ((-7)^3)%20", () => {
    const expected = (((-7n) ** 3n % 20n) + 20n) % 20n;
    assert.strictEqual(powMod(-7, 3, 20), expected);
  });

  // 14. Very large values
  test("powMod(10^20, 10, 1009) is consistent", () => {
    const a = 10n ** 20n;
    assert.strictEqual(powMod(a, 10n, 1009n), a ** 10n % 1009n);
  });
});
