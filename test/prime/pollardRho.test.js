import { test } from "node:test";
import assert from "node:assert";
import { pollardRho } from "../../src/prime/pollardRho.js";

test("pollardRho - basics", () => {
  const n1 = 8051n; // 83 * 97
  const factor1 = pollardRho(n1);
  assert.ok(factor1 === 83n || factor1 === 97n);

  const n2 = 10403n; // 101 * 103
  const factor2 = pollardRho(n2);
  assert.ok(factor2 === 101n || factor2 === 103n);
});

test("pollardRho - even numbers", () => {
  assert.strictEqual(pollardRho(10), 2n);
  assert.strictEqual(pollardRho(100n), 2n);
});

test("pollardRho - large numbers", () => {
  const n = 123456789n * 987654321n;
  const factor = pollardRho(n);
  assert.ok(factor !== null && n % factor === 0n && factor > 1n && factor < n);
});
