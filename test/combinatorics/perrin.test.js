import { describe, test } from "node:test";
import assert from "node:assert";
import { perrin } from "../../src/combinatorics/perrin.js";

describe("perrin()", () => {
  // 1. Base cases
  test("perrin(0) → [3]", () => {
    assert.deepStrictEqual(perrin(0), [3n]);
  });

  test("perrin(1) → [3,0]", () => {
    assert.deepStrictEqual(perrin(1), [3n, 0n]);
  });

  test("perrin(2) → [3,0,2]", () => {
    assert.deepStrictEqual(perrin(2), [3n, 0n, 2n]);
  });

  // 2. Small sequence correctness
  test("perrin(10) sequence ends at 17", () => {
    const seq = perrin(10);
    assert.strictEqual(seq.at(-1), 17n);
  });

  test("perrin(8) sequence check", () => {
    assert.deepStrictEqual(perrin(8), [3n, 0n, 2n, 3n, 2n, 5n, 5n, 7n, 10n]);
  });

  // 3. BigInt input
  test("perrin(12n) → BigInt input works", () => {
    const seq = perrin(12n);
    assert.strictEqual(seq.at(-1), 29n);
  });

  // 4. Type and length checks
  test("returns array of BigInts and has length n+1", () => {
    const n = 12;
    const seq = perrin(n);
    assert.strictEqual(seq.length, n + 1);
    assert.ok(seq.every((v) => typeof v === "bigint"));
  });

  // 5. Domain errors
  test("perrin(-1) throws RangeError", () => {
    assert.throws(() => perrin(-1), RangeError);
  });
});
