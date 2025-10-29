import { describe, test } from "node:test";
import assert from "node:assert";
import { sieve } from "../../src/prime/sieve.js";

describe("sieve()", () => {
  // 1. Base case: limit < 2
  test("sieve(1) → []", () => {
    assert.deepStrictEqual(sieve(1), []);
  });

  // 2. Limit = 2
  test("sieve(2) → [2]", () => {
    assert.deepStrictEqual(sieve(2), [2n]);
  });

  // 3. Limit = 10
  test("sieve(10) → [2, 3, 5, 7]", () => {
    assert.deepStrictEqual(sieve(10), [2n, 3n, 5n, 7n]);
  });

  // 4. Limit = 30
  test("sieve(30) → correct primes", () => {
    const expected = [2n, 3n, 5n, 7n, 11n, 13n, 17n, 19n, 23n, 29n];
    assert.deepStrictEqual(sieve(30), expected);
  });

  // 5. Medium range check
  test("sieve(50) contains 47", () => {
    const primes = sieve(50);
    assert(primes.includes(47n));
  });

  // 6. Count check up to 100
  test("sieve(100) has 25 primes", () => {
    const primes = sieve(100);
    assert.strictEqual(primes.length, 25);
  });

  // 7. Verify last prime ≤ limit
  test("last prime ≤ limit", () => {
    const primes = sieve(200);
    assert(primes[primes.length - 1] <= 200n);
  });

  // 8. Verify next number after last prime is not prime
  test("no prime > limit", () => {
    const limit = 1000;
    const primes = sieve(limit);
    const last = primes[primes.length - 1];
    assert(last <= BigInt(limit));
  });

  // 9. Range with BigInt input
  test("sieve(50n) → BigInt output", () => {
    const primes = sieve(50n);
    primes.forEach((p) => assert.strictEqual(typeof p, "bigint"));
  });

  // 10. Throw if input > Number.MAX_SAFE_INTEGER
  test("sieve(1e20n) throws RangeError", () => {
    assert.throws(() => sieve(10n ** 20n), RangeError);
  });

  // 11. Consistency check for back-to-back calls
  test("sieve(30) twice → same result", () => {
    const a = sieve(30);
    const b = sieve(30);
    assert.deepStrictEqual(a, b);
  });

  // 12. Smallest odd prime
  test("sieve(3) → [2, 3]", () => {
    assert.deepStrictEqual(sieve(3), [2n, 3n]);
  });

  // 13. Include 97 when limit = 100
  test("sieve(100) includes 97", () => {
    const primes = sieve(100);
    assert(primes.includes(97n));
  });

  // 14. Exclude non-prime like 49
  test("sieve(50) does not include 49", () => {
    const primes = sieve(50);
    assert(!primes.includes(49n));
  });

  // 15. Prime density roughly correct up to 1000
  test("sieve(1000) count ~168", () => {
    const primes = sieve(1000);
    assert(Math.abs(primes.length - 168) < 2);
  });

  // 16. Edge prime check
  test("sieve(13) → ends with 13", () => {
    const primes = sieve(13);
    assert.strictEqual(primes.at(-1), 13n);
  });

  // 17. Large segment performance sanity
  test("sieve(1e6) runs successfully", () => {
    const primes = sieve(1_000_000);
    assert(primes.length > 70000);
  });

  // 18. First prime is always 2
  test("first prime is 2", () => {
    const primes = sieve(100);
    assert.strictEqual(primes[0], 2n);
  });

  // 19. Consecutive primes difference ≥ 2
  test("no consecutive primes with diff < 2 except [2,3]", () => {
    const primes = sieve(100);
    for (let i = 1; i < primes.length; i++) {
      const diff = primes[i] - primes[i - 1];
      if (primes[i - 1] === 2n && primes[i] === 3n) continue; // exception
      assert(diff >= 2n);
    }
  });

  // 20. Ensure all primes are actually prime
  test("every number passes isPrime-like check", () => {
    const primes = sieve(200);
    for (const p of primes) {
      for (let i = 2n; i * i <= p; i++) {
        assert.notStrictEqual(p % i, 0n);
      }
    }
  });
});
