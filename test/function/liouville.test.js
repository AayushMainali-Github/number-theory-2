import { describe, test } from "node:test";
import assert from "node:assert";
import { liouville } from "../../src/function/liouville.js";
import { omegaBig } from "../../src/function/omegaBig.js";

describe("liouville()", () => {
  // 1. Base cases and primes
  test("liouville(1) → 1", () => {
    assert.strictEqual(liouville(1), 1n);
  });

  test("liouville(2) → -1 (prime)", () => {
    assert.strictEqual(liouville(2), -1n);
  });

  // 2. Products with even/odd multiplicity
  test("liouville(6) → 1 (2×3, Ω=2)", () => {
    assert.strictEqual(liouville(6), 1n);
  });

  test("liouville(12) → -1 (2^2·3, Ω=3)", () => {
    assert.strictEqual(liouville(12), -1n);
  });

  test("liouville(36) → 1 (2^2·3^2, Ω=4)", () => {
    assert.strictEqual(liouville(36), 1n);
  });

  test("liouville(3^5) → -1 (Ω=5)", () => {
    const n = 3n ** 5n;
    assert.strictEqual(liouville(n), -1n);
  });

  // 3. Large semiprime
  test("liouville(99991*10007) → 1", () => {
    const p = 99991n,
      q = 10007n;
    assert.strictEqual(liouville(p * q), 1n);
  });

  // 4. Domain errors
  test("liouville(0) throws RangeError", () => {
    assert.throws(() => liouville(0), RangeError);
  });

  test("liouville(-10) throws RangeError", () => {
    assert.throws(() => liouville(-10), RangeError);
  });

  // 5. Consistency with omegaBig parity for small values
  test("liouville(n) = (-1)^{Ω(n)} for n=2..200", () => {
    for (let n = 2; n <= 200; n++) {
      const omega = omegaBig(n);
      const expected = omega % 2n === 0n ? 1n : -1n;
      assert.strictEqual(liouville(n), expected);
    }
  });

  // 6. Type check
  test("returns bigint", () => {
    assert.strictEqual(typeof liouville(100), "bigint");
  });
});
