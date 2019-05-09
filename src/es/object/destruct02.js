/**
 * Created by Sam on 2019/5/9.
 */
let o1 = {a: 1};
let o2 = {b: 2};
o2.__proto__ = o1;
let {...o3} = o2;
console.log(o3, o3.a)