/**
 * Created by Sam on 2019/5/9.
 */
let arr = Array.of(1, 2, 3, 4, 5);
for(let val of arr) {
    console.log(val);
}
for (let [k, v] of arr.entries()) {
    console.log(k, v);
}

let obj = {name: 'sam', age: 22}
for(let [k, v] of Object.entries(obj)) {
    console.log(k, v);
}