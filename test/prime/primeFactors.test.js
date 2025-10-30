import { describe, test } from "node:test";
import assert from "node:assert";
import { primeFactors } from "../../src/prime/primeFactors.js";

describe("primeFactors()", () => {
  // 1. Basic case
  test("primeFactors(12) → [2,3]", () => {
    assert.deepStrictEqual(primeFactors(12), [2n, 3n]);
  });

  // 2. Composite with multiple distinct primes
  test("primeFactors(132) → [2,3,11]", () => {
    assert.deepStrictEqual(primeFactors(132), [2n, 3n, 11n]);
  });

  // 3. Prime number
  test("primeFactors(97) → [97]", () => {
    assert.deepStrictEqual(primeFactors(97), [97n]);
  });

  // 4. Power of a single prime
  test("primeFactors(2^10) → [2]", () => {
    assert.deepStrictEqual(primeFactors(2n ** 10n), [2n]);
  });

  // 5. Semi-prime
  test("primeFactors(77) → [7,11]", () => {
    assert.deepStrictEqual(primeFactors(77), [7n, 11n]);
  });

  // 6. Highly composite number
  test("primeFactors(360) → [2,3,5]", () => {
    assert.deepStrictEqual(primeFactors(360), [2n, 3n, 5n]);
  });

  // 7. Input less than 2 throws
  test("primeFactors(1) throws RangeError", () => {
    assert.throws(() => primeFactors(1), RangeError);
  });

  // 8. BigInt input works
  test("primeFactors(1000003n) → [1000003]", () => {
    assert.deepStrictEqual(primeFactors(1000003n), [1000003n]);
  });

  // 9. Factorization of 5040 (should return [2,3,5,7])
  test("primeFactors(5040) → [2,3,5,7]", () => {
    assert.deepStrictEqual(primeFactors(5040), [2n, 3n, 5n, 7n]);
  });

  // 10. Perfect square (only one prime)
  test("primeFactors(121) → [11]", () => {
    assert.deepStrictEqual(primeFactors(121), [11n]);
  });

  // 11. Perfect cube (only one prime)
  test("primeFactors(27) → [3]", () => {
    assert.deepStrictEqual(primeFactors(27), [3n]);
  });

  // 12. Distinct output (no duplicates)
  test("primeFactors(720) → unique primes only", () => {
    const primes = primeFactors(720);
    const unique = [...new Set(primes)];
    assert.deepStrictEqual(primes, unique);
  });

  // 13. All outputs are BigInts
  test("primeFactors() outputs only BigInts", () => {
    primeFactors(132).forEach((p) => assert.strictEqual(typeof p, "bigint"));
  });

  // 14. Large number sanity
  test("primeFactors(9876543210) includes 2 and 5", () => {
    const primes = primeFactors(9876543210);
    assert(primes.includes(2n));
    assert(primes.includes(5n));
  });
});
