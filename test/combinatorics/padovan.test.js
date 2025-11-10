import { describe, test } from "node:test";
import assert from "node:assert";
import { padovan } from "../../src/combinatorics/padovan.js";

describe("padovan()", () => {
  // 1. Base cases
  test("padovan(0) → [1]", () => {
    assert.deepStrictEqual(padovan(0), [1n]);
  });

  test("padovan(1) → [1,1]", () => {
    assert.deepStrictEqual(padovan(1), [1n, 1n]);
  });

  test("padovan(2) → [1,1,1]", () => {
    assert.deepStrictEqual(padovan(2), [1n, 1n, 1n]);
  });

  // 2. Small sequence correctness
  test("padovan(8) sequence check", () => {
    assert.deepStrictEqual(padovan(8), [1n, 1n, 1n, 2n, 2n, 3n, 4n, 5n, 7n]);
  });

  // 3. Last term checks
  test("padovan(10) last term = 12", () => {
    const seq = padovan(10);
    assert.strictEqual(seq.at(-1), 12n);
  });

  // 4. BigInt input
  test("padovan(12n) → BigInt input works", () => {
    const seq = padovan(12n);
    assert.strictEqual(seq.at(-1), 21n);
  });

  // 5. Type and length checks
  test("returns array of BigInts and has length n+1", () => {
    const n = 15;
    const seq = padovan(n);
    assert.strictEqual(seq.length, n + 1);
    assert.ok(seq.every((v) => typeof v === "bigint"));
  });

  // 6. Domain errors
  test("padovan(-1) throws RangeError", () => {
    assert.throws(() => padovan(-1), RangeError);
  });
});