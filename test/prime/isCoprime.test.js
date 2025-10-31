import { describe, test } from "node:test";
import assert from "node:assert";
import { isCoprime } from "../../src/prime/isCoprime.js";

describe("isCoprime()", () => {
  // 1. Basic coprime numbers
  test("isCoprime(8, 15) → true", () => {
    assert.strictEqual(isCoprime(8, 15), true);
  });

  // 2. Common factor present
  test("isCoprime(12, 18) → false", () => {
    assert.strictEqual(isCoprime(12, 18), false);
  });

  // 3. One number is 1
  test("isCoprime(1, 99) → true", () => {
    assert.strictEqual(isCoprime(1, 99), true);
  });

  // 4. Both numbers prime
  test("isCoprime(7, 11) → true", () => {
    assert.strictEqual(isCoprime(7, 11), true);
  });

  // 5. Negative inputs
  test("isCoprime(-7, 20) → true", () => {
    assert.strictEqual(isCoprime(-7, 20), true);
  });

  // 6. One zero input
  test("isCoprime(0, 9) → false", () => {
    assert.strictEqual(isCoprime(0, 9), false);
  });

  // 7. Both zero
  test("isCoprime(0, 0) → false", () => {
    assert.strictEqual(isCoprime(0, 0), false);
  });

  // 8. Large coprime numbers
  test("isCoprime(123456789, 1000000007) → true", () => {
    assert.strictEqual(isCoprime(123456789, 1000000007), true);
  });

  // 9. Large non-coprime numbers
  test("isCoprime(9876543210, 1234567890) → false", () => {
    assert.strictEqual(isCoprime(9876543210n, 1234567890n), false);
  });

  // 10. Same number (never coprime unless ±1)
  test("isCoprime(25, 25) → false", () => {
    assert.strictEqual(isCoprime(25, 25), false);
  });

  // 11. Consecutive integers are always coprime
  test("isCoprime(100, 101) → true", () => {
    assert.strictEqual(isCoprime(100, 101), true);
  });

  // 12. BigInt powers
  test("isCoprime(2^30, 3^20) → true", () => {
    const a = 2n ** 30n;
    const b = 3n ** 20n;
    assert.strictEqual(isCoprime(a, b), true);
  });

  // 13. BigInt with shared factor
  test("isCoprime(2^40, 4^20) → false", () => {
    const a = 2n ** 40n;
    const b = 4n ** 20n;
    assert.strictEqual(isCoprime(a, b), false);
  });

  // 14. Negative pair with common divisor
  test("isCoprime(-12, -18) → false", () => {
    assert.strictEqual(isCoprime(-12, -18), false);
  });

  // 15. Both primes but equal
  test("isCoprime(13, 13) → false", () => {
    assert.strictEqual(isCoprime(13, 13), false);
  });
});
