# Clonable

Rust-like clone for TypeScript

```bash
npm i @hazae41/clonable
```

[**Node Package 📦**](https://www.npmjs.com/package/@hazae41/clonable)

## Features
- 100% TypeScript and ESM
- Rust-like patterns

## Usage
 
```tsx
import { Clonable, Slice } from "@hazae41/clonable"

class Struct implements Clonable {

  constructor(
    readonly slice: Slice
  ) {}

  cloneOrThrow(): this {
    return new Struct(this.slice.cloneOrThrow())
  }

}
```