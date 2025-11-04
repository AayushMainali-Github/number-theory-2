import { test, describe } from "node:test";
import assert from "node:assert";
import { isEven } from "../../src/arithmetic/isEven.js";

describe("isEven()", () => {
	// 1. Simple even
	test("isEven(4) → true", () => {
		assert.strictEqual(isEven(4), true);
	});

	// 2. Simple odd
	test("isEven(7) → false", () => {
		assert.strictEqual(isEven(7), false);
	});

	// 3. Zero
	test("isEven(0) → true", () => {
		assert.strictEqual(isEven(0), true);
	});

	// 4. Negative even
	test("isEven(-2) → true", () => {
		assert.strictEqual(isEven(-2), true);
	});

	// 5. Negative odd
	test("isEven(-11) → false", () => {
		assert.strictEqual(isEven(-11), false);
	});

	// 6. BigInt even
	test("isEven(1000000000000000000n) → true", () => {
		assert.strictEqual(isEven(1000000000000000000n), true);
	});

	// 7. BigInt odd
	test("isEven(999999999999999999n) → false", () => {
		assert.strictEqual(isEven(999999999999999999n), false);
	});

	// 8. Large Number (Number safe)
	test("isEven(9007199254740990) → true", () => {
		// 9007199254740990 is Number.MAX_SAFE_INTEGER - 1 (even)
		assert.strictEqual(isEven(9007199254740990), true);
	});

	// 9. One (odd)
	test("isEven(1) → false", () => {
		assert.strictEqual(isEven(1), false);
	});
});
