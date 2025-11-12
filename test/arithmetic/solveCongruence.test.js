import { test, describe } from "node:test";
import assert from "node:assert";
import { solveCongruence } from "../../src/arithmetic/solveCongruence.js";

describe("solveCongruence()", () => {
  // 1. Coprime modulus → unique solution modulo m
  test("3x≡4 (mod 11) → x≡5 (mod 11)", () => {
    const { x, modulo } = solveCongruence(3, 4, 11);
    assert.strictEqual(modulo, 11n);
    assert.strictEqual(x, 5n);
    assert.strictEqual(((3n * x) - 4n) % 11n, 0n);
  });

  // 2. Non-coprime case with solution (gcd divides b)
  test("4x≡2 (mod 6) → x≡2 (mod 3)", () => {
    const { x, modulo } = solveCongruence(4, 2, 6);
    assert.strictEqual(modulo, 3n);
    assert.strictEqual(x, 2n);
    assert.strictEqual(((4n * x) - 2n) % 6n, 0n);
  });

  // 3. No solution when gcd does not divide b
  test("4x≡3 (mod 6) → throws", () => {
    assert.throws(() => solveCongruence(4, 3, 6), /No solution/i);
  });

  // 4. Normalization of negative b
  test("3x≡-7 (mod 11) → same as 3x≡4", () => {
    const { x, modulo } = solveCongruence(3, -7, 11);
    assert.strictEqual(modulo, 11n);
    assert.strictEqual(x, 5n);
    assert.strictEqual(((3n * x) + 7n) % 11n, 0n);
  });

  // 5. Negative a handled correctly
  test("-3x≡4 (mod 11) → valid solution", () => {
    const { x, modulo } = solveCongruence(-3, 4, 11);
    assert.strictEqual(modulo, 11n);
    assert.strictEqual(((BigInt(-3) * x) - 4n) % 11n, 0n);
    assert.ok(x >= 0n && x < modulo);
  });

  // 6. a % m = 0 and b % m = 0 → solution x=0 modulo 1
  test("12x≡0 (mod 6) → x≡0 (mod 1)", () => {
    const { x, modulo } = solveCongruence(12, 0, 6);
    assert.strictEqual(modulo, 1n);
    assert.strictEqual(x, 0n);
    assert.strictEqual(((12n * x) - 0n) % 6n, 0n);
  });

  // 7. a % m = 0 but b % m ≠ 0 → no solution
  test("12x≡2 (mod 6) → throws", () => {
    assert.throws(() => solveCongruence(12, 2, 6), /No solution/i);
  });

  // 8. Mixed Number and BigInt inputs
  test("mixed types produce canonical x in [0, m/g)", () => {
    const { x, modulo } = solveCongruence(10n, 7, 13);
    assert.strictEqual(modulo, 13n);
    assert.ok(x >= 0n && x < modulo);
    assert.strictEqual(((10n * x) - 7n) % 13n, 0n);
  });

  // 9. Large prime modulus
  test("123456789x≡987654321 (mod 1000000007)", () => {
    const m = 1000000007n;
    const { x, modulo } = solveCongruence(123456789n, 987654321n, m);
    assert.strictEqual(modulo, m);
    assert.strictEqual(((123456789n * x) - 987654321n) % m, 0n);
    assert.ok(x >= 0n && x < m);
  });

  // 10. Non-positive modulus throws
  test("throws RangeError for m ≤ 0", () => {
    assert.throws(() => solveCongruence(1, 1, 0), RangeError);
    assert.throws(() => solveCongruence(1, 1, -7), RangeError);
  });
});