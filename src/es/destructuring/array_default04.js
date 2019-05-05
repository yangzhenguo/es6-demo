/**
 * Created by Sam on 2019/5/6.
 */
let [x1 = 1, y1 = x1] = [];
console.log(x1, y1)
let [x2 = 1, y2 = x2] = [2];
console.log(x2, y2)
let [x3 = 1, y3 = x3] = [1, 2];
console.log(x3, y3)
let [x4 = y4, y4 = 1] = [];