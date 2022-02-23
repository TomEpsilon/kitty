// node build.js [file]
import{minify}from"terser";import{promises as fs}from"fs";let p=process.argv[2];(async()=>{const i=await fs.readFile(p,"utf8"),s=await minify(i);await fs.writeFile(p,s.code)})();
