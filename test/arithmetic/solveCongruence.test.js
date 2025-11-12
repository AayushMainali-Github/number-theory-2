import { describe, test } from "node:test";
import assert from "node:assert";
import { solveCongruence } from "../../src/arithmetic/solveCongruence.js";

describe("solveCongruence()", () => {
  test("2x≡4 (mod 6) → x≡2 (mod 3)", () => {
    const { x, modulo } = solveCongruence(2, 4, 6);
    assert.strictEqual(x, 2n);
    assert.strictEqual(modulo, 3n);
    // Verify: (2 * x - 4) is divisible by 6
    assert.strictEqual(((2n * x) - 4n) % 6n, 0n);
  });

  test("2x≡3 (mod 6) → no solution", () => {
    assert.throws(() => solveCongruence(2, 3, 6), Error);
  });

  test("throws on non-positive modulus", () => {
    assert.throws(() => solveCongruence(1, 1, 0), RangeError);
  });
});