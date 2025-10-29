import { test, describe } from "node:test";
import assert from "node:assert";
import { gcd } from "../../src/arithmetic/gcd.js";

describe("gcd()", () => {
  // 1. Basic positive numbers
  test("gcd(84, 18) → 6", () => {
    assert.strictEqual(gcd(84, 18), 6n);
  });

  // 2. Same number
  test("gcd(12, 12) → 12", () => {
    assert.strictEqual(gcd(12, 12), 12n);
  });

  // 3. Coprime numbers
  test("gcd(13, 17) → 1", () => {
    assert.strictEqual(gcd(13, 17), 1n);
  });

  // 4. One zero input (first)
  test("gcd(0, 15) → 15", () => {
    assert.strictEqual(gcd(0, 15), 15n);
  });

  // 5. One zero input (second)
  test("gcd(15, 0) → 15", () => {
    assert.strictEqual(gcd(15, 0), 15n);
  });

  // 6. Both zero
  test("gcd(0, 0) → 0", () => {
    assert.strictEqual(gcd(0, 0), 0n);
  });

  // 7. Negative inputs (one negative)
  test("gcd(-20, 30) → 10", () => {
    assert.strictEqual(gcd(-20, 30), 10n);
  });

  // 8. Negative inputs (both negative)
  test("gcd(-81, -27) → 27", () => {
    assert.strictEqual(gcd(-81, -27), 27n);
  });

  // 9. Large numbers
  test("gcd(10000000000000000, 2500000000000000) → 2500000000000000", () => {
    assert.strictEqual(
      gcd(10000000000000000n, 2500000000000000n),
      2500000000000000n,
    );
  });

  // 10. Prime and composite
  test("gcd(97, 100) → 1", () => {
    assert.strictEqual(gcd(97, 100), 1n);
  });

  // 11. Even and odd
  test("gcd(20, 35) → 5", () => {
    assert.strictEqual(gcd(20, 35), 5n);
  });

  // 12. One number divides the other
  test("gcd(36, 12) → 12", () => {
    assert.strictEqual(gcd(36, 12), 12n);
  });

  // 13. Both numbers even
  test("gcd(48, 60) → 12", () => {
    assert.strictEqual(gcd(48, 60), 12n);
  });

  // 14. Both numbers odd
  test("gcd(81, 27) → 27", () => {
    assert.strictEqual(gcd(81, 27), 27n);
  });

  // 15. Large coprimes (BigInt)
  test("gcd(9999999967n, 9999999973n) → 1", () => {
    assert.strictEqual(gcd(9999999967n, 9999999973n), 1n);
  });

  // 16. One very large, one small
  test("gcd(123456789123456789, 9) → 9", () => {
    assert.strictEqual(gcd(123456789123456789n, 9n), 9n);
  });

  // 17. Fibonacci relation (coprime consecutive numbers)
  test("gcd(21, 34) → 1", () => {
    assert.strictEqual(gcd(21, 34), 1n);
  });

  // 18. Multiples of 10
  test("gcd(1000, 250) → 250", () => {
    assert.strictEqual(gcd(1000, 250), 250n);
  });

  // 19. Very large powers of 2
  test("gcd(2^40, 2^20) → 2^20", () => {
    const a = 2n ** 40n;
    const b = 2n ** 20n;
    assert.strictEqual(gcd(a, b), b);
  });

  // 20. Large unrelated powers (2^68 vs 3^27)
  test("gcd(2^68, 3^27) → 1", () => {
    const a = 2n ** 68n;
    const b = 3n ** 27n;
    assert.strictEqual(gcd(a, b), 1n);
  });

  // 21. Powers with shared base (5^50 and 5^25)
  test("gcd(5^50, 5^25) → 5^25", () => {
    const a = 5n ** 50n;
    const b = 5n ** 25n;
    assert.strictEqual(gcd(a, b), b);
  });

  // 22. Powers with one multiple of the other (7^40 and 7^20 * 3)
  test("gcd(7^40, 7^20 * 3) → 7^20", () => {
    const a = 7n ** 40n;
    const b = 7n ** 20n * 3n;
    assert.strictEqual(gcd(a, b), 7n ** 20n);
  });

  // 23. Mixed bases with small overlap (6^25 and 9^15)
  test("gcd(6^25, 9^15) → 3^25", () => {
    const a = 6n ** 25n; // (2×3)^25 = 2^25×3^25
    const b = 9n ** 15n; // (3^2)^15 = 3^30
    const expected = 3n ** 25n;
    assert.strictEqual(gcd(a, b), expected);
  });

  // 24. Powers of even numbers with overlap (12^10 and 18^8)
  test("gcd(12^10, 18^8) → 2^8 × 3^10", () => {
    const a = 12n ** 10n; // 2^20×3^10
    const b = 18n ** 8n; // 2^8×3^16
    const expected = 2n ** 8n * 3n ** 10n;
    assert.strictEqual(gcd(a, b), expected);
  });

  // 25. Extremely large coprime powers (11^50 vs 13^30)
  test("gcd(11^50, 13^30) → 1", () => {
    const a = 11n ** 50n;
    const b = 13n ** 30n;
    assert.strictEqual(gcd(a, b), 1n);
  });
});
