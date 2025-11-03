import { describe, test } from "node:test";
import assert from "node:assert";
import { nthLucas } from "../../src/combinatorics/nthLucas.js";

describe("nthLucas()", () => {
  // 1. Base cases
  test("nthLucas(0) → 2", () => {
    assert.strictEqual(nthLucas(0), 2n);
  });

  test("nthLucas(1) → 1", () => {
    assert.strictEqual(nthLucas(1), 1n);
  });

  // 2. First few known terms
  test("nthLucas(2) → 3", () => {
    assert.strictEqual(nthLucas(2), 3n);
  });

  test("nthLucas(3) → 4", () => {
    assert.strictEqual(nthLucas(3), 4n);
  });

  test("nthLucas(4) → 7", () => {
    assert.strictEqual(nthLucas(4), 7n);
  });

  test("nthLucas(5) → 11", () => {
    assert.strictEqual(nthLucas(5), 11n);
  });

  // 3. Known higher values
  test("nthLucas(10) → 123", () => {
    assert.strictEqual(nthLucas(10), 123n);
  });

  test("nthLucas(15) → 1364", () => {
    assert.strictEqual(nthLucas(15), 1364n);
  });

  // 4. Negative index throws
  test("nthLucas(-1) throws RangeError", () => {
    assert.throws(() => nthLucas(-1), RangeError);
  });

  // 5. Cross-check: L(n) = L(n-1) + L(n-2)
  test("L(8) = L(7) + L(6)", () => {
    const L8 = nthLucas(8);
    const L7 = nthLucas(7);
    const L6 = nthLucas(6);
    assert.strictEqual(L8, L7 + L6);
  });

  // 6. Monotonic growth
  test("L(12) > L(11)", () => {
    assert(nthLucas(12) > nthLucas(11));
  });

  // 7. Large n
  test("nthLucas(50) returns BigInt", () => {
    const res = nthLucas(50);
    assert.strictEqual(typeof res, "bigint");
  });

  // 8. Cross-comparison with Fibonacci (same recurrence)
  test("L(5) ≠ F(5)", () => {
    // Lucas(5) = 11, Fibonacci(5) = 5
    assert.notStrictEqual(nthLucas(5), 5n);
  });

  // 9. Value correctness check
  test("nthLucas(20) → 15127", () => {
    assert.strictEqual(nthLucas(20), 15127n);
  });

  // 10. nthLucas(25) → 167761", () => {
  test("nthLucas(25) → 167761", () => {
    assert.strictEqual(nthLucas(25), 167761n);
  });
});
