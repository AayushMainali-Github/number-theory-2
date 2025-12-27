import { test } from "node:test";
import assert from "node:assert";
import { primitiveRoot } from "../../src/arithmetic/primitiveRoot.js";

test("primitiveRoot - basics", () => {
  assert.strictEqual(primitiveRoot(7), 3n);
  assert.strictEqual(primitiveRoot(11), 2n);
  assert.strictEqual(primitiveRoot(13), 2n);
});

test("primitiveRoot - non-existent", () => {
  assert.strictEqual(primitiveRoot(8), null);
  assert.strictEqual(primitiveRoot(15), null);
});
