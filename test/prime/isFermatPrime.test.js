import { test } from "node:test";
import assert from "node:assert";
import { isFermatPrime } from "../../src/prime/isFermatPrime.js";

test("isFermatPrime - known primes", () => {
  assert.strictEqual(isFermatPrime(3), true);   // F_0
  assert.strictEqual(isFermatPrime(5), true);   // F_1
  assert.strictEqual(isFermatPrime(17), true);  // F_2
  assert.strictEqual(isFermatPrime(257), true); // F_3
  assert.strictEqual(isFermatPrime(65537), true); // F_4
});

test("isFermatPrime - known Fermat composites", () => {
  // F_5 is known to be composite (divisible by 641)
  // F_5 = 2^(2^5) + 1 = 2^32 + 1 = 4294967297
  assert.strictEqual(isFermatPrime(4294967297n), false);
});

test("isFermatPrime - non-Fermat numbers", () => {
  assert.strictEqual(isFermatPrime(7), false);
  assert.strictEqual(isFermatPrime(13), false);
  assert.strictEqual(isFermatPrime(31), false);
});
