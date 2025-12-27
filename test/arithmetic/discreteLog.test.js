import { test } from "node:test";
import assert from "node:assert";
import { discreteLog } from "../../src/arithmetic/discreteLog.js";

test("discreteLog - basics", () => {
  assert.strictEqual(discreteLog(2, 8, 11), 3n); // 2^3 = 8
  assert.strictEqual(discreteLog(3, 1, 7), 0n);  // 3^0 = 1
  assert.strictEqual(discreteLog(5, 4, 7), 2n);  // 5^2 = 25 ≡ 4 (mod 7)
});

test("discreteLog - no solution", () => {
  assert.strictEqual(discreteLog(2, 3, 11), 8n); // 2^8 = 256 = 11*23 + 3. Actually 2^8 ≡ 3 (mod 11) is true.
  // Let's find one that definitely doesn't work.
  // Powers of 2 mod 7: 1, 2, 4. 3, 5, 6 are not powers.
  assert.strictEqual(discreteLog(2, 3, 7), null);
});
