# Changelog

All notable changes to this project will be documented in this file.

### [0.5.0] - 2025-11-XX - Arithmetic and Combinatorics Expansions - [ONGOING]

- Added arithmetic functions:
  - `gcdArray(arr)` – Computes the GCD of an array of numbers
  - `isEven(n)` – Checks if a number n is even
  - `isOdd(n)` – Checks if a number n is odd
  - `lcmArray(arr)` – Computes the LCM of an array of numbers
  - `sign(n)` – Returns the sign of a number n
- Added combinatorics functions:
  - `hexagonal(n)` – Computes the n-th hexagonal number
  - `isHexagonal(n)` – Checks if a number n is hexagonal
  - `isPentagonal(n)` – Checks if a number n is pentagonal
  - `isSquare(n)` – Checks if a number n is square
  - `isTriangular(n)` – Checks if a number n is triangular
  - `pentagonal(n)` – Computes the n-th pentagonal number
  - `square(n)` – Computes the n-th square number

### [0.4.1] - 2025-11-03 - Combinatorics Expansions

- Merged sequence functions into combinatorics
- Added combinatorics functions:
  - `triangular(n)` – Computes the n-th triangular number

### [0.4.0] - 2025-11-02 - Function Expansions

- Added function functions:
  - `aliquotSum(n)` – Computes the Aliquot Sum of a number n
  - `digitalRoot(n)` – Computes the digital root of an integer n
  - `isAbundant(n)` – Checks if a number n is Abundant
  - `isDeficient(n)` – Checks if a number n is Deficient
  - `isPerfect(n)` – Checks if a number n is Perfect
  - `productOfDigits(n)` – Computes the product of the digits of an integer n
  - `sumOfDigits(n)` – Computes the sum of the digits of an integer n

## [0.3.0] - 2025-11-01 - Prime and Function Expansions

- Added function functions:
  - `carmichael(n)` – Computes the Carmichael function λ(n)
  - `mobius(n)` – Computes the Möbius function μ(n)
  - `sigma(n)` – Computes the sum of all positive divisors of n
  - `tau(n)` – Computes the number of positive divisors of n
  - `totient(n)` – Computes Euler's Totient Function φ(n)
- Added prime functions:
  - `countPrimes(n)` – Counts the number of prime numbers ≤ n
  - `countPrimesInRange(a, b)` – Counts the number of prime numbers between a and b (inclusive)
  - `isCoprime(a, b)` – Checks whether two integers are coprime (i.e., gcd(a, b) = 1)

## [0.2.0] - 2025-10-30 - Arithmetic, Combinatorics and Prime Expansion

- Added arithmetic functions:
  - `divisors(n)` – Returns all positive divisors of a given integer n
  - `modInverse(a, m)` – Modular multiplicative inverse of a under modulo m
- Added combinatorics functions:
  - `factorial(n)` – Computes the factorial of n (n!)
  - `permutation(n, r)` – Computes the number of permutations of n items taken r at a time
  - `combination(n, r)` – Computes the number of combinations of n items taken r at a time
- Added prime functions:
  - `primeFactorization(n)` – Returns the full prime factorization of n as an array of objects `{ prime, power }`.
  - `primeFactors(n)` – Returns the distinct prime factors of n as an array of BigInts.
  - `nextPrime(n)` – Finds the smallest prime number greater than n

## [0.1.2] - 2025-10-29 - Updated Changelog

- Updated/Edited the changelog for past version

## [0.1.1] - 2025-10-29 - Fixed Imports

- Fixed imports for arithmetic, prime, and sequence functions

## [0.1.0] - 2025-10-29 - Arithmetic, Prime & Sequence Expansion

- Added arithmetic functions:
  - `extendedGCD(a, b)` – Extended Greatest Common Divisor
  - `lcm(a, b)` – Least Common Multiple using the formula `lcm(a, b) = |a*b| / gcd(a, b)`
- Added prime functions:
  - `isPrime(n)` – Checks if a number is prime
  - `sieve(n)` – Generates all primes up to n using the Sieve of Eratosthenes
  - `sieveRange(a, b)` – Generates all primes between a and b (inclusive) using the Sieve of Eratosthenes
- Added sequence functions:
  - `lucas(n)` – Generates Lucas sequence up to the n-th term
  - `nthFibonacci(n)` – Returns the n-th Fibonacci number
  - `nthLucas(n)` – Returns the n-th Lucas number

## [0.0.2] - 2025-10-29 - Expanded Tests

- Added 5 more tests for fibonacci function

## [0.0.1] - 2025-10-29 - Initial Release

- Added core arithmetic functions:
  - `gcd(a, b)` – Greatest Common Divisor using Euclid’s algorithm
  - `mod(a, b)` – Modular remainder (handles negatives & BigInts)
- Added sequence generator:
  - `fibonacci(n)` – Generate Fibonacci sequence up to n-th term
