import { test, describe } from "node:test";
import assert from "node:assert";
import { isOdd } from "../../src/arithmetic/isOdd.js";

describe("isOdd()", () => {
    // 1. Simple even
    test("isOdd(4) → false", () => {
        assert.strictEqual(isOdd(4), false);
    });

    // 2. Simple odd
    test("isOdd(7) → true", () => {
        assert.strictEqual(isOdd(7), true);
    });

    // 3. Zero
    test("isOdd(0) → false", () => {
        assert.strictEqual(isOdd(0), false);
    });

    // 4. Negative even
    test("isOdd(-2) → false", () => {
        assert.strictEqual(isOdd(-2), false);
    });

    // 5. Negative odd
    test("isOdd(-11) → true", () => {
        assert.strictEqual(isOdd(-11), true);
    });

    // 6. BigInt even
    test("isOdd(1000000000000000000n) → false", () => {
        assert.strictEqual(isOdd(1000000000000000000n), false);
    });

    // 7. BigInt odd
    test("isOdd(999999999999999999n) → true", () => {
        assert.strictEqual(isOdd(999999999999999999n), true);
    });

    // 8. Large Number (Number safe)
    test("isOdd(9007199254740990) → false", () => {
        // 9007199254740990 is Number.MAX_SAFE_INTEGER - 1 (even)
        assert.strictEqual(isOdd(9007199254740990), false);
    });

    // 9. One (odd)
    test("isOdd(1) → true", () => {
        assert.strictEqual(isOdd(1), true);
    });
});
