import { test } from "node:test";
import assert from "node:assert";
import { jacobiSymbol } from "../../src/prime/jacobiSymbol.js";

test("jacobiSymbol - p is prime (equivalent to Legendre)", () => {
  assert.strictEqual(jacobiSymbol(2, 7), 1);
  assert.strictEqual(jacobiSymbol(3, 7), -1);
});

test("jacobiSymbol - n is composite", () => {
  // (2|9) = 1 since 2 ≡ 3^2 (mod 4?) No, but (2|9) = (2|3)*(2|3) = (-1)*(-1) = 1
  assert.strictEqual(jacobiSymbol(2, 9), 1);
  // (5|15) = (5|3)*(5|5) = (-1)*0 = 0
  assert.strictEqual(jacobiSymbol(5, 15), 0);
  // (7|15) = (7|3)*(7|5) = (1|3)*(2|5) = (1)*(-1) = -1
  assert.strictEqual(jacobiSymbol(7, 15), -1);
});

test("jacobiSymbol - large numbers", () => {
  assert.strictEqual(jacobiSymbol(1234567, 1000003), jacobiSymbol(1234567 % 1000003, 1000003));
});
