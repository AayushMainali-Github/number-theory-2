import { test } from "node:test";
import assert from "node:assert";
import { isMillerRabin } from "../../src/prime/isMillerRabin.js";

test("isMillerRabin - basics", () => {
  assert.strictEqual(isMillerRabin(2), true);
  assert.strictEqual(isMillerRabin(3), true);
  assert.strictEqual(isMillerRabin(4), false);
  assert.strictEqual(isMillerRabin(7), true);
  assert.strictEqual(isMillerRabin(15), false);
  assert.strictEqual(isMillerRabin(17), true);
});

test("isMillerRabin - large numbers", () => {
  // 9999999967 is prime
  assert.strictEqual(isMillerRabin(9999999967n), true);
  // 9999999967 * 2 = 19999999934
  assert.strictEqual(isMillerRabin(19999999934n), false);
});
