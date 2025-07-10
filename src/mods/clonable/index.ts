
export interface Memory {

  [Symbol.dispose](): void

  readonly bytes: Uint8Array

}

export class Slice {

  constructor(
    readonly bytes: Uint8Array
  ) { }

  [Symbol.dispose]() { }

}