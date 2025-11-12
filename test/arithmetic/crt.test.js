import { test, describe } from "node:test";
import assert from "node:assert";
import { crt } from "../../src/arithmetic/crt.js";

describe("crt()", () => {
  // 1. Basic two-modulus example
  test("x≡2 (mod 3), x≡3 (mod 5) → x=8, M=15", () => {
    const { x, modulus } = crt([2, 3], [3, 5]);
    assert.strictEqual(x, 8n);
    assert.strictEqual(modulus, 15n);
    assert.strictEqual(x % 3n, 2n);
    assert.strictEqual(x % 5n, 3n);
  });

  // 2. Three coprime moduli
  test("x≡1 (mod 2), x≡2 (mod 3), x≡3 (mod 5) → x=23, M=30", () => {
    const { x, modulus } = crt([1, 2, 3], [2, 3, 5]);
    assert.strictEqual(x, 23n);
    assert.strictEqual(modulus, 30n);
    assert.strictEqual(x % 2n, 1n);
    assert.strictEqual(x % 3n, 2n);
    assert.strictEqual(x % 5n, 3n);
  });

  // 3. Includes zero remainder
  test("x≡0 (mod 4), x≡1 (mod 9) → x=28, M=36", () => {
    const { x, modulus } = crt([0, 1], [4, 9]);
    assert.strictEqual(x, 28n);
    assert.strictEqual(modulus, 36n);
    assert.strictEqual(x % 4n, 0n);
    assert.strictEqual(x % 9n, 1n);
  });

  // 4. Single congruence, negative remainder normalized
  test("x≡-3 (mod 11) → x=8, M=11", () => {
    const { x, modulus } = crt([-3], [11]);
    assert.strictEqual(x, 8n);
    assert.strictEqual(modulus, 11n);
    assert.strictEqual(x % 11n, 8n);
  });

  // 5. Negative remainder handled correctly
  test("x≡-1 (mod 3), x≡2 (mod 5) → x=2, M=15", () => {
    const { x, modulus } = crt([-1, 2], [3, 5]);
    assert.strictEqual(x, 2n);
    assert.strictEqual(modulus, 15n);
    assert.strictEqual(x % 3n, 2n);
    assert.strictEqual(x % 5n, 2n);
  });

  // 6. Remainders larger than moduli are normalized
  test("remainders larger than moduli normalize (14≡2 mod3, 23≡3 mod5)", () => {
    const { x, modulus } = crt([14, 23], [3, 5]);
    assert.strictEqual(modulus, 15n);
    assert.strictEqual(x, 8n);
    assert.strictEqual(x % 3n, 2n);
    assert.strictEqual(x % 5n, 3n);
  });

  // 7. Mixed Number and BigInt inputs
  test("mixed input types produce correct solution", () => {
    const { x, modulus } = crt([1n, 2], [3n, 5]);
    assert.strictEqual(modulus, 15n);
    assert.strictEqual(x % 3n, 1n);
    assert.strictEqual(x % 5n, 2n);
    assert.ok(x >= 0n && x < modulus);
  });

  // 8. Larger primes, property checks only
  test("property check with large primes", () => {
    const m1 = 97n, m2 = 101n, m3 = 103n;
    const r1 = 10n, r2 = 20n, r3 = 30n;
    const { x, modulus } = crt([r1, r2, r3], [m1, m2, m3]);
    assert.strictEqual(modulus, m1 * m2 * m3);
    assert.strictEqual(x % m1, r1);
    assert.strictEqual(x % m2, r2);
    assert.strictEqual(x % m3, r3);
    assert.ok(x >= 0n && x < modulus);
  });

  // 9. Coprime composite moduli
  test("composite coprime moduli (20, 33)", () => {
    const { x, modulus } = crt([5, 7], [20, 33]);
    assert.strictEqual(modulus, 660n);
    assert.strictEqual(x % 20n, 5n);
    assert.strictEqual(x % 33n, 7n);
  });

  // 10. All ones residues
  test("x≡1 mod 2,3,5 → x=1, M=30", () => {
    const { x, modulus } = crt([1, 1, 1], [2, 3, 5]);
    assert.strictEqual(x, 1n);
    assert.strictEqual(modulus, 30n);
    assert.strictEqual(x % 2n, 1n);
    assert.strictEqual(x % 3n, 1n);
    assert.strictEqual(x % 5n, 1n);
  });

  // 11. All zero residues
  test("x≡0 mod 2,3,5 → x=0, M=30", () => {
    const { x, modulus } = crt([0, 0, 0], [2, 3, 5]);
    assert.strictEqual(x, 0n);
    assert.strictEqual(modulus, 30n);
  });

  // 12. Edge case: modulus product and canonical range
  test("x is canonical in [0, M)", () => {
    const { x, modulus } = crt([2, 4, 6], [5, 7, 9 + 2]); // 11 is prime
    assert.ok(x >= 0n && x < modulus);
    assert.strictEqual(modulus, 5n * 7n * 11n);
    assert.strictEqual(x % 5n, 2n);
    assert.strictEqual(x % 7n, 4n);
    assert.strictEqual(x % 11n, 6n);
  });

  // 13. Four moduli, property checks
  test("x≡[1,2,3,4] mod [2,3,5,7]", () => {
    const mods = [2, 3, 5, 7];
    const rems = [1, 2, 3, 4];
    const { x, modulus } = crt(rems, mods);
    assert.strictEqual(modulus, 210n);
    assert.strictEqual(x % 2n, 1n);
    assert.strictEqual(x % 3n, 2n);
    assert.strictEqual(x % 5n, 3n);
    assert.strictEqual(x % 7n, 4n);
  });

  // 14. Edge example solvable directly
  test("x≡2 (mod 3), x≡10 (mod 11) → x=32, M=33", () => {
    const { x, modulus } = crt([2, 10], [3, 11]);
    assert.strictEqual(x, 32n);
    assert.strictEqual(modulus, 33n);
  });

  // 15. Large BigInt inputs
  test("large BigInt moduli and remainders (primes)", () => {
    const m1 = 1000000007n;
    const m2 = 1000000009n;
    const r1 = 123456789n;
    const r2 = 987654321n;
    const { x, modulus } = crt([r1, r2], [m1, m2]);
    assert.strictEqual(modulus, m1 * m2);
    assert.strictEqual(x % m1, r1);
    assert.strictEqual(x % m2, r2);
  });

  // 16. Input validation: moduli not pairwise coprime
  test("throws if moduli not pairwise coprime", () => {
    assert.throws(() => crt([1, 2], [4, 6]), /pairwise coprime/i);
  });

  // 17. Input validation: non-positive modulus
  test("throws RangeError for non-positive modulus (0)", () => {
    assert.throws(() => crt([1, 1], [5, 0]), RangeError);
  });

  // 18. Input validation: negative modulus
  test("throws RangeError for negative modulus", () => {
    assert.throws(() => crt([1, 2], [-3, 5]), RangeError);
  });

  // 19. Input validation: mismatched lengths
  test("throws TypeError for mismatched array lengths", () => {
    assert.throws(() => crt([1, 2, 3], [2, 3]), TypeError);
  });

  // 20. Input validation: empty arrays
  test("throws TypeError for empty arrays", () => {
    assert.throws(() => crt([], []), TypeError);
  });

  // 21. Input validation: non-array inputs
  test("throws TypeError for non-array inputs", () => {
    // @ts-expect-error runtime type check
    assert.throws(() => crt(1, 2), TypeError);
  });
});