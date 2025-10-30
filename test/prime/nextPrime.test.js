import { test, describe } from "node:test";
import assert from "node:assert";
import { nextPrime } from "../../src/prime/nextPrime.js";

describe("nextPrime()", () => {
  // 1. Very small input
  test("nextPrime(0) → 2", () => {
    assert.strictEqual(nextPrime(0), 2n);
  });

  // 2. Next after 2 should be 3
  test("nextPrime(2) → 3", () => {
    assert.strictEqual(nextPrime(2), 3n);
  });

  // 3. After 3 → 5
  test("nextPrime(3) → 5", () => {
    assert.strictEqual(nextPrime(3), 5n);
  });

  // 4. After 10 → 11
  test("nextPrime(10) → 11", () => {
    assert.strictEqual(nextPrime(10), 11n);
  });

  // 5. After 11 → 13
  test("nextPrime(11) → 13", () => {
    assert.strictEqual(nextPrime(11), 13n);
  });

  // 6. After 12 → 13
  test("nextPrime(12) → 13", () => {
    assert.strictEqual(nextPrime(12), 13n);
  });

  // 7. After 97 → 101
  test("nextPrime(97) → 101", () => {
    assert.strictEqual(nextPrime(97), 101n);
  });

  // 8. After even composite → next prime
  test("nextPrime(100) → 101", () => {
    assert.strictEqual(nextPrime(100), 101n);
  });

  // 9. After a large prime number
  test("nextPrime(997) → 1009", () => {
    assert.strictEqual(nextPrime(997), 1009n);
  });

  // 10. Large BigInt test
  test("nextPrime(1_000_000_000_000n) → valid", () => {
    const np = nextPrime(1_000_000_000_000n);
    assert(np > 1_000_000_000_000n);
  });
});
