import { describe, test } from "node:test";
import assert from "node:assert";
import { collatzSequence } from "../../src/function/collatzSequence.js";

describe("collatzSequence()", () => {
  // 1. Base case
  test("collatzSequence(1) → [1n]", () => {
    assert.deepStrictEqual(collatzSequence(1), [1n]);
  });

  // 2. Known example for 6
  test("collatzSequence(6) sequence correctness", () => {
    const expected = [6n, 3n, 10n, 5n, 16n, 8n, 4n, 2n, 1n];
    assert.deepStrictEqual(collatzSequence(6), expected);
  });

  // 3. BigInt input
  test("collatzSequence(6n) returns BigInt array", () => {
    const seq = collatzSequence(6n);
    assert.strictEqual(Array.isArray(seq), true);
    assert.strictEqual(seq.every((x) => typeof x === "bigint"), true);
  });

  // 4. Domain errors
  test("collatzSequence(0) throws RangeError", () => {
    assert.throws(() => collatzSequence(0), RangeError);
  });

  test("collatzSequence(-5) throws RangeError", () => {
    assert.throws(() => collatzSequence(-5), RangeError);
  });
});