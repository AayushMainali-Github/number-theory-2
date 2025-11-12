import { describe, test } from "node:test";
import assert from "node:assert";
import { crt } from "../../src/arithmetic/crt.js";

describe("crt()", () => {
  test("x≡2 (mod 3), x≡3 (mod 5) → 8", () => {
    const { x, modulus } = crt([2, 3], [3, 5]);
    assert.strictEqual(x, 8n);
    assert.strictEqual(modulus, 15n);
    assert.strictEqual(x % 3n, 2n);
    assert.strictEqual(x % 5n, 3n);
  });

  test("throws if moduli not pairwise coprime", () => {
    assert.throws(() => crt([1, 2], [4, 6]), Error);
  });
});