/**
 * Created by Sam on 2019/5/8.
 */
let arr1 = [1, 2, 3];
let arr2 = Array.from(arr1);
console.log(arr1, arr2);

arr1[0] = 0;
console.log(arr1, arr2);