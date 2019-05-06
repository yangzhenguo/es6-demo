/**
 * Created by Sam on 2019/5/6.
 */
let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
console.log(baz)

let obj = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj
console.log(f, l)