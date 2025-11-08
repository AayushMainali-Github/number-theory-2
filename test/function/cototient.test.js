import { describe, test } from "node:test";
import assert from "node:assert";
import { cototient } from "../../src/function/cototient.js";

describe("cototient()", () => {
  // 1. Base case
  test("cototient(1) → 0", () => {
    assert.strictEqual(cototient(1), 0n);
  });

  // 2. Prime input: n − φ(n) = 1
  test("cototient(7) → 1", () => {
    assert.strictEqual(cototient(7), 1n);
  });

  // 3. Composite examples
  test("cototient(10) → 6", () => {
    assert.strictEqual(cototient(10), 6n);
  });

  test("cototient(12) → 8", () => {
    assert.strictEqual(cototient(12), 8n);
  });

  // 4. BigInt input
  test("cototient(36n) → 24n", () => {
    assert.strictEqual(cototient(36n), 24n);
  });

  // 5. Domain errors
  test("cototient(0) throws RangeError", () => {
    assert.throws(() => cototient(0), RangeError);
  });

  test("cototient(-5) throws RangeError", () => {
    assert.throws(() => cototient(-5), RangeError);
  });

  // 6. Return type
  test("cototient returns BigInt", () => {
    assert.strictEqual(typeof cototient(12), "bigint");
  });
});