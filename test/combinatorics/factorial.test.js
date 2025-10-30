import { describe, test } from "node:test";
import assert from "node:assert";
import { factorial } from "../../src/combinatorics/factorial.js";

describe("factorial()", () => {
  // 1. Factorial of 0 should always be 1 by definition.
  test("factorial(0) → 1", () => {
    assert.strictEqual(factorial(0), 1n);
  });

  // 2. Factorial of 1 should also be 1.
  test("factorial(1) → 1", () => {
    assert.strictEqual(factorial(1), 1n);
  });

  // 3. Verifies small factorial correctness.
  test("factorial(5) → 120", () => {
    assert.strictEqual(factorial(5), 120n);
  });

  // 4. Checks accuracy for larger numbers.
  test("factorial(10) → 3628800", () => {
    assert.strictEqual(factorial(10), 3628800n);
  });

  // 5. Ensures correct computation for big results.
  test("factorial(20) → 2432902008176640000", () => {
    assert.strictEqual(factorial(20), 2432902008176640000n);
  });

  // 6. Confirms BigInt input works seamlessly.
  test("factorial(25n) works with BigInt", () => {
    const result = factorial(25n);
    assert(result > 0n);
  });

  // 7. Negative numbers are invalid for factorial.
  test("factorial(-1) throws RangeError", () => {
    assert.throws(() => factorial(-1), RangeError);
  });

  // 8. Factorial should grow strictly monotonically.
  test("factorial(50) > factorial(49)", () => {
    assert(factorial(50) > factorial(49));
  });

  // 9. Produces very large output for high inputs.
  test("factorial(100) results in >100 digits", () => {
    const result = factorial(100);
    assert(result.toString().length > 100);
  });

  // 10. Factorial(0) = Factorial(1)/1 consistency check.
  test("factorial(0) === factorial(1) / 1", () => {
    assert.strictEqual(factorial(0), factorial(1) / 1n);
  });
});
