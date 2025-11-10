import { describe, test } from "node:test";
import assert from "node:assert";
import { tribonacci } from "../../src/combinatorics/tribonacci.js";

describe("tribonacci()", () => {
  // 1. Base cases
  test("tribonacci(0) → [0]", () => {
    assert.deepStrictEqual(tribonacci(0), [0n]);
  });

  test("tribonacci(1) → [0,0]", () => {
    assert.deepStrictEqual(tribonacci(1), [0n, 0n]);
  });

  test("tribonacci(2) → [0,0,1]", () => {
    assert.deepStrictEqual(tribonacci(2), [0n, 0n, 1n]);
  });

  // 2. Small sequence correctness
  test("tribonacci(6) → [0,0,1,1,2,4,7]", () => {
    assert.deepStrictEqual(tribonacci(6), [0n, 0n, 1n, 1n, 2n, 4n, 7n]);
  });

  // 3. Last term checks
  test("tribonacci(10) last term = 81", () => {
    const seq = tribonacci(10);
    assert.strictEqual(seq.at(-1), 81n);
  });

  test("tribonacci(11) last term = 149", () => {
    const seq = tribonacci(11);
    assert.strictEqual(seq.at(-1), 149n);
  });

  // 4. BigInt input
  test("tribonacci(10n) → BigInt input works", () => {
    const seq = tribonacci(10n);
    assert.strictEqual(seq.at(-1), 81n);
  });

  // 5. Type and length checks
  test("returns array of BigInts and has length n+1", () => {
    const n = 15;
    const seq = tribonacci(n);
    assert.strictEqual(seq.length, n + 1);
    assert.ok(seq.every((v) => typeof v === "bigint"));
  });

  // 6. Domain errors
  test("tribonacci(-1) throws RangeError", () => {
    assert.throws(() => tribonacci(-1), RangeError);
  });

  test("tribonacci(-10n) throws RangeError", () => {
    assert.throws(() => tribonacci(-10n), RangeError);
  });
});
