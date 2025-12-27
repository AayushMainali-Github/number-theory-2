import { test } from "node:test";
import assert from "node:assert";
import { modSqrt } from "../../src/arithmetic/modSqrt.js";

test("modSqrt - basics", () => {
  assert.strictEqual(modSqrt(5, 11), 4n);
  assert.strictEqual(modSqrt(0, 11), 0n);
  assert.strictEqual(modSqrt(1, 11), 1n);
});

test("modSqrt - no solution", () => {
  assert.strictEqual(modSqrt(2, 5), null);
  assert.strictEqual(modSqrt(3, 7), null);
});

test("modSqrt - large prime (p % 4 == 1)", () => {
  // 13 % 4 == 1
  // x^2 ≡ 3 (mod 13) -> 3|13 is (3/13) = (13|3) = (1|3) = 1.
  // 4^2 = 16 ≡ 3 (mod 13).
  // modSqrt(3, 13) could be 4 or 9.
  const res = modSqrt(3, 13);
  assert.ok(res === 4n || res === 9n);
});
