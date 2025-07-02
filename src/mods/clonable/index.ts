import { Lengthed } from "@hazae41/lengthed"

export interface Clonable {

  cloneOrThrow(): this

}

export class Slice<N extends number = number> {

  constructor(
    readonly bytes: Uint8Array & Lengthed<N>
  ) { }

  cloneOrThrow() {
    return new Slice(new Uint8Array(this.bytes) as Uint8Array & Lengthed<N>)
  }

}