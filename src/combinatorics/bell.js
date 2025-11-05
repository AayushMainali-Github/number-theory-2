/**
 * Compute the n-th Bell number.
 *
 * Bell numbers count the number of set partitions of an n-element set.
 * We compute them via the Bell triangle (also called the Aitken array):
 *   Row 0: [1]
 *   Row i: first entry is last entry of previous row; next entries are
 *           cumulative sums with previous row: r[j] = r[j-1] + prev[j-1]
 *   The last entry of row i equals B_i.
 *
 * Works with Number and BigInt. Throws for negative n.
 *
 * @example
 * bell(0) ➜ 1n
 * bell(5) ➜ 52n
 * bell(10) ➜ 115975n
 *
 * @param {number|bigint} n - Non-negative integer index (n ≥ 0)
 * @returns {bigint} The n-th Bell number
 */
export function bell(n) {
  n = BigInt(n);
  if (n < 0n) throw new RangeError("bell() requires n ≥ 0");
  if (n === 0n) return 1n;

  // Build Bell triangle rows iteratively
  let prev = [1n]; // Row 0
  let len = 1; // current row length

  // Each iteration advances one row; start from row for n=1 (prev=[1])
  // so we need (n-1) iterations to reach row n.
  for (let i = 1n; i < n; i++) {
    const row = new Array(len + 1);
    row[0] = prev[len - 1];
    for (let j = 1; j <= len; j++) {
      row[j] = row[j - 1] + prev[j - 1];
    }
    prev = row;
    len++;
  }

  return prev[len - 1];
}