import { createHash } from 'crypto';

interface Kitter {
  constructor(init?:string): void
  kitty: string[]
}

class Kitter {
  constructor(init?: string) {
    try {parseInt(init, 16)} catch {
      // Let's see. Is init a string?
      this.kitty = (typeof init === 'string' ?
      // If it is, then generate a SHA-256 hash from it.
      createHash('sha256').update(init.toString()).digest('hex') :
      // Else, return a random 64-bit hexadecimal number.
      [...Array(64)].map(()=>Math.floor(Math.random()*16).toString(16)).join(''))
      // Then split the string into 8 equal parts.
      .match(/.{1,8}/g)
      return;
    }
    this.kitty = init.padStart(32, '0').match(/.{1,8}/g);
  }

  static fuse(male: Kitter, female: Kitter): Kitter {
    return new Kitter(((parseInt(male.kitty.join(''), 16) + parseInt(female.kitty.join(''), 16)) & (2**32 - 1)).toString())
  }
}

export {Kitter}
