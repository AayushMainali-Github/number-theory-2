/**
 * Compute the Jacobi symbol (a|n).
 * n must be an odd positive integer.
 *
 * @param {number|bigint} a
 * @param {number|bigint} n - Odd positive integer
 * @returns {number}
 */
export function jacobiSymbol(a, n) {
  a = BigInt(a);
  n = BigInt(n);

  if (n <= 0n || n % 2n === 0n) {
    throw new Error("n must be an odd positive integer");
  }

  a %= n;
  let t = 1;
  
  while (a !== 0n) {
    while (a % 2n === 0n) {
      a /= 2n;
      const r = n % 8n;
      if (r === 3n || r === 5n) {
        t = -t;
      }
    }
    
    // Swap a and n (Quadratic Reciprocity)
    [a, n] = [n, a];
    
    if (a % 4n === 3n && n % 4n === 3n) {
      t = -t;
    }
    
    a %= n;
  }

  if (n === 1n) return t;
  return 0;
}
