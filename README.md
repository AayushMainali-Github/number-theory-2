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

- `gcd(a, b)` – Greatest Common Divisor using Euclid’s algorithm
- `mod(a, b)` – Modular remainder (handles negative numbers and BigInts)

### Sequence

- `fibonacci(n)` – Generates Fibonacci sequence up to the n-th term

---

## Running Tests

```bash
npm test
```

---

## License

MIT License © 2025
