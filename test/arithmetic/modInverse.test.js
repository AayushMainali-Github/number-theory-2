import { test, describe } from "node:test";
import assert from "node:assert";
import { modInverse } from "../../src/arithmetic/modInverse.js";
import { mod } from "../../src/arithmetic/mod.js";

describe("modInverse()", () => {
  // 1. Basic positive example
  test("modInverse(3, 11) → 4", () => {
    assert.strictEqual(modInverse(3, 11), 4n);
  });

  // 2. Another simple one
  test("modInverse(2, 5) → 3", () => {
    assert.strictEqual(modInverse(2, 5), 3n);
  });

  // 3. a = 1 → inverse is 1
  test("modInverse(1, 13) → 1", () => {
    assert.strictEqual(modInverse(1, 13), 1n);
  });

  // 4. a = m - 1 → inverse is m - 1
  test("modInverse(10, 11) → 10", () => {
    assert.strictEqual(modInverse(10, 11), 10n);
  });

  // 5. Negative a
  test("modInverse(-3, 11) → 7", () => {
    assert.strictEqual(modInverse(-3, 11), 7n);
  });

  // 6. Non-invertible (gcd ≠ 1)
  test("modInverse(6, 9) throws", () => {
    assert.throws(() => modInverse(6, 9), /does not exist/);
  });

  // 7. Modulus must be positive
  test("modInverse(3, 0) throws RangeError", () => {
    assert.throws(() => modInverse(3, 0), RangeError);
  });

  // 8. Coprime composite modulus
  test("modInverse(17, 3120) → correct inverse", () => {
    const inv = modInverse(17, 3120);
    assert.strictEqual(mod(17n * inv, 3120n), 1n);
  });

  // 9. Large BigInt example
  test("modInverse(123456789n, 1000000007n) → valid", () => {
    const inv = modInverse(123456789n, 1000000007n);
    assert.strictEqual(mod(123456789n * inv, 1000000007n), 1n);
  });

  // 10. a > m
  test("modInverse(23, 11) → 1", () => {
    assert.strictEqual(modInverse(23, 11), 1n);
  });

  // 11. RSA-style inverse
  test("modInverse(65537, 999630013489) → valid", () => {
    const inv = modInverse(65537n, 999630013489n);
    assert.strictEqual(mod(65537n * inv, 999630013489n), 1n);
  });

  // 12. Negative modulus (invalid)
  test("modInverse(3, -11) throws RangeError", () => {
    assert.throws(() => modInverse(3, -11), RangeError);
  });

  // 13. a = 0 → no inverse
  test("modInverse(0, 7) throws", () => {
    assert.throws(() => modInverse(0, 7), /does not exist/);
  });

  // 14. Very small modulus
  test("modInverse(1, 2) → 1", () => {
    assert.strictEqual(modInverse(1, 2), 1n);
  });

  // 15. Large random BigInt pair
  test("modInverse(9876543210123456789n, 10000000019n) → valid", () => {
    const inv = modInverse(9876543210123456789n, 10000000019n);
    assert.strictEqual(mod(9876543210123456789n * inv, 10000000019n), 1n);
  });

  // 16. Random coprime check ensures uniqueness
  test("modInverse(9, 26) → 3", () => {
    // (9 * 3) % 26 = 27 % 26 = 1
    assert.strictEqual(modInverse(9, 26), 3n);
  });

  // 17. Wrap-around large a (mod normalization)
  test("modInverse(35, 7) throws (since gcd != 1)", () => {
    assert.throws(() => modInverse(35, 7), /does not exist/);
  });

  // 18. Negative large a normalized
  test("modInverse(-100, 13) → valid", () => {
    const inv = modInverse(-100, 13);
    assert.strictEqual(mod(-100n * inv, 13n), 1n);
  });

  // 19. Random mid-size modulus
  test("modInverse(19, 121) → 51", () => {
    assert.strictEqual(modInverse(19, 121), 51n);
  });

  // 20. Inverse of self when a² ≡ 1 mod m
  test("modInverse(12, 35) → 3", () => {
    // since 12 * 3 % 35 = 36 % 35 = 1
    assert.strictEqual(modInverse(12, 35), 3n);
  });
});
