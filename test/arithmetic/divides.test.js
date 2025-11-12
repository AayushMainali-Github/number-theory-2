import { describe, test } from "node:test";
import assert from "node:assert";
import { divides } from "../../src/arithmetic/divides.js";

describe("divides()", () => {
  test("divides(3,12) = true", () => {
    assert.strictEqual(divides(3, 12), true);
  });

  test("divides(5,12) = false", () => {
    assert.strictEqual(divides(5, 12), false);
  });

  test("throws when divisor is zero", () => {
    assert.throws(() => divides(0, 0), RangeError);
  });
});