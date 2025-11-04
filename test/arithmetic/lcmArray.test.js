import { test, describe } from "node:test";
import assert from "node:assert";
import { lcmArray } from "../../src/arithmetic/lcmArray.js";

describe("lcmArray()", () => {
  // 1. Basic array of numbers
  test("lcmArray([48, 64, 16]) → 192n", () => {
    assert.strictEqual(lcmArray([48, 64, 16]), 192n);
  });

  // 2. BigInt inputs (primes)
  test("lcmArray([101n, 103n, 107n]) → 1113121n", () => {
    assert.strictEqual(lcmArray([101n, 103n, 107n]), 1113121n);
  });

  // 3. Array with zero
  test("lcmArray([0, 15, 30]) → 0n", () => {
    assert.strictEqual(lcmArray([0, 15, 30]), 0n);
  });

  // 4. Negative numbers
  test("lcmArray([-20, 40, 60]) → 120n", () => {
    assert.strictEqual(lcmArray([-20, 40, 60]), 120n);
  });

  // 5. Single element array
  test("lcmArray([13]) → 13n", () => {
    assert.strictEqual(lcmArray([13]), 13n);
  });

  // 6. Numbers with shared factors
  test("lcmArray([12, 18, 24]) → 72n", () => {
    assert.strictEqual(lcmArray([12, 18, 24]), 72n);
  });

  // 7. Powers of two
  test("lcmArray([2^20, 2^40]) → 2^40", () => {
    const a = 2n ** 20n;
    const b = 2n ** 40n;
    assert.strictEqual(lcmArray([a, b]), b);
  });

  // 8. Large mixed values
  test("lcmArray([123456789123456789n, 9n]) → 123456789123456789n", () => {
    assert.strictEqual(
      lcmArray([123456789123456789n, 9n]),
      123456789123456789n,
    );
  });

  // 9. Empty array should throw
  test("lcmArray([]) throws TypeError", () => {
    assert.throws(() => lcmArray([]), { name: "TypeError" });
  });

  // 10. Coprime numbers
  test("lcmArray([7, 11, 13]) → 1001n", () => {
    assert.strictEqual(lcmArray([7, 11, 13]), 1001n);
  });

  // 11. Mixed powers of different bases
  test("lcmArray([144, 324]) → 1296n", () => {
    assert.strictEqual(lcmArray([144n, 324n]), 1296n);
  });

  // 12. All same number
  test("lcmArray([5, 5, 5]) → 5n", () => {
    assert.strictEqual(lcmArray([5, 5, 5]), 5n);
  });

  // 13. Large sequence of small numbers
  test("lcmArray([2, 3, 4, 5, 6]) → 60n", () => {
    assert.strictEqual(lcmArray([2, 3, 4, 5, 6]), 60n);
  });

  // 14. Powers of same base
  test("lcmArray([2^2, 2^3, 2^4]) → 16n", () => {
    assert.strictEqual(lcmArray([4n, 8n, 16n]), 16n);
  });

  // 15. Fibonacci numbers
  test("lcmArray([8, 13, 21]) → 2184n", () => {
    assert.strictEqual(lcmArray([8, 13, 21]), 2184n);
  });
});
