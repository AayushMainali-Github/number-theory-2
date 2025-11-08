import { describe, test } from "node:test";
import assert from "node:assert";
import { sigmaUnitary } from "../../src/function/sigmaUnitary.js";

describe("sigmaUnitary()", () => {
  // 1. Base case
  test("sigmaUnitary(1) → 1", () => {
    assert.strictEqual(sigmaUnitary(1), 1n);
  });

  // 2. Prime powers: σ*(p^a) = 1 + p^a
  test("sigmaUnitary(16) → 17", () => {
    assert.strictEqual(sigmaUnitary(16), 17n);
  });

  test("sigmaUnitary(27) → 28", () => {
    assert.strictEqual(sigmaUnitary(27), 28n);
  });

  // 3. Square-free composites: product (1+p)
  test("sigmaUnitary(30) → 72", () => {
    assert.strictEqual(sigmaUnitary(30), 72n);
  });

  // 4. Non-square-free composite
  test("sigmaUnitary(12) → 20", () => {
    assert.strictEqual(sigmaUnitary(12), 20n);
  });

  // 5. BigInt inputs
  test("sigmaUnitary(12n) → 20n", () => {
    assert.strictEqual(sigmaUnitary(12n), 20n);
  });

  // 6. Domain errors
  test("sigmaUnitary(0) throws RangeError", () => {
    assert.throws(() => sigmaUnitary(0), RangeError);
  });

  test("sigmaUnitary(-5) throws RangeError", () => {
    assert.throws(() => sigmaUnitary(-5), RangeError);
  });

  // 7. Return type
  test("sigmaUnitary returns BigInt", () => {
    assert.strictEqual(typeof sigmaUnitary(30), "bigint");
  });
});