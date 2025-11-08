import { describe, test } from "node:test";
import assert from "node:assert";
import { dedekindPsi } from "../../src/function/dedekindPsi.js";
import { sigma } from "../../src/function/sigma.js";

describe("dedekindPsi()", () => {
  // 1. Initial sequence values
  test("psi(1)=1, psi(2)=3, psi(3)=4, psi(4)=6, psi(5)=6, psi(6)=12", () => {
    assert.strictEqual(dedekindPsi(1), 1n);
    assert.strictEqual(dedekindPsi(2), 3n);
    assert.strictEqual(dedekindPsi(3), 4n);
    assert.strictEqual(dedekindPsi(4), 6n);
    assert.strictEqual(dedekindPsi(5), 6n);
    assert.strictEqual(dedekindPsi(6), 12n);
  });

  // 2. Prime power identity: ψ(p^a) = (p + 1) p^{a-1}
  test("psi(16) → 24", () => {
    assert.strictEqual(dedekindPsi(16), 24n);
  });

  // 3. Square-free property: ψ(n) = σ(n)
  test("psi(30) equals sigma(30)", () => {
    assert.strictEqual(dedekindPsi(30), sigma(30)); // both 72n
  });

  // 4. BigInt input
  test("psi(12n) → 24n", () => {
    assert.strictEqual(dedekindPsi(12n), 24n);
  });

  // 5. Domain errors
  test("psi(0) throws RangeError", () => {
    assert.throws(() => dedekindPsi(0), RangeError);
  });

  test("psi(-5) throws RangeError", () => {
    assert.throws(() => dedekindPsi(-5), RangeError);
  });

  // 6. Return type is BigInt
  test("dedekindPsi returns BigInt", () => {
    assert.strictEqual(typeof dedekindPsi(12), "bigint");
  });
});
