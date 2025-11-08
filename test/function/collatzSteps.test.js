import { describe, test } from "node:test";
import assert from "node:assert";
import { collatzSteps } from "../../src/function/collatzSteps.js";

describe("collatzSteps()", () => {
  // 1. Base case
  test("collatzSteps(1) → 0", () => {
    assert.strictEqual(collatzSteps(1), 0n);
  });

  // 2. Known examples
  test("collatzSteps(6) → 8", () => {
    assert.strictEqual(collatzSteps(6), 8n);
  });

  test("collatzSteps(19) → 20", () => {
    assert.strictEqual(collatzSteps(19), 20n);
  });

  // 3. BigInt input
  test("collatzSteps(6n) → 8n", () => {
    assert.strictEqual(collatzSteps(6n), 8n);
  });

  // 4. Domain errors
  test("collatzSteps(0) throws RangeError", () => {
    assert.throws(() => collatzSteps(0), RangeError);
  });

  test("collatzSteps(-5) throws RangeError", () => {
    assert.throws(() => collatzSteps(-5), RangeError);
  });

  // 5. Return type
  test("collatzSteps returns BigInt", () => {
    assert.strictEqual(typeof collatzSteps(19), "bigint");
  });
});
