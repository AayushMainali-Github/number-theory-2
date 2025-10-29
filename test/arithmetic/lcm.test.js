import { describe, test } from "node:test";
import assert from "node:assert";
import { lcm } from "../../src/arithmetic/lcm.js";

describe("lcm()", () => {
  // 1. Basic positive numbers
  test("lcm(12, 18) → 36", () => {
    assert.strictEqual(lcm(12, 18), 36n);
  });

  // 2. Same number
  test("lcm(10, 10) → 10", () => {
    assert.strictEqual(lcm(10, 10), 10n);
  });

  // 3. One divides the other
  test("lcm(4, 12) → 12", () => {
    assert.strictEqual(lcm(4, 12), 12n);
  });

  // 4. Coprime numbers
  test("lcm(7, 5) → 35", () => {
    assert.strictEqual(lcm(7, 5), 35n);
  });

  // 5. One zero
  test("lcm(0, 9) → 0", () => {
    assert.strictEqual(lcm(0, 9), 0n);
  });

  // 6. Both zero
  test("lcm(0, 0) → 0", () => {
    assert.strictEqual(lcm(0, 0), 0n);
  });

  // 7. Negative inputs (one negative)
  test("lcm(-4, 6) → 12", () => {
    assert.strictEqual(lcm(-4, 6), 12n);
  });

  // 8. Negative inputs (other negative)
  test("lcm(4, -6) → 12", () => {
    assert.strictEqual(lcm(4, -6), 12n);
  });

  // 9. Both negative
  test("lcm(-5, -7) → 35", () => {
    assert.strictEqual(lcm(-5, -7), 35n);
  });

  // 10. Mixed signs with powers
  test("lcm(-2^6, 3^3) → positive", () => {
    const a = -(2n ** 6n);
    const b = 3n ** 3n;
    assert.strictEqual(lcm(a, b), 2n ** 6n * 3n ** 3n);
  });

  // 11. Two primes
  test("lcm(11, 13) → 143", () => {
    assert.strictEqual(lcm(11, 13), 143n);
  });

  // 12. Even and odd
  test("lcm(8, 15) → 120", () => {
    assert.strictEqual(lcm(8, 15), 120n);
  });

  // 13. Negative and positive
  test("lcm(-8, 15) → 120", () => {
    assert.strictEqual(lcm(-8, 15), 120n);
  });

  // 14. Large coprimes
  test("lcm(9999999967n, 9999999973n) → product", () => {
    const a = 9999999967n;
    const b = 9999999973n;
    assert.strictEqual(lcm(a, b), a * b);
  });

  // 15. One is multiple of the other
  test("lcm(21, 7) → 21", () => {
    assert.strictEqual(lcm(21, 7), 21n);
  });

  // 16. Both large even
  test("lcm(2^20, 2^15) → 2^20", () => {
    const a = 2n ** 20n;
    const b = 2n ** 15n;
    assert.strictEqual(lcm(a, b), a);
  });

  // 17. Powers of primes
  test("lcm(3^5, 3^2) → 3^5", () => {
    assert.strictEqual(lcm(3n ** 5n, 3n ** 2n), 3n ** 5n);
  });

  // 18. Large powers of different primes
  test("lcm(2^10, 3^5) → 2^10 * 3^5", () => {
    const a = 2n ** 10n;
    const b = 3n ** 5n;
    assert.strictEqual(lcm(a, b), a * b);
  });

  // 19. Mixed sign powers
  test("lcm(-2^6, 3^3) → positive", () => {
    const a = -(2n ** 6n);
    const b = 3n ** 3n;
    assert.strictEqual(lcm(a, b), 2n ** 6n * 3n ** 3n);
  });

  // 20. BigInt validation
  test("lcm(2n, 5n) → BigInt result", () => {
    const result = lcm(2n, 5n);
    assert.strictEqual(typeof result, "bigint");
  });
});
