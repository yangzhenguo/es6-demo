/**
 * Created by Sam on 2019/5/9.
 */
const target = { a: 1 };

const source1 = { b: 2 };
const source2 = { c: 3 };

console.log(target);
Object.assign(target, source1);
console.log(target);
Object.assign(target, source1, source2);
console.log(target);