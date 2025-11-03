/**
 * Generate the Lucas sequence up to n terms.
 * Works with BigInt and non-negative integer inputs.
 *
 * The Lucas sequence is defined as:
 * L(0) = 2
 * L(1) = 1
 * L(n) = L(n-1) + L(n-2)
 *
 * @example
 * lucas(5) ➜ [2n, 1n, 3n, 4n, 7n]
 *
 * @param {number|bigint} n - Number of terms to generate (inclusive index)
 * @returns {bigint[]} The Lucas sequence up to n terms
 */
export function lucas(n) {
  n = BigInt(n);
  if (n < 0n) throw new RangeError("Index cannot be negative");

  // Base cases
  if (n === 0n) return [2n];
  if (n === 1n) return [2n, 1n];

  let a = 2n;
  let b = 1n;
  const sequence = [a, b];

  for (let i = 2n; i <= n; i++) {
    const next = a + b;
    a = b;
    b = next;
    sequence.push(b);
  }

  return sequence;
}
