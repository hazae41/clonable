import { Uint8Array } from "libs/bytes/index.js"

export interface Copiable {

  copyOrThrow(): this

}


export class Slice<N extends number = number> {

  constructor(
    readonly bytes: Uint8Array<N>
  ) { }

  copyOrThrow() {
    return new Slice(new Uint8Array(this.bytes) as Uint8Array<N>)
  }

}