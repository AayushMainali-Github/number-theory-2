import { describe, test } from "node:test";
import assert from "node:assert";
import { tauUnitary } from "../../src/function/tauUnitary.js";

describe("tauUnitary()", () => {
  // 1. Base case
  test("tauUnitary(1) → 1", () => {
    assert.strictEqual(tauUnitary(1), 1n);
  });

  // 2. Primes (ω = 1 ⇒ 2^1 = 2)
  test("tauUnitary(p) = 2 for primes", () => {
    assert.strictEqual(tauUnitary(2), 2n);
    assert.strictEqual(tauUnitary(3), 2n);
    assert.strictEqual(tauUnitary(5), 2n);
  });

  // 3. Square-free composites
  test("tauUnitary(30) → 8", () => {
    assert.strictEqual(tauUnitary(30), 8n);
  });

  // 4. Non-square-free composites still depend on ω(n)
  test("tauUnitary(12) → 4", () => {
    assert.strictEqual(tauUnitary(12), 4n);
  });

  test("tauUnitary(36) → 4", () => {
    assert.strictEqual(tauUnitary(36), 4n);
  });

  // 5. BigInt inputs
  test("tauUnitary(12n) → 4n", () => {
    assert.strictEqual(tauUnitary(12n), 4n);
  });

  // 6. Domain errors
  test("tauUnitary(0) throws RangeError", () => {
    assert.throws(() => tauUnitary(0), RangeError);
  });

  test("tauUnitary(-6) throws RangeError", () => {
    assert.throws(() => tauUnitary(-6), RangeError);
  });

  // 7. Return type
  test("tauUnitary returns BigInt", () => {
    assert.strictEqual(typeof tauUnitary(30), "bigint");
  });
});