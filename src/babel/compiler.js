/**
 * Created by Sam on 2019/5/5.
 */
const babel = require('@babel/core');
const path = require('path');

let out = babel.transformFileSync(path.resolve(__dirname, './test001.js'))
console.log(out.code);