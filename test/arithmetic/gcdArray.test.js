import { test, describe } from "node:test";
import assert from "node:assert";
import { gcdArray } from "../../src/arithmetic/gcdArray.js";

describe("gcdArray()", () => {
  // 1. Basic array of numbers
  test("gcdArray([48, 64, 16]) → 16n", () => {
    assert.strictEqual(gcdArray([48, 64, 16]), 16n);
  });

  // 2. BigInt inputs (all primes)
  test("gcdArray([101n, 103n, 107n]) → 1n", () => {
    assert.strictEqual(gcdArray([101n, 103n, 107n]), 1n);
  });

  // 3. All zeros
  test("gcdArray([0, 0, 0]) → 0n", () => {
    assert.strictEqual(gcdArray([0, 0, 0]), 0n);
  });

  // 4. Zeros mixed with numbers
  test("gcdArray([0, 15, 30]) → 15n", () => {
    assert.strictEqual(gcdArray([0, 15, 30]), 15n);
  });

  // 5. Negative numbers
  test("gcdArray([-20, 40, 60]) → 20n", () => {
    assert.strictEqual(gcdArray([-20, 40, 60]), 20n);
  });

  // 6. Single element array
  test("gcdArray([13]) → 13n", () => {
    assert.strictEqual(gcdArray([13]), 13n);
  });

  // 7. Common factor
  test("gcdArray([17, 34, 51, 68]) → 17n", () => {
    assert.strictEqual(gcdArray([17, 34, 51, 68]), 17n);
  });

  // 8. Powers of two large BigInt
  test("gcdArray([2^40, 2^20]) → 2^20", () => {
    const a = 2n ** 40n;
    const b = 2n ** 20n;
    assert.strictEqual(gcdArray([a, b]), b);
  });

  // 9. Large mixed values
  test("gcdArray([123456789123456789n, 9n, 27n, 123456789123456789123456789123456789n]) → 9n", () => {
    assert.strictEqual(
      gcdArray([
        123456789123456789n,
        9n,
        27n,
        123456789123456789123456789123456789n,
      ]),
      9n,
    );
  });

  // 10. Empty array should throw
  test("gcdArray([]) throws TypeError", () => {
    assert.throws(() => gcdArray([]), { name: "TypeError" });
  });
});
