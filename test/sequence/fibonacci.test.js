import { describe, test } from "node:test";
import assert from "node:assert";
import { fibonacci } from "../../src/sequence/fibonacci.js";

describe("fibonacci()", () => {
  // 1. Base case: n = 0
  test("fibonacci(0) → [0]", () => {
    assert.deepStrictEqual(fibonacci(0), [0n]);
  });

  // 2. Base case: n = 1
  test("fibonacci(1) → [0, 1]", () => {
    assert.deepStrictEqual(fibonacci(1), [0n, 1n]);
  });

  // 3. Small sequence: n = 5
  test("fibonacci(5) → [0,1,1,2,3,5]", () => {
    assert.deepStrictEqual(fibonacci(5), [0n, 1n, 1n, 2n, 3n, 5n]);
  });

  // 4. Verify last term of n = 10
  test("fibonacci(10) → last term = 55", () => {
    const seq = fibonacci(10);
    assert.strictEqual(seq.at(-1), 55n);
  });

  // 5. Verify last term of n = 15
  test("fibonacci(15) → last term = 610", () => {
    const seq = fibonacci(15);
    assert.strictEqual(seq.at(-1), 610n);
  });

  // 6. Verify large sequence (n = 25)
  test("fibonacci(25) → last term = 75025", () => {
    const seq = fibonacci(25);
    assert.strictEqual(seq.at(-1), 75025n);
  });

  // 7. Check BigInt handling
  test("fibonacci(10n) → BigInt input", () => {
    const seq = fibonacci(10n);
    assert.strictEqual(seq.at(-1), 55n);
  });

  // 8. Large term (n = 50)
  test("fibonacci(50) → last term = 12586269025", () => {
    const seq = fibonacci(50);
    assert.strictEqual(seq.at(-1), 12586269025n);
  });

  // 9. Larger term (n = 75)
  test("fibonacci(75) → last term = 2111485077978050", () => {
    const seq = fibonacci(75);
    assert.strictEqual(seq.at(-1), 2111485077978050n);
  });

  // 10. n = 100 boundary test
  test("fibonacci(100) → last term = 354224848179261915075", () => {
    const seq = fibonacci(100);
    assert.strictEqual(seq.at(-1), 354224848179261915075n);
  });

  // 11. Valid type check
  test("fibonacci(10) → returns array of BigInts", () => {
    const seq = fibonacci(10);
    assert.ok(seq.every((v) => typeof v === "bigint"));
  });

  // 12. Array type check
  test("fibonacci(1000) → last term = 43466557686937456435688527675040625802564660517371780402481729089536555417949051890403879840079255169295922593080322634775209689623239873322471161642996440906533187938298969649928516003704476137795166849228875", () => {
    const seq = fibonacci(1000);
    assert.strictEqual(
      seq.at(-1),
      43466557686937456435688527675040625802564660517371780402481729089536555417949051890403879840079255169295922593080322634775209689623239873322471161642996440906533187938298969649928516003704476137795166849228875n,
    );
  });

  // 13. n = 1000
  test("fibonacci(2) → [0,1,1]", () => {
    assert.deepStrictEqual(fibonacci(2), [0n, 1n, 1n]);
  });

  // 14. n = 3
  test("fibonacci(3) → [0,1,1,2]", () => {
    assert.deepStrictEqual(fibonacci(3), [0n, 1n, 1n, 2n]);
  });

  // 15. n = 4
  test("fibonacci(4) → [0,1,1,2,3]", () => {
    assert.deepStrictEqual(fibonacci(4), [0n, 1n, 1n, 2n, 3n]);
  });

  // 16. Fibonacci(7) last term check
  test("fibonacci(7) → last term = 13", () => {
    const seq = fibonacci(7);
    assert.strictEqual(seq.at(-1), 13n);
  });

  // 17. Fibonacci(12) last term check
  test("fibonacci(12) → last term = 144", () => {
    const seq = fibonacci(12);
    assert.strictEqual(seq.at(-1), 144n);
  });

  // 18. Negative index (throws)
  test("fibonacci(-1) → throws RangeError", () => {
    assert.throws(() => fibonacci(-1), RangeError);
  });

  // 19. Negative BigInt (throws)
  test("fibonacci(-10n) → throws RangeError", () => {
    assert.throws(() => fibonacci(-10n), RangeError);
  });

  // 20. High-index BigInt input still works
  test("fibonacci(20n) → returns 21 terms", () => {
    const seq = fibonacci(20n);
    assert.strictEqual(seq.length, 21);
  });

  // 21. Fibonacci sequence length verification
  test("fibonacci(30) → returns 31 terms", () => {
    const seq = fibonacci(30);
    assert.strictEqual(seq.length, 31);
  });

  // 22. Fibonacci golden ratio property (F(n+1)/F(n) approaches φ)
  test("fibonacci(40) → golden ratio approximation", () => {
    const seq = fibonacci(40);
    const ratio = Number(seq[40]) / Number(seq[39]);
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    assert.ok(Math.abs(ratio - goldenRatio) < 0.001);
  });

  // 23. Fibonacci sum property: F(0) + F(1) + ... + F(n) = F(n+2) - 1
  test("fibonacci(20) → sum property verification", () => {
    const seq = fibonacci(22);
    const sum = seq.slice(0, 21).reduce((a, b) => a + b, 0n);
    assert.strictEqual(sum, seq[22] - 1n);
  });

  // 24. Fibonacci even-indexed terms sum
  test("fibonacci(20) → even-indexed sum = F(21) - 1", () => {
    const seq = fibonacci(21);
    const evenSum = seq
      .filter((_, i) => i % 2 === 0)
      .reduce((a, b) => a + b, 0n);
    assert.strictEqual(evenSum, seq[21] - 1n);
  });

  // 25. Fibonacci odd-indexed terms sum
  test("fibonacci(20) → odd-indexed sum = F(20)", () => {
    const seq = fibonacci(20);
    const oddSum = seq
      .filter((_, i) => i % 2 === 1)
      .reduce((a, b) => a + b, 0n);
    assert.strictEqual(oddSum, seq[20]);
  });
});
