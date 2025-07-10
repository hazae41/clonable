# Memory

Disposable bytes for TypeScript & WebAssembly

```bash
npm i @hazae41/memory
```

[**Node Package 📦**](https://www.npmjs.com/package/@hazae41/memory)

## Features
- 100% TypeScript and ESM
- Rust-like patterns

## Usage
 
```tsx
import { Memory, Slice } from "@hazae41/memory"

function f(memory: Memory) {
  // Consume memory
  using _  = memory

  // Use raw bytes
  g(memory.bytes)
}

function g(bytes: Uint8Array) {
  console.log(bytes)
}

// Use with JavaScript bytes
f(new Slice(new Uint8Array([1,2,3])))

// Use with WebAssembly bytes
f(MyModule.somethingThatReturnsBytes())
```