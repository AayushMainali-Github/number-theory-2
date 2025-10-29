# Changelog

All notable changes to this project will be documented in this file.

## [0.1.0] - 2025-10-30 - Arithmetic, Primes & Sequences Expansion

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
