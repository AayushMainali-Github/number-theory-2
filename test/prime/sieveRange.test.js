import { describe, test } from "node:test";
import assert from "node:assert";
import { sieveRange } from "../../src/prime/sieveRange.js";
const { sieve } = await import("../../src/prime/sieve.js");

describe("sieveRange()", () => {
  // 1. Small range
  test("sieveRange(10, 30) → [11, 13, 17, 19, 23, 29]", () => {
    const expected = [11n, 13n, 17n, 19n, 23n, 29n];
    assert.deepStrictEqual(sieveRange(10, 30), expected);
  });

  // 2. Range starting at 2
  test("sieveRange(2, 10) → [2, 3, 5, 7]", () => {
    const expected = [2n, 3n, 5n, 7n];
    assert.deepStrictEqual(sieveRange(2, 10), expected);
  });

  // 3. Range smaller than first prime
  test("sieveRange(0, 1) → []", () => {
    assert.deepStrictEqual(sieveRange(0, 1), []);
  });

  // 4. Single number prime
  test("sieveRange(13, 13) → [13]", () => {
    assert.deepStrictEqual(sieveRange(13, 13), [13n]);
  });

  // 5. Single number non-prime
  test("sieveRange(15, 15) → []", () => {
    assert.deepStrictEqual(sieveRange(15, 15), []);
  });

  // 6. Range with consecutive primes
  test("sieveRange(17, 19) → [17, 19]", () => {
    assert.deepStrictEqual(sieveRange(17, 19), [17n, 19n]);
  });

  // 7. Larger range 50–100
  test("sieveRange(50, 100) contains 97", () => {
    const primes = sieveRange(50, 100);
    assert(primes.includes(97n));
  });

  // 8. Verify count correctness for 1–100
  test("sieveRange(1, 100) count = 25", () => {
    assert.strictEqual(sieveRange(1, 100).length, 25);
  });

  // 9. Ensure no even numbers except 2
  test("No even primes except 2", () => {
    const primes = sieveRange(2, 100);
    primes.forEach((p) => {
      if (p !== 2n) assert(p % 2n !== 0n);
    });
  });

  // 10. Cross-check with full sieve(100)
  test("sieveRange(1, 100) equals sieve(100)", async () => {
    const range = sieveRange(1, 100);
    const full = sieve(100);
    assert.deepStrictEqual(range, full);
  });

  // 11. Negative start (should adjust to 2)
  test("sieveRange(-50, 10) → [2, 3, 5, 7]", () => {
    const expected = [2n, 3n, 5n, 7n];
    assert.deepStrictEqual(sieveRange(-50, 10), expected);
  });

  // 12. Non-prime bounds (end = 30)
  test("sieveRange(24, 30) → [29]", () => {
    assert.deepStrictEqual(sieveRange(24, 30), [29n]);
  });

  // 13. Empty range (end < start)
  test("sieveRange(100, 50) → []", () => {
    assert.deepStrictEqual(sieveRange(100, 50), []);
  });

  // 14. Range with BigInt input
  test("sieveRange(100n, 200n) → BigInt primes", () => {
    const primes = sieveRange(100n, 200n);
    primes.forEach((p) => assert.strictEqual(typeof p, "bigint"));
  });

  // 15. Prime density check up to 1000
  test("sieveRange(1, 1000) ~168 primes", () => {
    const primes = sieveRange(1, 1000);
    assert(Math.abs(primes.length - 168) < 2);
  });

  // 16. Large range sanity
  test("sieveRange(1, 1e6) runs", () => {
    const primes = sieveRange(1, 1_000_000);
    assert(primes.length > 70000);
  });

  // 17. Check that first prime ≥ start
  test("first prime ≥ start", () => {
    const primes = sieveRange(90, 100);
    assert(primes[0] >= 90n);
  });

  // 18. Check that last prime ≤ end
  test("last prime ≤ end", () => {
    const primes = sieveRange(90, 100);
    const last = primes.at(-1);
    assert(last <= 100n);
  });

  // 19. Ensure all numbers in result are primes
  test("all primes valid", () => {
    const primes = sieveRange(200, 300);
    for (const p of primes) {
      for (let i = 2n; i * i <= p; i++) {
        assert.notStrictEqual(p % i, 0n);
      }
    }
  });

  // 20. Range too large throws RangeError
  test("sieveRange(0, 1e20n) throws RangeError", () => {
    assert.throws(() => sieveRange(0n, 10n ** 20n), RangeError);
  });
});
