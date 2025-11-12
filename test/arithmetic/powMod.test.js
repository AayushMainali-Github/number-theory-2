import { describe, test } from "node:test";
import assert from "node:assert";
import { powMod } from "../../src/arithmetic/powMod.js";

describe("powMod()", () => {
  test("powMod(2,10,1000) = 24", () => {
    assert.strictEqual(powMod(2, 10, 1000), 24n);
  });

  test("powMod(5n,0n,13n) = 1", () => {
    assert.strictEqual(powMod(5n, 0n, 13n), 1n);
  });

  test("negative base normalization: powMod(-2,3,5) = 2", () => {
    assert.strictEqual(powMod(-2, 3, 5), 2n);
  });

  test("throws on negative exponent", () => {
    assert.throws(() => powMod(2, -1, 5), RangeError);
  });

  test("throws on non-positive modulus", () => {
    assert.throws(() => powMod(2, 3, 0), RangeError);
  });
});