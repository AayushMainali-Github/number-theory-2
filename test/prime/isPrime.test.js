import { describe, test } from "node:test";
import assert from "node:assert";
import { isPrime } from "../../src/prime/isPrime.js";

describe("isPrime()", () => {
  // 1. Base cases
  test("isPrime(0) → false", () => {
    assert.strictEqual(isPrime(0), false);
  });

  // 2. Negative number
  test("isPrime(-7) → false", () => {
    assert.strictEqual(isPrime(-7), false);
  });

  // 3. isPrime(1) → false
  test("isPrime(1) → false", () => {
    assert.strictEqual(isPrime(1), false);
  });

  // 4. Smallest prime
  test("isPrime(2) → true", () => {
    assert.strictEqual(isPrime(2), true);
  });

  // 5. Second prime
  test("isPrime(3) → true", () => {
    assert.strictEqual(isPrime(3), true);
  });

  // 6. Small even non-prime
  test("isPrime(4) → false", () => {
    assert.strictEqual(isPrime(4), false);
  });

  // 7. Small odd composite
  test("isPrime(9) → false", () => {
    assert.strictEqual(isPrime(9), false);
  });

  // 8. Small prime (5)
  test("isPrime(5) → true", () => {
    assert.strictEqual(isPrime(5), true);
  });

  // 9. Prime number near 100
  test("isPrime(97) → true", () => {
    assert.strictEqual(isPrime(97), true);
  });

  // 10. Composite near 100
  test("isPrime(99) → false", () => {
    assert.strictEqual(isPrime(99), false);
  });

  // 11. Square number
  test("isPrime(121) → false", () => {
    assert.strictEqual(isPrime(121), false);
  });

  // 12. Larger known prime
  test("isPrime(1013) → true", () => {
    assert.strictEqual(isPrime(1013), true);
  });

  // 13. Larger known composite
  test("isPrime(1001) → false", () => {
    assert.strictEqual(isPrime(1001), false);
  });

  // 14. Large prime BigInt
  test("isPrime(9999999967n) → true", () => {
    assert.strictEqual(isPrime(9999999967n), true);
  });

  // 15. Large composite BigInt
  test("isPrime(9999999967n * 3n) → false", () => {
    const composite = 9999999967n * 3n;
    assert.strictEqual(isPrime(composite), false);
  });

  // 16. Mersenne prime (2^31 - 1)
  test("isPrime(2147483647) → true", () => {
    assert.strictEqual(isPrime(2147483647), true);
  });

  // 17. Large power of two (2^40)
  test("isPrime(2^40) → false", () => {
    const n = 2n ** 40n;
    assert.strictEqual(isPrime(n), false);
  });

  // 18. Twin primes check (41, 43)
  test("isPrime(41) → true and isPrime(43) → true", () => {
    assert.strictEqual(isPrime(41), true);
    assert.strictEqual(isPrime(43), true);
  });

  // 19. Random large primes near 1e6
  test("isPrime(999983) → true", () => {
    assert.strictEqual(isPrime(999983), true);
  });

  // 20. BigInt edge case below prime threshold
  test("isPrime(1000000000000n) → false", () => {
    assert.strictEqual(isPrime(1000000000000n), false);
  });

  // 21. A large prime number
  test("isPrime(99194853094755497n) → true", () => {
    assert.strictEqual(isPrime(99194853094755497n), true);
  });

  // 22. A large composite number
  test("isPrime(99194853094755497n * 28657n) → false", () => {
    const composite = 99194853094755497n * 28657n;
    assert.strictEqual(isPrime(composite), false);
  });
});
