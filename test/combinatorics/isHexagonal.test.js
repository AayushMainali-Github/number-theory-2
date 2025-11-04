import { describe, test } from "node:test";
import assert from "node:assert";
import { isHexagonal } from "../../src/combinatorics/isHexagonal.js";

describe("isHexagonal()", () => {
  // 1) Small true cases: 1, 6, 15, 28, 45, 66
  test("recognizes small hexagonal numbers", () => {
    [1n, 6n, 15n, 28n, 45n, 66n].forEach((v) => assert.strictEqual(isHexagonal(v), true));
  });

  // 2) Small false cases around them
  test("rejects nearby non-hexagonal numbers", () => {
    [2n, 3n, 4n, 5n, 7n, 8n, 9n, 10n, 11n, 12n, 13n, 14n].forEach((v) => assert.strictEqual(isHexagonal(v), false));
  });

  // 3) Larger true values: H10, H20, H100
  test("H10, H20, H100 are hexagonal", () => {
    assert.strictEqual(isHexagonal(190), true); // 10*(19)
    assert.strictEqual(isHexagonal(780), true); // 20*(39)
    assert.strictEqual(isHexagonal(19900), true); // 100*(199)
  });

  // 4) Neighboring numbers of large true values are false
  test("neighbors of large hexagonal numbers are false", () => {
    [189n, 191n, 779n, 781n, 19899n, 19901n].forEach((v) => assert.strictEqual(isHexagonal(v), false));
  });

  // 5) BigInt input support
  test("BigInt inputs work", () => {
    assert.strictEqual(isHexagonal(28n), true);
    assert.strictEqual(isHexagonal(29n), false);
  });

  // 6) Non-positive values are not hexagonal
  test("non-positive → false", () => {
    [0n, -1n, -10n].forEach((v) => assert.strictEqual(isHexagonal(v), false));
  });

});
