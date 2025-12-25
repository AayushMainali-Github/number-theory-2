import { test } from "node:test";
import assert from "node:assert";
import { isLucasLehmer } from "../../src/prime/isLucasLehmer.js";

test("isLucasLehmer - known Mersenne primes", () => {
  assert.strictEqual(isLucasLehmer(2), true);  // M_2 = 3
  assert.strictEqual(isLucasLehmer(3), true);  // M_3 = 7
  assert.strictEqual(isLucasLehmer(5), true);  // M_5 = 31
  assert.strictEqual(isLucasLehmer(7), true);  // M_7 = 127
  assert.strictEqual(isLucasLehmer(13), true); // M_13 = 8191
});

test("isLucasLehmer - composite exponents", () => {
  // M_p where p is composite is always composite, 
  // but LL test is generally for prime p.
  // M_4 = 15
  assert.strictEqual(isLucasLehmer(4), false);
});
