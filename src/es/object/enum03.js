/**
 * Created by Sam on 2019/5/9.
 */
let arr = Array.from('hello');
console.log(arr);

for (let i in arr) {
    console.log(i);
}
console.log(Object.keys(arr));
console.log(Object.getOwnPropertyNames(arr));