import { Lengthed } from "@hazae41/lengthed"

export interface Memory<N extends number = number> {

  [Symbol.dispose](): void

  readonly bytes: Uint8Array & Lengthed<N>

}

export class Slice<N extends number = number> implements Memory<N> {

  constructor(
    readonly bytes: Uint8Array & Lengthed<N>
  ) { }

  [Symbol.dispose]() { }

}