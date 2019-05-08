/**
 * Created by Sam on 2019/5/8.
 */
const arr1 = [{ foo: 1 }];
const arr2 = [{ bar: 2 }];

const arr3 = arr1.concat(arr2);
const arr4 = [...arr1, ...arr2];

console.log(arr3[0] === arr1[0]);
console.log(arr4[0] === arr1[0]);