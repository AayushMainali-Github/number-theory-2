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

- `divisors(n)` – Returns all positive divisors of a given integer n
- `extendedGCD(a, b)` – Extended Greatest Common Divisor
- `gcd(a, b)` – Greatest Common Divisor using Euclid’s algorithm
- `lcm(a, b)` – Least Common Multiple using the formula `lcm(a, b) = |a*b| / gcd(a, b)`
- `mod(a, b)` – Modular remainder (handles negative numbers and BigInts)
- `modInverse(a, m)` – Modular multiplicative inverse of a under modulo m

### Combinatorics

- `combination(n, r)` – Computes the number of combinations of n items taken r at a time
- `factorial(n)` – Computes the factorial of n (n!)
- `fibonacci(n)` – Generates Fibonacci sequence up to the n-th term
- `isTriangular(n)` – Checks if a number n is triangular
- `lucas(n)` – Generates Lucas sequence up to the n-th term
- `nthFibonacci(n)` – Returns the n-th Fibonacci number
- `nthLucas(n)` – Returns the n-th Lucas number
- `permutation(n, r)` – Computes the number of permutations of n items taken r at a time
- `square(n)` – Computes the n-th square number
- `triangular(n)` – Computes the n-th triangular number

### Function

- `aliquotSum(n)` – Computes the Aliquot Sum of a number n
- `carmichael(n)` – Computes the Carmichael function λ(n)
- `digitalRoot(n)` – Computes the digital root of an integer n
- `isAbundant(n)` – Checks if a number n is Abundant
- `isDeficient(n)` – Checks if a number n is Deficient
- `isPerfect(n)` – Checks if a number n is Perfect
- `mobius(n)` – Computes the Möbius function μ(n)
- `productOfDigits(n)` – Computes the product of the digits of an integer n
- `sigma(n)` – Computes the sum of all positive divisors of n
- `sumOfDigits(n)` – Computes the sum of the digits of an integer n
- `tau(n)` – Computes the number of positive divisors of n
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
