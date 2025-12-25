import { test } from "node:test";
import assert from "node:assert";
import { isMersennePrime } from "../../src/prime/isMersennePrime.js";

test("isMersennePrime - known primes", () => {
  assert.strictEqual(isMersennePrime(3), true);    // 2^2 - 1
  assert.strictEqual(isMersennePrime(7), true);    // 2^3 - 1
  assert.strictEqual(isMersennePrime(31), true);   // 2^5 - 1
  assert.strictEqual(isMersennePrime(127), true);  // 2^7 - 1
  assert.strictEqual(isMersennePrime(8191), true); // 2^13 - 1
});

test("isMersennePrime - known composites", () => {
  assert.strictEqual(isMersennePrime(15), false);  // 2^4 - 1
  assert.strictEqual(isMersennePrime(63), false);  // 2^6 - 1
  assert.strictEqual(isMersennePrime(2047), false); // 2^11 - 1, (23 * 89)
});

test("isMersennePrime - not of form 2^n - 1", () => {
  assert.strictEqual(isMersennePrime(5), false);
  assert.strictEqual(isMersennePrime(13), false);
  assert.strictEqual(isMersennePrime(11), false);
});
