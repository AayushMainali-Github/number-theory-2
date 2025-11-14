import { test, describe } from "node:test";
import assert from "node:assert";
import { orderMod } from "../../src/arithmetic/orderMod.js";
import { powMod } from "../../src/arithmetic/powMod.js";
import { carmichael } from "../../src/function/carmichael.js";

describe("orderMod()", () => {
  // 1. Basic known orders
  test("orderMod(2,7) → 3", () => {
    assert.strictEqual(orderMod(2, 7), 3n);
  });

  test("orderMod(3,10) → 4", () => {
    assert.strictEqual(orderMod(3, 10), 4n);
  });

  test("orderMod(5,8) → 2", () => {
    assert.strictEqual(orderMod(5, 8), 2n);
  });

  // 2. Negative a normalization
  test("orderMod(-3,7) → 3", () => {
    assert.strictEqual(orderMod(-3, 7), 3n);
  });

  // 3. Property: a^order ≡ 1 (mod m)
  test("powMod(a, orderMod(a,m), m) = 1", () => {
    for (const [a, m] of [
      [2n, 7n],
      [3n, 10n],
      [5n, 8n],
    ]) {
      const ord = orderMod(a, m);
      assert.strictEqual(powMod(a, ord, m), 1n);
    }
  });

  // 4. Property: order divides λ(m)
  test("orderMod(a,m) | carmichael(m)", () => {
    for (const [a, m] of [
      [2n, 7n],
      [3n, 10n],
      [5n, 8n],
    ]) {
      const ord = orderMod(a, m);
      const lam = carmichael(m);
      assert.strictEqual(lam % ord, 0n);
    }
  });

  // 5. Non-coprime throws
  test("orderMod(4,10) throws Error", () => {
    assert.throws(() => orderMod(4, 10), Error);
  });

  // 6. m ≤ 1 throws RangeError
  test("orderMod(2,1) throws RangeError", () => {
    assert.throws(() => orderMod(2, 1), RangeError);
  });
});