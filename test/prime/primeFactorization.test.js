import { describe, test } from "node:test";
import assert from "node:assert";
import { primeFactorization } from "../../src/prime/primeFactorization.js";

describe("primeFactorization()", () => {
  // 1. Basic small composite number
  test("primeFactorization(12) → [{2,2}, {3,1}]", () => {
    const expected = [
      { prime: 2n, power: 2 },
      { prime: 3n, power: 1 },
    ];
    assert.deepStrictEqual(primeFactorization(12), expected);
  });

  // 2. Larger composite with multiple distinct primes
  test("primeFactorization(132) → [{2,2}, {3,1}, {11,1}]", () => {
    const expected = [
      { prime: 2n, power: 2 },
      { prime: 3n, power: 1 },
      { prime: 11n, power: 1 },
    ];
    assert.deepStrictEqual(primeFactorization(132), expected);
  });

  // 3. Prime number should return itself with power 1
  test("primeFactorization(97) → [{97,1}]", () => {
    const expected = [{ prime: 97n, power: 1 }];
    assert.deepStrictEqual(primeFactorization(97), expected);
  });

  // 4. Power of a single prime
  test("primeFactorization(2^8) → [{2,8}]", () => {
    const n = 2n ** 8n;
    const expected = [{ prime: 2n, power: 8 }];
    assert.deepStrictEqual(primeFactorization(n), expected);
  });

  // 5. Semi-prime case (product of two primes)
  test("primeFactorization(77) → [{7,1}, {11,1}]", () => {
    const expected = [
      { prime: 7n, power: 1 },
      { prime: 11n, power: 1 },
    ];
    assert.deepStrictEqual(primeFactorization(77), expected);
  });

  // 6. Highly composite number
  test("primeFactorization(360) → [{2,3}, {3,2}, {5,1}]", () => {
    const expected = [
      { prime: 2n, power: 3 },
      { prime: 3n, power: 2 },
      { prime: 5n, power: 1 },
    ];
    assert.deepStrictEqual(primeFactorization(360), expected);
  });

  // 7. Negative input throws RangeError
  test("primeFactorization(-60) throws RangeError", () => {
    assert.throws(() => primeFactorization(-60), RangeError);
  });

  // 8. Input less than 2 throws RangeError
  test("primeFactorization(1) throws RangeError", () => {
    assert.throws(() => primeFactorization(1), RangeError);
  });

  // 9. BigInt input works correctly
  test("primeFactorization(1000003n) → [{1000003,1}]", () => {
    const expected = [{ prime: 1000003n, power: 1 }];
    assert.deepStrictEqual(primeFactorization(1000003n), expected);
  });

  // 10. Mixed prime powers
  test("primeFactorization(2^5 * 3^2 * 7) → [{2,5}, {3,2}, {7,1}]", () => {
    const n = 2n ** 5n * 3n ** 2n * 7n;
    const expected = [
      { prime: 2n, power: 5 },
      { prime: 3n, power: 2 },
      { prime: 7n, power: 1 },
    ];
    assert.deepStrictEqual(primeFactorization(n), expected);
  });

  // 11. Factorization of perfect square
  test("primeFactorization(121) → [{11,2}]", () => {
    const expected = [{ prime: 11n, power: 2 }];
    assert.deepStrictEqual(primeFactorization(121), expected);
  });

  // 12. Factorization of perfect cube
  test("primeFactorization(27) → [{3,3}]", () => {
    const expected = [{ prime: 3n, power: 3 }];
    assert.deepStrictEqual(primeFactorization(27), expected);
  });

  // 13. Factorization of 5040 (7!)
  test("primeFactorization(5040) → [{2,4}, {3,2}, {5,1}, {7,1}]", () => {
    const expected = [
      { prime: 2n, power: 4 },
      { prime: 3n, power: 2 },
      { prime: 5n, power: 1 },
      { prime: 7n, power: 1 },
    ];
    assert.deepStrictEqual(primeFactorization(5040), expected);
  });

  // 14. All powers should be integers
  test("powers are integers", () => {
    const factors = primeFactorization(600);
    factors.forEach((f) => assert(Number.isInteger(f.power)));
  });

  // 15. All primes must be distinct
  test("distinct prime keys", () => {
    const factors = primeFactorization(720);
    const primes = factors.map((f) => f.prime);
    const unique = [...new Set(primes)];
    assert.deepStrictEqual(primes, unique);
  });
});
