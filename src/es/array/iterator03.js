/**
 * Created by Sam on 2019/5/8.
 */
let map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three']
]);

let arr = [...map.keys()];
console.log(arr);
console.log([...map.values()]);