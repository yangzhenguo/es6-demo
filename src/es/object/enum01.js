/**
 * Created by Sam on 2019/5/9.
 */
let obj = { foo: 123 };
console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));
for (let i in obj) {
    console.log(i)
}
Object.defineProperty(obj, 'value', {
    value: 321,
    enumerable: false
});
console.log(obj, 'foo' in obj, 'value' in obj);
for (let i in obj) {
    console.log(i)
}