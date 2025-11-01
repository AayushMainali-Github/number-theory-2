import { describe, test } from "node:test";
import assert from "node:assert";
import { carmichael } from "../../src/function/carmichael.js";

describe("carmichael()", () => {
  // 1. λ(1) = 1
  test("carmichael(1) → 1", () => {
    assert.strictEqual(carmichael(1), 1n);
  });

  // 2. Prime p → λ(p) = p - 1
  test("carmichael(7) → 6", () => {
    assert.strictEqual(carmichael(7), 6n);
  });

  // 3. λ(8) = 2^(3-2) = 2
  test("carmichael(8) → 2", () => {
    assert.strictEqual(carmichael(8), 2n);
  });

  // 4. λ(9) = (3 - 1)*3^(2 - 1) = 6
  test("carmichael(9) → 6", () => {
    assert.strictEqual(carmichael(9), 6n);
  });

  // 5. λ(12) = lcm(λ(4), λ(3)) = lcm(2, 2) = 2
  test("carmichael(12) → 2", () => {
    assert.strictEqual(carmichael(12), 2n);
  });

  // 6. λ(16) = 4
  test("carmichael(16) → 4", () => {
    assert.strictEqual(carmichael(16), 4n);
  });

  // 7. λ(100) = lcm(λ(4), λ(25)) = lcm(2, 20) = 20
  test("carmichael(100) → 20", () => {
    assert.strictEqual(carmichael(100), 20n);
  });

  // 8. λ(561) (Carmichael number) = 80
  test("carmichael(561) → 80", () => {
    assert.strictEqual(carmichael(561), 80n);
  });

  // 9. λ(9973) (prime) = 9972
  test("carmichael(9973) → 9972", () => {
    assert.strictEqual(carmichael(9973), 9972n);
  });

  // 10. Large semiprime p*q
  test("carmichael(99991 * 10007)", () => {
    const n = 99991n * 10007n;
    const expected = (99990n * 10006n) / 2n; // since both odd primes
    assert.strictEqual(carmichael(n), expected);
  });

  // 11. Throws for invalid n
  test("carmichael(0) throws", () => {
    assert.throws(() => carmichael(0), RangeError);
  });

  test("carmichael(-10) throws", () => {
    assert.throws(() => carmichael(-10), RangeError);
  });
});
