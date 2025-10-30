import { describe, test } from "node:test";
import assert from "node:assert";
import { divisors } from "../../src/arithmetic/divisors.js";

describe("divisors()", () => {
  // 1. Small composite number
  test("divisors(12) → [1, 2, 3, 4, 6, 12]", () => {
    const expected = [1n, 2n, 3n, 4n, 6n, 12n];
    assert.deepStrictEqual(divisors(12), expected);
  });

  // 2. Prime number
  test("divisors(13) → [1, 13]", () => {
    const expected = [1n, 13n];
    assert.deepStrictEqual(divisors(13), expected);
  });

  // 3. Perfect square
  test("divisors(36) → [1, 2, 3, 4, 6, 9, 12, 18, 36]", () => {
    const expected = [1n, 2n, 3n, 4n, 6n, 9n, 12n, 18n, 36n];
    assert.deepStrictEqual(divisors(36), expected);
  });

  // 4. Power of two
  test("divisors(32) → [1, 2, 4, 8, 16, 32]", () => {
    const expected = [1n, 2n, 4n, 8n, 16n, 32n];
    assert.deepStrictEqual(divisors(32), expected);
  });

  // 5. Large composite number
  test("divisors(100) → [1, 2, 4, 5, 10, 20, 25, 50, 100]", () => {
    const expected = [1n, 2n, 4n, 5n, 10n, 20n, 25n, 50n, 100n];
    assert.deepStrictEqual(divisors(100), expected);
  });

  // 6. Negative number (should return same as positive)
  test("divisors(-12) → [1, 2, 3, 4, 6, 12]", () => {
    const expected = [1n, 2n, 3n, 4n, 6n, 12n];
    assert.deepStrictEqual(divisors(-12), expected);
  });

  // 7. Large prime number
  test("divisors(97) → [1, 97]", () => {
    const expected = [1n, 97n];
    assert.deepStrictEqual(divisors(97), expected);
  });

  // 8. BigInt input
  test("divisors(1000n) → valid factors", () => {
    const result = divisors(1000n);
    assert(result.includes(10n) && result.includes(1000n));
  });

  // 9. RangeError for zero
  test("divisors(0) throws RangeError", () => {
    assert.throws(() => divisors(0), RangeError);
  });

  // 10. Very large number check
  test("divisors(10^6) → count check", () => {
    const result = divisors(1_000_000);
    assert(result.length > 40);
  });

  // 11. Prime power (n = 3^5)
  test("divisors(243) → [1, 3, 9, 27, 81, 243]", () => {
    const expected = [1n, 3n, 9n, 27n, 81n, 243n];
    assert.deepStrictEqual(divisors(243), expected);
  });

  // 12. Ensure sorted ascending
  test("divisors(60) → ascending order", () => {
    const result = divisors(60);
    for (let i = 1; i < result.length; i++) {
      assert(result[i - 1] < result[i]);
    }
  });

  // 13. Large composite (5040)
  test("divisors(5040) includes 2520", () => {
    const result = divisors(5040);
    assert(result.includes(2520n));
  });

  // 14. Divisors of 1
  test("divisors(1) → [1]", () => {
    assert.deepStrictEqual(divisors(1), [1n]);
  });

  // 15. Negative BigInt input
  test("divisors(-100n) → [1, 2, 4, 5, 10, 20, 25, 50, 100]", () => {
    const expected = [1n, 2n, 4n, 5n, 10n, 20n, 25n, 50n, 100n];
    assert.deepStrictEqual(divisors(-100n), expected);
  });
});
