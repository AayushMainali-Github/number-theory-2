/**
 * Generates the Collatz sequence starting at n and ending at 1 (inclusive).
 *
 * Works with Number and BigInt. Only defined for n ≥ 1.
 * Returns an array of BigInts.
 *
 * @example
 * collatzSequence(1)  ➜ [1n]
 * collatzSequence(6)  ➜ [6n, 3n, 10n, 5n, 16n, 8n, 4n, 2n, 1n]
 * collatzSequence(19) ➜ [..., 1n]
 *
 * @param {number|bigint} n - Positive integer ≥ 1
 * @returns {bigint[]} Collatz sequence from n down to 1
 * @throws {RangeError} If n ≤ 0
 */
export function collatzSequence(n) {
  let x = BigInt(n);
  if (x <= 0n)
    throw new RangeError("collatzSequence() is only defined for n ≥ 1");

  const seq = [x];
  while (x !== 1n) {
    if (x % 2n === 0n) x /= 2n;
    else x = 3n * x + 1n;
    seq.push(x);
  }
  return seq;
}
