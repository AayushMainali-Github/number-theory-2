import { describe, test } from "node:test";
import assert from "node:assert";
import { totient } from "../../src/function/totient.js";

describe("totient()", () => {
  // 1. φ(1) = 1
  test("totient(1) → 1", () => {
    assert.strictEqual(totient(1), 1n);
  });

  // 2. Small prime number (φ(p) = p - 1)
  test("totient(7) → 6", () => {
    assert.strictEqual(totient(7), 6n);
  });

  // 3. Composite number
  test("totient(9) → 6", () => {
    assert.strictEqual(totient(9), 6n);
  });

  // 4. φ(10) = 4
  test("totient(10) → 4", () => {
    assert.strictEqual(totient(10), 4n);
  });

  // 5. φ(12) = 4
  test("totient(12) → 4", () => {
    assert.strictEqual(totient(12), 4n);
  });

  // 6. φ(13) = 12 (prime)
  test("totient(13) → 12", () => {
    assert.strictEqual(totient(13), 12n);
  });

  // 7. φ(36) = 12
  test("totient(36) → 12", () => {
    assert.strictEqual(totient(36), 12n);
  });

  // 8. φ(25) = 20 (since 25 = 5²)
  test("totient(25) → 20", () => {
    assert.strictEqual(totient(25), 20n);
  });

  // 9. φ(100) = 40
  test("totient(100) → 40", () => {
    assert.strictEqual(totient(100), 40n);
  });

  // 10. φ(1e6) = 400000
  test("totient(1000000) → 400000", () => {
    assert.strictEqual(totient(1000000), 400000n);
  });

  // 11. φ(0) = 0 (undefined, but return 0n)
  test("totient(0) → 0", () => {
    assert.strictEqual(totient(0), 0n);
  });

  // 12. Negative number should behave same as positive
  test("totient(-15) → 8", () => {
    assert.strictEqual(totient(-15), 8n);
  });

  // 13. φ(2^10) = 512
  test("totient(2^10) → 512", () => {
    assert.strictEqual(totient(2n ** 10n), 512n);
  });

  // 14. φ(99991) = 99990 (prime)
  test("totient(99991) → 99990", () => {
    assert.strictEqual(totient(99991), 99990n);
  });

  // 15. Large semiprime (p*q)
  test("totient(99991 * 10007) → (p-1)*(q-1)", () => {
    const p = 99991n,
      q = 10007n;
    const expected = (p - 1n) * (q - 1n);
    assert.strictEqual(totient(p * q), expected);
  });
});
