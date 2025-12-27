import { test } from "node:test";
import assert from "node:assert";
import { isPrimitiveRoot } from "../../src/arithmetic/isPrimitiveRoot.js";

test("isPrimitiveRoot", () => {
  assert.strictEqual(isPrimitiveRoot(3, 7), true);
  assert.strictEqual(isPrimitiveRoot(2, 7), false);
  assert.strictEqual(isPrimitiveRoot(2, 11), true);
});
