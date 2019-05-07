/**
 * Created by Sam on 2019/5/7.
 */
function sum(...values) {
    let s = 0;
    for (let val of values) {
        s += val;
    }
    return s;
}
console.log(sum(2, 3, 4))