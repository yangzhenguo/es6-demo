/**
 * Created by Sam on 2019/5/6.
 */
const obj1 = {};
const obj2 = { foo: 'bar' };
Object.setPrototypeOf(obj1, obj2);
let { foo } = obj2;
console.log(foo)