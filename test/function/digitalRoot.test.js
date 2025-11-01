import { describe, test } from "node:test";
import assert from "node:assert";
import { digitalRoot } from "../../src/function/digitalRoot.js";

describe("digitalRoot()", () => {
  // 1. Basic case
  test("digitalRoot(942) → 6", () => {
    assert.strictEqual(digitalRoot(942), 6n);
  });

  // 2. Larger number example
  test("digitalRoot(132189) → 6", () => {
    assert.strictEqual(digitalRoot(132189), 6n);
  });

  // 3. Multiple reductions
  test("digitalRoot(493193) → 2", () => {
    assert.strictEqual(digitalRoot(493193), 2n);
  });

  // 4. Single-digit number
  test("digitalRoot(7) → 7", () => {
    assert.strictEqual(digitalRoot(7), 7n);
  });

  // 5. Input zero
  test("digitalRoot(0) → 0", () => {
    assert.strictEqual(digitalRoot(0), 0n);
  });

  // 6. Negative number
  test("digitalRoot(-12345) → 6", () => {
    assert.strictEqual(digitalRoot(-12345), 6n);
  });

  // 7. BigInt input
  test("digitalRoot(999999999999999n) → 9", () => {
    assert.strictEqual(digitalRoot(999999999999999n), 9n);
  });

  // 8. All same digits (e.g. 7777)
  test("digitalRoot(7777) → 1", () => {
    assert.strictEqual(digitalRoot(7777), 1n);
  });

  // 9. Alternating digits
  test("digitalRoot(121212) → 9", () => {
    assert.strictEqual(digitalRoot(121212), 9n);
  });

  // 10. Returns BigInt type
  test("digitalRoot(12345) returns bigint", () => {
    assert.strictEqual(typeof digitalRoot(12345), "bigint");
  });

  // 11. Very large number
  test("digitalRoot(987654321987654321n) → 9", () => {
    assert.strictEqual(digitalRoot(987654321987654321n), 9n);
  });

  // 12. Edge case near zero
  test("digitalRoot(-1) → 1", () => {
    assert.strictEqual(digitalRoot(-1), 1n);
  });
});
