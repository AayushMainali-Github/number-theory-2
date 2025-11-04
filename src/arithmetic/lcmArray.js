/**
 * Computes the LCM of an array of numbers.
 * Works for both Number and BigInt inputs.
 * Returns a BigInt.
 * 
 * @example
 * lcmArray([48, 64, 16]) ➜ 192n
 * lcmArray([101n, 103n, 107n]) ➜ 109103n
 *
 * @param {Array<number|bigint>} arr - Array of integers
 * @returns {bigint} LCM of the array elements
 */

import { lcm } from "./lcm.js";

export function lcmArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new TypeError("lcmArray() requires a non-empty array");
  }

  return arr.reduce((acc, curr) => lcm(acc, curr), 1n);
}
