/**
 * Created by Sam on 2019/5/6.
 */
const obj = {};
const arr = [];
({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true })
console.log(obj, arr)