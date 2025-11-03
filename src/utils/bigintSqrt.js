export default function bigintSqrt(n) {
  if (n < 0n) throw new RangeError("Cannot compute sqrt of negative number");
  if (n < 2n) return n;

  let x0 = n / 2n;
  let x1 = (x0 + n / x0) / 2n;
  while (x1 < x0) {
    x0 = x1;
    x1 = (x0 + n / x0) / 2n;
  }
  return x0;
}
