import { describe, test } from "node:test";
import assert from "node:assert";
import { lucas } from "../../src/sequence/lucas.js";

describe("lucas()", () => {
  // 1. Base case: n = 0
  test("lucas(0) → [2]", () => {
    assert.deepStrictEqual(lucas(0), [2n]);
  });

  // 2. Base case: n = 1
  test("lucas(1) → [2, 1]", () => {
    assert.deepStrictEqual(lucas(1), [2n, 1n]);
  });

  // 3. Small sequence n = 5
  test("lucas(5) → [2, 1, 3, 4, 7, 11]", () => {
    const expected = [2n, 1n, 3n, 4n, 7n, 11n];
    assert.deepStrictEqual(lucas(5), expected);
  });

  // 4. Check sequence correctness up to n = 9
  test("lucas(9) → [2, 1, 3, 4, 7, 11, 18, 29, 47, 76]", () => {
    const expected = [2n, 1n, 3n, 4n, 7n, 11n, 18n, 29n, 47n, 76n];
    assert.deepStrictEqual(lucas(9), expected);
  });

  // 5. n = 2 returns 3 terms
  test("lucas(2) → [2, 1, 3]", () => {
    assert.deepStrictEqual(lucas(2), [2n, 1n, 3n]);
  });

  // 6. Recurrence property: L(n) = L(n-1) + L(n-2)
  test("L(8) = L(7) + L(6)", () => {
    const seq = lucas(8);
    const L8 = seq[8];
    const L7 = seq[7];
    const L6 = seq[6];
    assert.strictEqual(L8, L7 + L6);
  });

  // 7. Throw on negative index
  test("lucas(-1) throws RangeError", () => {
    assert.throws(() => lucas(-1), RangeError);
  });

  // 8. Data type check
  test("All values are BigInt", () => {
    const seq = lucas(10);
    seq.forEach((v) => assert.strictEqual(typeof v, "bigint"));
  });

  // 9. Length check for n = 10
  test("lucas(10) length → 11", () => {
    const seq = lucas(10);
    assert.strictEqual(seq.length, 11);
  });

  // 10. First element always 2n
  test("lucas(10)[0] → 2", () => {
    const seq = lucas(10);
    assert.strictEqual(seq[0], 2n);
  });

  // 11. Second element always 1n
  test("lucas(10)[1] → 1", () => {
    const seq = lucas(10);
    assert.strictEqual(seq[1], 1n);
  });

  // 12. Sequence should be increasing (after L2)
  test("lucas(10) grows monotonically after index 2", () => {
    const seq = lucas(10);
    for (let i = 3; i < seq.length; i++) {
      assert(seq[i] > seq[i - 1]);
    }
  });

  // 13. Check known term L(5) = 11n
  test("lucas(5)[5] → 11", () => {
    assert.strictEqual(lucas(5)[5], 11n);
  });

  // 14. Check known term L(10) = 123n
  test("lucas(10)[10] → 123", () => {
    assert.strictEqual(lucas(10)[10], 123n);
  });

  // 15. Check known term L(15) = 1364n
  test("lucas(15)[15] → 1364", () => {
    assert.strictEqual(lucas(15)[15], 1364n);
  });

  // 16. Larger n = 50 returns BigInts
  test("lucas(50) returns sequence of BigInts", () => {
    const seq = lucas(50);
    assert.strictEqual(typeof seq[50], "bigint");
  });

  // 17. Check values grow exponentially
  test("lucas(20)[20] > lucas(10)[10]", () => {
    const L20 = lucas(20)[20];
    const L10 = lucas(10)[10];
    assert(L20 > L10);
  });

  // 18. Verify last term equals sum of previous two
  test("L(12) = L(11) + L(10)", () => {
    const seq = lucas(12);
    const L12 = seq[12];
    const L11 = seq[11];
    const L10 = seq[10];
    assert.strictEqual(L12, L11 + L10);
  });

  // 19. Lucas(0) first value is 2n
  test("lucas(0)[0] → 2", () => {
    assert.strictEqual(lucas(0)[0], 2n);
  });

  // 20. Lucas(1)[1] → 1
  test("lucas(1)[1] → 1", () => {
    assert.strictEqual(lucas(1)[1], 1n);
  });
});
