# number-theory-2

A lightweight and modern **number theory library** for JavaScript and Node.js.  
It includes common number theory utilities all written with clarity and BigInt support.

---

## Installation

```bash
npm install number-theory-2
```

---

## Features

- Works with both **Number** and **BigInt**
- Pure JavaScript (no dependencies)
- Simple, modular, and easy to extend
- Accurate for very large integer computations

---

## Usage

```js
import { gcd, mod, fibonacci } from "number-theory-2";

console.log(gcd(84, 18)); // ➜ 6n
console.log(mod(-10, 3)); // ➜ 2n
console.log(fibonacci(10)); // ➜ [0n, 1n, 1n, 2n, 3n, 5n, 8n, 13n, 21n, 34n, 55n]
```

---

## Currently Available Functions

### Arithmetic

- `ceilDiv(a, b)` – Integer ceiling division `ceil(a / b)` with correct signed behavior
- `crt(remainders, moduli)` – Chinese Remainder Theorem solution for coprime moduli
- `divides(a, b)` – Checks if `a` divides `b` (throws if `a = 0`)
- `divisors(n)` – Returns all positive divisors of a given integer n
- `extendedGCD(a, b)` – Extended Greatest Common Divisor
- `floorDiv(a, b)` – Euclidean division returning `{ q, r }` with `0 ≤ r < |b|`
- `gcd(a, b)` – Greatest Common Divisor using Euclid’s algorithm
- `gcdArray(arr)` – Computes the GCD of an array of numbers
- `isEven(n)` – Checks if a number n is even
- `isOdd(n)` – Checks if a number n is odd
- `leastAbsoluteResidue(a, m)` – Returns minimal absolute residue in `(-m/2, m/2]` (tie at `m/2` resolves to `+m/2`)
- `lcm(a, b)` – Least Common Multiple using the formula `lcm(a, b) = |a*b| / gcd(a, b)`
- `lcmArray(arr)` – Computes the LCM of an array of numbers
- `mod(a, b)` – Modular remainder (handles negative numbers and BigInts)
- `modAdd(a, b, m)` – Modular addition `(a + b) mod m` with normalization
- `modDiv(a, b, m)` – Modular division `a * b⁻¹ (mod m)`; requires `gcd(b, m) = 1`
- `modMul(a, b, m)` – Modular multiplication `(a * b) mod m` with normalization
- `modSub(a, b, m)` – Modular subtraction `(a - b) mod m` with normalization
- `modInverse(a, m)` – Modular multiplicative inverse of a under modulo m
- `orderMod(a, m)` – Multiplicative order: smallest `k` such that `a^k ≡ 1 (mod m)`; defined when `gcd(a, m) = 1` and `m > 1`
- `powMod(base, exp, mod)` – Fast modular exponentiation `(base^exp) mod mod`
- `sign(n)` – Returns the sign of a number n
- `solveCongruence(a, b, m)` – Solves `a·x ≡ b (mod m)` canonically

### Combinatorics

- `bell(n)` – Computes the n-th Bell number
- `catalan(n)` – Computes the n-th Catalan number
- `combination(n, r)` – Computes the number of combinations of n items taken r at a time
- `doubleFactorial(n)` – Computes the double factorial n!!
- `factorial(n)` – Computes the factorial of n (n!)
- `fibonacci(n)` – Generates Fibonacci sequence up to the n-th term
- `hexagonal(n)` – Computes the n-th hexagonal number
- `isHexagonal(n)` – Checks if a number n is hexagonal
- `isPentagonal(n)` – Checks if a number n is pentagonal
- `isPolygonal(s, n)` – Checks if a number n is s-gonal
- `isSquare(n)` – Checks if a number n is square
- `isTriangular(n)` – Checks if a number n is triangular
- `lucas(n)` – Generates Lucas sequence up to the n-th term
- `motzkin(n)` – Generates Motzkin sequence up to the n-th term
- `nthFibonacci(n)` – Returns the n-th Fibonacci number
- `nthLucas(n)` – Returns the n-th Lucas number
- `nthMotzkin(n)` – Returns the n-th Motzkin number
- `nthPadovan(n)` – Returns the n-th Padovan number
- `nthPerrin(n)` – Returns the n-th Perrin number
- `nthTribonacci(n)` – Returns the n-th Tribonacci number
- `padovan(n)` – Generates Padovan sequence up to the n-th term
- `pascalRow(n)` – Returns the n-th row of Pascal's triangle
- `pentagonal(n)` – Computes the n-th pentagonal number
- `perrin(n)` – Generates Perrin sequence up to the n-th term
- `permutation(n, r)` – Computes the number of permutations of n items taken r at a time
- `polygonal(s, n)` – Computes the n-th s-gonal number
- `square(n)` – Computes the n-th square number
- `subfactorial(n)` – Computes derangements !n (subfactorial)
- `triangular(n)` – Computes the n-th triangular number
- `tribonacci(n)` – Generates Tribonacci sequence up to the n-th term

### Function

- `aliquotSum(n)` – Computes the Aliquot Sum of a number n
- `carmichael(n)` – Computes the Carmichael function λ(n)
- `collatzSequence(n)` – Generates the Collatz sequence from n down to 1
- `collatzSteps(n)` – Counts steps to reach 1 under the Collatz process
- `cototient(n)` – Computes cototient n − φ(n)
- `dedekindPsi(n)` – Computes the Dedekind psi function ψ(n)
- `digitalRoot(n)` – Computes the digital root of an integer n
- `isAbundant(n)` – Checks if a number n is Abundant
- `isDeficient(n)` – Checks if a number n is Deficient
- `isPerfect(n)` – Checks if a number n is Perfect
- `isSquareFree(n)` – Checks if a number n is square-free
- `jordanTotient(n, k)` – Computes Jordan's totient function J_k(n)
- `liouville(n)` – Computes the Liouville function of a number n
- `mobius(n)` – Computes the Möbius function μ(n)
- `omegaBig(n)` – Computes the number of prime factors of n (big omega)
- `omegaSmall(n)` – Computes the number of distinct prime factors of n (small omega)
- `productOfDigits(n)` – Computes the product of the digits of an integer n
- `radical(n)` – Computes the radical of n (squarefree kernel)
- `reducedTotient(n)` – Returns reduced fraction φ(n)/n as { num, den }
- `sigma(n)` – Computes the sum of all positive divisors of n
- `sigmaUnitary(n)` – Computes the sum of unitary divisors σ\*(n)
- `sumOfDigits(n)` – Computes the sum of the digits of an integer n
- `tau(n)` – Computes the number of positive divisors of n
- `tauUnitary(n)` – Computes the number of unitary divisors τ\*(n)
- `totient(n)` – Computes Euler's Totient Function φ(n)

### Prime

- `countPrimes(n)` – Counts the number of prime numbers ≤ n
- `countPrimesInRange(a, b)` – Counts the number of prime numbers between a and b (inclusive)
- `isCoprime(a, b)` – Checks whether two integers are coprime (i.e., gcd(a, b) = 1)
- `isPrime(n)` – Checks if a number is prime
- `nextPrime(n)` – Finds the smallest prime number greater than n
- `primeFactorization(n)` – Returns the full prime factorization of n as an array of objects `{ prime, power }`.
- `primeFactors(n)` – Returns the distinct prime factors of n as an array of BigInts.
- `sieve(n)` – Generates all primes up to n using the Sieve of Eratosthenes
- `sieveRange(a, b)` – Generates all primes between a and b (inclusive) using the Sieve of Eratosthenes

---

## Running Tests

```bash
npm test
```

---

## License

MIT License © 2025
