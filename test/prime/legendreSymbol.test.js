import { test } from "node:test";
import assert from "node:assert";
import { legendreSymbol } from "../../src/prime/legendreSymbol.js";

test("legendreSymbol - basics", () => {
  // Modulo 7
  assert.strictEqual(legendreSymbol(1, 7), 1);
  assert.strictEqual(legendreSymbol(2, 7), 1);
  assert.strictEqual(legendreSymbol(4, 7), 1);
  assert.strictEqual(legendreSymbol(3, 7), -1);
  assert.strictEqual(legendreSymbol(5, 7), -1);
  assert.strictEqual(legendreSymbol(6, 7), -1);
  assert.strictEqual(legendreSymbol(0, 7), 0);
  assert.strictEqual(legendreSymbol(7, 7), 0);
  assert.strictEqual(legendreSymbol(14, 7), 0);
});

test("legendreSymbol - errors", () => {
  assert.throws(() => legendreSymbol(1, 2));
  assert.throws(() => legendreSymbol(1, 4));
  assert.throws(() => legendreSymbol(1, 6));
});
