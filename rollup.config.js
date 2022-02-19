import {terser} from 'rollup-plugin-terser'

export default {
  input: 'src/index.js',
  output: [
    {file: 'dist/common.js',format: 'cjs'},
    {file: 'dist/common.min.js', format: 'cjs', plugins: [terser()]},
    {file: 'dist/esm.min.js', format: 'esm', plugins: [terser()]}
  ]
};
