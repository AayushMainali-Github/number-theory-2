import { test } from "node:test";
import assert from "node:assert";
import { fromContinuedFraction } from "../../src/arithmetic/fromContinuedFraction.js";

test("fromContinuedFraction - basics", () => {
  const res1 = fromContinuedFraction([2n, 1n, 4n, 3n]);
  assert.strictEqual(res1.n, 45n);
  assert.strictEqual(res1.d, 16n);

  const res2 = fromContinuedFraction([2n, 3n]);
  assert.strictEqual(res2.n, 7n);
  assert.strictEqual(res2.d, 3n);
});
