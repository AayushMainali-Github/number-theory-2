/**
 * Computes the GCD of an array of numbers.
 * Works for both Number and BigInt inputs.
 * Returns a BigInt.
 * 
 * @example
 * gcdArray([48, 64, 16]) ➜ 16n
 * gcdArray([101n, 103n, 107n]) ➜ 1n
 * 
 * @param {Array<number|bigint>} arr - Array of integers
 * @returns {bigint} GCD of the array elements
 */

import { gcd } from "./gcd.js";

export function gcdArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new TypeError("gcdArray() requires a non-empty array");
  }

  return arr.reduce((acc, curr) => gcd(acc, curr), 0n);
}
