import { modInverse } from "./modInverse.js";

/**
 * Efficiently compute modular inverses for an array of numbers modulo m.
 * Uses Montgomery's batch inversion (only one modular inversion).
 * Requires each element in arr to be coprime to m.
 *
 * @param {(number|bigint)[]} arr - Array of numbers to invert
 * @param {number|bigint} m - Modulo
 * @returns {bigint[]} Array of modular inverses
 */
export function modInverseArray(arr, m) {
  const n = arr.length;
  if (n === 0) return [];
  m = BigInt(m);

  const bigArr = arr.map(x => BigInt(x) % m);
  const prefixProducts = new Array(n);
  
  prefixProducts[0] = bigArr[0];
  for (let i = 1; i < n; i++) {
    prefixProducts[i] = (prefixProducts[i - 1] * bigArr[i]) % m;
  }

  // Inverse of all products
  let invProduct = modInverse(prefixProducts[n - 1], m);

  const result = new Array(n);
  for (let i = n - 1; i > 0; i--) {
    result[i] = (invProduct * prefixProducts[i - 1]) % m;
    invProduct = (invProduct * bigArr[i]) % m;
  }
  result[0] = invProduct;

  return result;
}
