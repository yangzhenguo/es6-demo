/**
 * Created by Sam on 2019/5/9.
 */
let arr = Array.of(1, 2, 3, 5, 7);
console.log(arr.includes(4));

console.log(arr.find((item, index) => item === 3));
console.log(arr.findIndex((item, index) => item === 5));