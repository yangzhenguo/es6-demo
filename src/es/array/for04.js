/**
 * Created by Sam on 2019/5/9.
 */
let arr = Array.from({length: 10}, () => Math.random() * 100 << 0);

console.log(arr.filter(item => item > 50));