/**
 * Created by Sam on 2019/5/9.
 */
let arr = Array.of(1, 2, 3, 4, 5);
arr.a = 123
for (let i in arr) {
    console.log(i, arr[i], typeof i);
}
console.log(Object.getOwnPropertyDescriptor(arr, 'a'));