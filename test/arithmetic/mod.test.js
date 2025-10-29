import { test, describe } from "node:test";
import assert from "node:assert";
import { mod } from "../../src/arithmetic/mod.js";

describe("mod()", () => {
  // 1. Basic positive numbers
  test("mod(10, 3) → 1", () => {
    assert.strictEqual(mod(10, 3), 1n);
  });

  // 2. Dividend smaller than divisor
  test("mod(2, 5) → 2", () => {
    assert.strictEqual(mod(2, 5), 2n);
  });

  // 3. Dividend equal to divisor
  test("mod(5, 5) → 0", () => {
    assert.strictEqual(mod(5, 5), 0n);
  });

  // 4. Zero dividend
  test("mod(0, 7) → 0", () => {
    assert.strictEqual(mod(0, 7), 0n);
  });

  // 5. Negative dividend
  test("mod(-10, 3) → 2", () => {
    assert.strictEqual(mod(-10, 3), 2n);
  });

  // 6. Negative divisor
  test("mod(10, -3) → -2", () => {
    assert.strictEqual(mod(10, -3), -2n);
  });

  // 7. Both negative
  test("mod(-10, -3) → -1", () => {
    assert.strictEqual(mod(-10, -3), -1n);
  });

  // 8. Negative dividend with positive modulus
  test("mod(-25, 4) → 3", () => {
    assert.strictEqual(mod(-25, 4), 3n);
  });

  // 9. Large numbers
  test("mod(123456789123456789, 97) → remainder", () => {
    assert.strictEqual(
      mod(123456789123456789n, 97n),
      123456789123456789n % 97n,
    );
  });

  // 10. Power of two modulus
  test("mod(255, 16) → 15", () => {
    assert.strictEqual(mod(255, 16), 15n);
  });

  // 11. Mod by 1 always yields 0
  test("mod(1234567, 1) → 0", () => {
    assert.strictEqual(mod(1234567, 1), 0n);
  });

  // 12. Mod by zero throws RangeError
  test("mod(5, 0) throws RangeError", () => {
    assert.throws(() => mod(5, 0), RangeError);
  });

  // 13. Mod by zero with negative dividend
  test("mod(-8, 0) throws RangeError", () => {
    assert.throws(() => mod(-8, 0), RangeError);
  });

  // 14. Mod by zero with zero dividend
  test("mod(0, 0) throws RangeError", () => {
    assert.throws(() => mod(0, 0), RangeError);
  });

  // 15. BigInt test
  test("mod(1000000000000000000n, 97n) → remainder", () => {
    assert.strictEqual(
      mod(1000000000000000000n, 97n),
      1000000000000000000n % 97n,
    );
  });

  // 16. Negative BigInt
  test("mod(-123456789n, 100n) → 11", () => {
    assert.strictEqual(mod(-123456789n, 100n), 11n);
  });

  // 17. When result equals modulus (should wrap to 0)
  test("mod(9, 3) → 0", () => {
    assert.strictEqual(mod(9, 3), 0n);
  });

  // 18. Mixed sign (positive dividend, negative modulus)
  test("mod(9, -4) → -3", () => {
    assert.strictEqual(mod(9, -4), -3n);
  });

  // 19. Large coprime pair
  test("mod(2^68, 3^27) → remainder", () => {
    const a = 2n ** 68n;
    const b = 3n ** 27n;
    assert.strictEqual(mod(a, b), a % b);
  });

  // 20. Negative large number multiple of modulus
  test("mod(-2^40, 2^20) → 0", () => {
    const a = -(2n ** 40n);
    const b = 2n ** 20n;
    assert.strictEqual(mod(a, b), 0n);
  });

  // 21. Negative modulo boundary
  test("mod(-1, 2) → 1", () => {
    assert.strictEqual(mod(-1, 2), 1n);
  });

  // 22. Double negatives cancel
  test("mod(-8, -3) → -2", () => {
    assert.strictEqual(mod(-8, -3), -2n);
  });

  // 23. Zero dividend and negative modulus
  test("mod(0, -5) → 0", () => {
    assert.strictEqual(mod(0, -5), 0n);
  });

  // 24. Very large BigInt mod
  test("mod(10^50, 97) → remainder", () => {
    const a = 10n ** 50n;
    assert.strictEqual(mod(a, 97n), a % 97n);
  });

  // 25. Mod by zero with large number
  test("mod(10^100, 0) throws RangeError", () => {
    const a = 10n ** 100n;
    assert.throws(() => mod(a, 0), RangeError);
  });
});
