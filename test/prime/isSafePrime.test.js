import { test } from "node:test";
import assert from "node:assert";
import { isSafePrime } from "../../src/prime/isSafePrime.js";

test("isSafePrime - known primes", () => {
  assert.strictEqual(isSafePrime(5), true);   // (5-1)/2 = 2 (prime)
  assert.strictEqual(isSafePrime(7), true);   // (7-1)/2 = 3 (prime)
  assert.strictEqual(isSafePrime(11), true);  // (11-1)/2 = 5 (prime)
  assert.strictEqual(isSafePrime(23), true);  // (23-1)/2 = 11 (prime)
  assert.strictEqual(isSafePrime(47), true);  // (47-1)/2 = 23 (prime)
});

test("isSafePrime - non-safe primes", () => {
  assert.strictEqual(isSafePrime(13), false); // (13-1)/2 = 6 (not prime)
  assert.strictEqual(isSafePrime(17), false); // (17-1)/2 = 8 (not prime)
  assert.strictEqual(isSafePrime(19), false); // (19-1)/2 = 9 (not prime)
});

test("isSafePrime - composites", () => {
  assert.strictEqual(isSafePrime(15), false);
  assert.strictEqual(isSafePrime(21), false);
});
