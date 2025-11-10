/**
 * Generate the n-th row of Pascal's triangle: [C(n,0), C(n,1), ..., C(n,n)].
 * Returns an array of BigInt coefficients.
 *
 * Implementation note:
 * - Uses iterative relation C(n,k+1) = C(n,k) * (n-k) / (k+1) for efficiency.
 * - Falls back to BigInt arithmetic; division is exact for binomial coefficients.
 *
 * @example
 * pascalRow(6) ➜ [1n, 6n, 15n, 20n, 15n, 6n, 1n]
 *
 * @param {number|bigint} n
 * @returns {bigint[]}
 */
export function pascalRow(n) {
  n = BigInt(n);
  if (n < 0n) throw new RangeError("Row index must be non-negative");

  // Small cases
  if (n === 0n) return [1n];

  const row = [1n];
  let prev = 1n;
  for (let k = 0n; k < n; k++) {
    // next = prev * (n - k) / (k + 1)
    const next = (prev * (n - k)) / (k + 1n);
    row.push(next);
    prev = next;
  }
  return row;
}
