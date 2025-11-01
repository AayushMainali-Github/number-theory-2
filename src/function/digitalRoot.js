import { sumOfDigits } from "./sumOfDigits.js";

/**
 * Computes the digital root of an integer n.
 *
 * The digital root is obtained by repeatedly summing the digits
 * of n until a single-digit number remains.
 *
 * Works for both Number and BigInt inputs.
 * Returns result as a BigInt.
 *
 * @example
 * digitalRoot(942) ➜ 6n   (9 + 4 + 2 = 15 → 1 + 5 = 6)
 * digitalRoot(132189) ➜ 6n
 * digitalRoot(493193) ➜ 2n
 *
 * @param {number|bigint} n - The integer to process
 * @returns {bigint} The digital root of n
 */
export function digitalRoot(n) {
  n = BigInt(n);
  n = n < 0n ? -n : n; // handle negatives

  // Shortcut: for small numbers
  if (n < 10n) return n;

  // Repeatedly apply sumOfDigits until one digit remains
  while (n >= 10n) {
    n = sumOfDigits(n);
  }

  return n;
}
