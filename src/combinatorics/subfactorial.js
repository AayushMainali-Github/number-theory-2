/**
 * Compute subfactorial (derangements) of n, denoted !n.
 * Uses recurrence: !0 = 1, !1 = 0, and for n ≥ 2,
 * !n = (n-1) * (!(n-1) + !(n-2)).
 *
 * @example
 * subfactorial(6) ➜ 265n
 * subfactorial(0) ➜ 1n
 *
 * @param {number|bigint} n
 * @returns {bigint}
 */
export function subfactorial(n) {
  n = BigInt(n);
  if (n < 0n)
    throw new RangeError("Subfactorial is not defined for negative numbers");
  if (n === 0n) return 1n;
  if (n === 1n) return 0n;

  let d0 = 1n; // !0
  let d1 = 0n; // !1
  for (let i = 2n; i <= n; i++) {
    const next = (i - 1n) * (d1 + d0);
    d0 = d1;
    d1 = next;
  }
  return d1;
}
