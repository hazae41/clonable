import { Uint8Array } from "libs/bytes/index.js"

export interface Copiable<N extends number = number> {

  readonly copied: boolean

  get(): Uint8Array<N>

  copy(): Copied<N>

}

export class Copied<N extends number = number> implements Copiable<N> {

  readonly copied = true

  constructor(
    readonly bytes: Uint8Array<N>,
  ) { }

  get() {
    return this.bytes
  }

  copy() {
    return this
  }

}

export class Uncopied<N extends number = number> implements Copiable<N> {

  readonly copied = false

  constructor(
    readonly bytes: Uint8Array<N>,
  ) { }

  get() {
    return this.bytes
  }

  copy() {
    return new Copied(this.bytes.slice() as Uint8Array<N>)
  }

}