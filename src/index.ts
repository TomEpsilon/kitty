import { createHash } from 'crypto';

interface Qube {
  constructor(init?:string): void
  qube: string
}

class Qube {
  constructor(init?: string) {
    // is init a string?
    this.qube = typeof init === 'string' ?
    // then create hash of it
    createHash('sha256').update(init).digest('hex') :
    // else make a random number
    Array(64).map(()=>Math.floor(Math.random()*16).toString(16)).join('')
  }

  static fuse(male: Qube, female: Qube): Qube {
    return new Qube(((parseInt(male.qube, 16) + parseInt(female.qube, 16)) & (2**32 - 1)).toString())
  }
}

export {Qube}
