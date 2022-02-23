import {Kitter} from '../dist/kitter.es.min.js'
let a = new Kitter()
let b = new Kitter()
console.log(Kitter.fuse(a, b).kitty);
console.log(new Kitter('').kitty);
