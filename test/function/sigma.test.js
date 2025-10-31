import { describe, test } from "node:test";
import assert from "node:assert";
import { sigma } from "../../src/function/sigma.js";

describe("sigma()", () => {
  // 1. Base case: σ(1) = 1
  test("sigma(1) → 1", () => {
    assert.strictEqual(sigma(1), 1n);
  });

  // 2. Prime number: σ(5) = 1 + 5 = 6
  test("sigma(5) → 6", () => {
    assert.strictEqual(sigma(5), 6n);
  });

  // 3. Composite number: σ(6) = 1 + 2 + 3 + 6 = 12
  test("sigma(6) → 12", () => {
    assert.strictEqual(sigma(6), 12n);
  });

  // 4. σ(12) = 1 + 2 + 3 + 4 + 6 + 12 = 28
  test("sigma(12) → 28", () => {
    assert.strictEqual(sigma(12), 28n);
  });

  // 5. σ(25) = 1 + 5 + 25 = 31
  test("sigma(25) → 31", () => {
    assert.strictEqual(sigma(25), 31n);
  });

  // 6. σ(36) = 91
  test("sigma(36) → 91", () => {
    assert.strictEqual(sigma(36), 91n);
  });

  // 7. σ(100) = 217
  test("sigma(100) → 217", () => {
    assert.strictEqual(sigma(100), 217n);
  });

  // 8. σ(prime * prime) = (1 + p₁)(1 + p₂)
  test("sigma(3*5) → 24", () => {
    assert.strictEqual(sigma(15), 24n);
  });

  // 9. Large semiprime: σ(pq) = (1+p)(1+q)
  test("sigma(99991*10007)", () => {
    const n = 99991n * 10007n;
    const expected = (1n + 99991n) * (1n + 10007n);
    assert.strictEqual(sigma(n), expected);
  });

  // 10. σ(p^k) = (p^(k+1) - 1)/(p-1)
  test("sigma(2^5) = 63", () => {
    assert.strictEqual(sigma(32), 63n);
  });

  // 11. σ(60) = 168
  test("sigma(60) → 168", () => {
    assert.strictEqual(sigma(60), 168n);
  });

  // 12. Throws RangeError for invalid inputs
  test("sigma(0) throws RangeError", () => {
    assert.throws(() => sigma(0), RangeError);
  });

  test("sigma(-10) throws RangeError", () => {
    assert.throws(() => sigma(-10), RangeError);
  });

  // 13. Works for BigInt inputs
  test("sigma(100n) → 217n", () => {
    assert.strictEqual(sigma(100n), 217n);
  });
});
