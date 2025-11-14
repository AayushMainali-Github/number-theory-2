# Changelog

All notable changes to this project will be documented in this file.

### [0.8.0] - 2025-11-XX - Arithmetic Expansion - ONGOING

- Added arithmetic functions:
  - `ceilDiv(a, b)` – Integer ceiling division `ceil(a / b)` with correct signed behavior
  - `crt(remainders, moduli)` – Chinese Remainder Theorem for coprime moduli
  - `divides(a, b)` – Checks divisibility (throws if divisor is zero)
  - `floorDiv(a, b)` – Euclidean division returning `{ q, r }` with `0 ≤ r < |b|`
  - `leastAbsoluteResidue(a, m)` – Minimal absolute residue representative in `(-m/2, m/2]` (tie at `m/2` resolves to `+m/2`)
  - `powMod(base, exp, mod)` – Fast modular exponentiation `(base^exp) mod mod`
  - `orderMod(a, m)` – Multiplicative order: smallest `k` such that `a^k ≡ 1 (mod m)`; requires `gcd(a, m) = 1` and `m > 1`
  - `solveCongruence(a, b, m)` – Canonical solution to `a·x ≡ b (mod m)`
  - `modAdd(a, b, m)` – Modular addition `(a + b) mod m` with normalization
  - `modDiv(a, b, m)` – Modular division `a * b⁻¹ (mod m)`; requires `gcd(b, m) = 1`
  - `modMul(a, b, m)` – Modular multiplication `(a * b) mod m` with normalization
  - `modSub(a, b, m)` – Modular subtraction `(a - b) mod m` with normalization

### [0.7.0] - 2025-11-10 - Combinatorics Expansions

- Added combinatorics functions:
  - `doubleFactorial(n)` – Computes the double factorial n!!
  - `nthPadovan(n)` – Returns the n-th Padovan number
  - `nthPerrin(n)` – Returns the n-th Perrin number
  - `nthMotzkin(n)` – Returns the n-th Motzkin number
  - `nthTribonacci(n)` – Returns the n-th Tribonacci number
  - `motzkin(n)` – Generates the Motzkin sequence up to the n-th term
  - `padovan(n)` – Generates the Padovan sequence up to the n-th term
  - `pascalRow(n)` – Returns the n-th row of Pascal's triangle
  - `perrin(n)` – Generates the Perrin sequence up to the n-th term
  - `subfactorial(n)` – Computes derangements !n (subfactorial)
  - `tribonacci(n)` – Generates the Tribonacci sequence up to the n-th term

### [0.6.0] - 2025-11-08 - Function Expansions

- Added function functions:
  - `collatzSequence(n)` – Generates the Collatz sequence from n down to 1
  - `collatzSteps(n)` – Counts steps to reach 1 under the Collatz process
  - `cototient(n)` – Computes cototient n − φ(n)
  - `dedekindPsi(n)` – Computes the Dedekind psi function ψ(n)
  - `isSquareFree(n)` – Determines if n is square-free
  - `jordanTotient(n, k)` – Computes Jordan's totient function J_k(n)
  - `liouville(n)` – Computes the Liouville function of a number n
  - `reducedTotient(n)` – Returns reduced fraction φ(n)/n as { num, den }
  - `sigmaUnitary(n)` – Computes the sum of unitary divisors σ\*(n)
  - `omegaBig(n)` – Computes the number of prime factors of n (big omega)
  - `omegaSmall(n)` – Computes the number of distinct prime factors of n (small omega)
  - `radical(n)` – Computes the radical of n (squarefree kernel)
  - `tauUnitary(n)` – Computes the number of unitary divisors τ\*(n)

### [0.5.0] - 2025-11-05 - Arithmetic and Combinatorics Expansions

- Added arithmetic functions:
  - `gcdArray(arr)` – Computes the GCD of an array of numbers
  - `isEven(n)` – Checks if a number n is even
  - `isOdd(n)` – Checks if a number n is odd
  - `lcmArray(arr)` – Computes the LCM of an array of numbers
  - `sign(n)` – Returns the sign of a number n
- Added combinatorics functions:
  - `bell(n)` – Computes the n-th Bell number
  - `catalan(n)` – Computes the n-th Catalan number
  - `hexagonal(n)` – Computes the n-th hexagonal number
  - `isHexagonal(n)` – Checks if a number n is hexagonal
  - `isPentagonal(n)` – Checks if a number n is pentagonal
  - `isPolygonal(s, n)` – Checks if a number n is s-gonal
  - `isSquare(n)` – Checks if a number n is square
  - `isTriangular(n)` – Checks if a number n is triangular
  - `pentagonal(n)` – Computes the n-th pentagonal number
  - `polygonal(s, n)` – Computes the n-th s-gonal number
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
