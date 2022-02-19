import { createHash } from 'crypto';

class Kitter {
  constructor(init) {
    // Let's see. Is init a string?
    this.kitty = (typeof init === 'string' ?
    // If it is, then generate a SHA-256 hash from it.
    createHash('sha256').update(init.toString()).digest('hex') :
    // Else, return a random 64-bit hexadecimal number.
    [...Array(64)].map(()=>Math.floor(Math.random()*16).toString(16)).join(''))
    // Then split the string into 8 equal parts.
    .match(/.{1,8}/g)
  }
}

export {Kitter}
