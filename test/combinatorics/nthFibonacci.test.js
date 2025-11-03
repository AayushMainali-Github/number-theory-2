import { describe, test } from "node:test";
import assert from "node:assert";
import { nthFibonacci } from "../../src/combinatorics/nthFibonacci.js";

describe("nthFibonacci()", () => {
  // 1. Base cases
  test("nthFibonacci(0) → 0", () => {
    assert.strictEqual(nthFibonacci(0), 0n);
  });

  test("nthFibonacci(1) → 1", () => {
    assert.strictEqual(nthFibonacci(1), 1n);
  });

  // 2. First few known terms
  test("nthFibonacci(2) → 1", () => {
    assert.strictEqual(nthFibonacci(2), 1n);
  });

  test("nthFibonacci(3) → 2", () => {
    assert.strictEqual(nthFibonacci(3), 2n);
  });

  test("nthFibonacci(4) → 3", () => {
    assert.strictEqual(nthFibonacci(4), 3n);
  });

  test("nthFibonacci(5) → 5", () => {
    assert.strictEqual(nthFibonacci(5), 5n);
  });

  // 3. Known higher values
  test("nthFibonacci(10) → 55", () => {
    assert.strictEqual(nthFibonacci(10), 55n);
  });

  test("nthFibonacci(20) → 6765", () => {
    assert.strictEqual(nthFibonacci(20), 6765n);
  });

  // 4. Negative input throws
  test("nthFibonacci(-1) throws RangeError", () => {
    assert.throws(() => nthFibonacci(-1), RangeError);
  });

  // 5. Large BigInt index
  test("nthFibonacci(50) returns BigInt", () => {
    const res = nthFibonacci(50);
    assert.strictEqual(typeof res, "bigint");
  });

  // 6. Cross-check: F(n) = F(n-1) + F(n-2)
  test("F(15) = F(14) + F(13)", () => {
    const F15 = nthFibonacci(15);
    const F14 = nthFibonacci(14);
    const F13 = nthFibonacci(13);
    assert.strictEqual(F15, F14 + F13);
  });

  // 7. Monotonic increase
  test("F(25) > F(24)", () => {
    assert(nthFibonacci(25) > nthFibonacci(24));
  });

  // 8. Large values test
  test("nthFibonacci(100) produces BigInt", () => {
    const result = nthFibonacci(100);
    assert.strictEqual(typeof result, "bigint");
  });

  // 9. Value correctness for F(50)
  test("nthFibonacci(50) → 12586269025", () => {
    assert.strictEqual(nthFibonacci(50), 12586269025n);
  });

  // 10. F(25) = 75025
  test("nthFibonacci(25) → 75025", () => {
    assert.strictEqual(nthFibonacci(25), 75025n);
  });
});
