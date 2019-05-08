/**
 * Created by Sam on 2019/5/8.
 */
const contains = (() =>
        Array.prototype.includes
            ? (arr, value) => arr.includes(value)
            : (arr, value) => arr.some(el => el === value)
)();
let rst = contains(['foo', 'bar'], 'baz');
console.log(rst);
rst = contains(['foo', 'bar'], 'bar');
console.log(rst);