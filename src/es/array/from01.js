/**
 * Created by Sam on 2019/5/8.
 */
let arrayLike = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
};
let arr = Array.from(arrayLike);
console.log(arr);

let arr1 = Array.prototype.slice.call(arrayLike);
console.log(arr1);
Array.from(arrayLike, (_, index) => {
    console.log(_, index);
});