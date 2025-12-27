import { test } from "node:test";
import assert from "node:assert";
import { toContinuedFraction } from "../../src/arithmetic/toContinuedFraction.js";
import { fromContinuedFraction } from "../../src/arithmetic/fromContinuedFraction.js";

test("toContinuedFraction - basics", () => {
  assert.deepStrictEqual(toContinuedFraction(45, 16), [2n, 1n, 4n, 3n]);
  assert.deepStrictEqual(toContinuedFraction(1, 1), [1n]);
  assert.deepStrictEqual(toContinuedFraction(7, 3), [2n, 3n]);
});

test("continuedFraction - roundtrip", () => {
  const n = 12345n;
  const d = 6789n;
  const cf = toContinuedFraction(n, d);
  const back = fromContinuedFraction(cf);
  // Note: fromContinuedFraction returns the simplified fraction
  const common = 3n; // gcd(12345, 6789) = 3
  assert.strictEqual(back.n, n / common);
  assert.strictEqual(back.d, d / common);
});
