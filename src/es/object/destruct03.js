/**
 * Created by Sam on 2019/5/9.
 */
const o = Object.create({x: 1, y: 2});
o.z = 3;

let {x, ...newObj} = o;
let {y, z} = newObj;
console.log(x, y, z);