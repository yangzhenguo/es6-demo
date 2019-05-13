/**
 * Created by Sam on 2019/5/9.
 */
let arr = Array.of(1, 2, 3, 4, 5);
for (let i=0; i<arr.length; i++) {
    console.log(i, arr[i]);
}

arr.forEach((item, index, ary) => {
    console.log(item, index, ary);
});