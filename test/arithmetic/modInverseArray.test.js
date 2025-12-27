import { test } from "node:test";
import assert from "node:assert";
import { modInverseArray } from "../../src/arithmetic/modInverseArray.js";

test("modInverseArray - basics", () => {
  const arr = [2, 3, 4];
  const m = 11;
  const invs = modInverseArray(arr, m);
  
  assert.strictEqual(invs[0], 6n); // 2*6 = 12 ≡ 1
  assert.strictEqual(invs[1], 4n); // 3*4 = 12 ≡ 1
  assert.strictEqual(invs[2], 3n); // 4*3 = 12 ≡ 1
});

test("modInverseArray - large m", () => {
  const arr = [10n, 20n, 30n];
  const m = 1000003n; // prime
  const invs = modInverseArray(arr, m);
  
  for (let i = 0; i < arr.length; i++) {
    assert.strictEqual((BigInt(arr[i]) * invs[i]) % m, 1n);
  }
});
