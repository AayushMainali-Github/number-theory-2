import { describe, test } from "node:test";
import assert from "node:assert";
import { motzkin } from "../../src/combinatorics/motzkin.js";

describe("motzkin()", () => {
  // 1. Base cases
  test("motzkin(0) → [1]", () => {
    assert.deepStrictEqual(motzkin(0), [1n]);
  });

  test("motzkin(1) → [1,1]", () => {
    assert.deepStrictEqual(motzkin(1), [1n, 1n]);
  });

  // 2. Small sequence correctness
  test("motzkin(6) → [1,1,2,4,9,21,51]", () => {
    assert.deepStrictEqual(motzkin(6), [1n, 1n, 2n, 4n, 9n, 21n, 51n]);
  });

  // 3. Last term checks
  test("motzkin(10) last term = 2188", () => {
    const seq = motzkin(10);
    assert.strictEqual(seq.at(-1), 2188n);
  });

  // 4. BigInt input
  test("motzkin(8n) → BigInt input works", () => {
    const seq = motzkin(8n);
    assert.strictEqual(seq.at(-1), 323n);
  });

  // 5. Type and length checks
  test("returns array of BigInts and has length n+1", () => {
    const n = 12;
    const seq = motzkin(n);
    assert.strictEqual(seq.length, n + 1);
    assert.ok(seq.every((v) => typeof v === "bigint"));
  });

  // 6. Domain errors
  test("motzkin(-1) throws RangeError", () => {
    assert.throws(() => motzkin(-1), RangeError);
  });
});
