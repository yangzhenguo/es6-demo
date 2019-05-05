/**
 * Created by Sam on 2019/5/5.
 */
let input = Array.from({length: 10}, () => Math.random() * 10 >>> 0);
input.map(item => item + 1);
Promise.resolve().finally()