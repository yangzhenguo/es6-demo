/**
 * Created by Sam on 2019/5/8.
 */
const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];

console.log(arr1.concat(arr2, arr3));

console.log([...arr1, ...arr2, ...arr3]);