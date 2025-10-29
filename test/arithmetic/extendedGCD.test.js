import { describe, test } from "node:test";
import assert from "node:assert";
import { extendedGCD } from "../../src/arithmetic/extendedGCD.js";

describe("extendedGCD()", () => {
  // 1. Basic positive integers
  test("extendedGCD(240, 46) → [2, -9, 47]", () => {
    const [g, x, y] = extendedGCD(240, 46);
    assert.deepStrictEqual([g, x, y], [2n, -9n, 47n]);
    assert.strictEqual(240n * x + 46n * y, g);
  });

  // 2. Coprime numbers
  test("extendedGCD(13, 17) → gcd=1", () => {
    const [g, x, y] = extendedGCD(13, 17);
    assert.strictEqual(g, 1n);
    assert.strictEqual(13n * x + 17n * y, g);
  });

  // 3. Equal numbers
  test("extendedGCD(15, 15) → [15, 0, 1]", () => {
    const [g, x, y] = extendedGCD(15, 15);
    assert.strictEqual(g, 15n);
    assert.strictEqual(15n * x + 15n * y, g);
  });

  // 4. One zero (b = 0)
  test("extendedGCD(25, 0) → [25, 1, 0]", () => {
    const [g, x, y] = extendedGCD(25, 0);
    assert.deepStrictEqual([g, x, y], [25n, 1n, 0n]);
  });

  // 5. One zero (a = 0)
  test("extendedGCD(0, 25) → [25, 0, 1]", () => {
    const [g, x, y] = extendedGCD(0, 25);
    assert.deepStrictEqual([g, x, y], [25n, 0n, 1n]);
  });

  // 6. Negative a
  test("extendedGCD(-240, 46)", () => {
    const [g, x, y] = extendedGCD(-240, 46);
    assert.strictEqual(g, 2n);
    assert.strictEqual(-240n * x + 46n * y, g);
  });

  // 7. Negative b
  test("extendedGCD(240, -46)", () => {
    const [g, x, y] = extendedGCD(240, -46);
    assert.strictEqual(g, 2n);
    assert.strictEqual(240n * x + -46n * y, g);
  });

  // 8. Both negative
  test("extendedGCD(-240, -46)", () => {
    const [g, x, y] = extendedGCD(-240, -46);
    assert.strictEqual(g, 2n);
    assert.strictEqual(-240n * x + -46n * y, g);
  });

  // 9. Large numbers
  test("extendedGCD(9876543210, 123456789)", () => {
    const [g, x, y] = extendedGCD(9876543210n, 123456789n);
    assert.strictEqual(9876543210n * x + 123456789n * y, g);
  });

  // 10. Coprime large primes
  test("extendedGCD(9999999967, 9999999973)", () => {
    const [g, x, y] = extendedGCD(9999999967n, 9999999973n);
    assert.strictEqual(g, 1n);
    assert.strictEqual(9999999967n * x + 9999999973n * y, g);
  });

  // 11. One negative and one zero
  test("extendedGCD(-15, 0)", () => {
    const [g, x, y] = extendedGCD(-15, 0);
    assert.deepStrictEqual([g, x, y], [15n, -1n, 0n]);
  });

  // 12. Small values
  test("extendedGCD(7, 3)", () => {
    const [g, x, y] = extendedGCD(7, 3);
    assert.strictEqual(7n * x + 3n * y, g);
  });

  // 13. Fibonacci relation check
  test("extendedGCD(21, 34)", () => {
    const [g, x, y] = extendedGCD(21, 34);
    assert.strictEqual(21n * x + 34n * y, g);
    assert.strictEqual(g, 1n);
  });

  // 14. Negative combination
  test("extendedGCD(-81, 27)", () => {
    const [g, x, y] = extendedGCD(-81, 27);
    assert.strictEqual(-81n * x + 27n * y, g);
    assert.strictEqual(g, 27n);
  });

  // 15. Check coefficients correctness
  test("extendedGCD(99, 78)", () => {
    const [g, x, y] = extendedGCD(99, 78);
    assert.strictEqual(g, 3n);
    assert.strictEqual(99n * x + 78n * y, g);
  });

  // 16. BigInt handling
  test("extendedGCD(100000000000n, 50000000000n)", () => {
    const [g, x, y] = extendedGCD(100000000000n, 50000000000n);
    assert.strictEqual(g, 50000000000n);
    assert.strictEqual(100000000000n * x + 50000000000n * y, g);
  });

  // 17. Opposite numbers
  test("extendedGCD(12, -12) → gcd=12", () => {
    const [g, x, y] = extendedGCD(12, -12);
    assert.strictEqual(g, 12n);
    assert.strictEqual(12n * x + -12n * y, g);
  });

  // 18. gcd(0,0)
  test("extendedGCD(0, 0) → [0, 0, 0]", () => {
    const [g, x, y] = extendedGCD(0, 0);
    assert.deepStrictEqual([g, x, y], [0n, 1n, 0n]); // gcd(0,0) = 0, x=1,y=0
  });

  // 19. Random negative pair
  test("extendedGCD(-99, -78)", () => {
    const [g, x, y] = extendedGCD(-99, -78);
    assert.strictEqual(g, 3n);
    assert.strictEqual(-99n * x + -78n * y, g);
  });

  // 20. Return type check
  test("returns array of 3 BigInts", () => {
    const result = extendedGCD(240, 46);
    assert.ok(Array.isArray(result));
    assert.ok(result.every((v) => typeof v === "bigint"));
  });
});
