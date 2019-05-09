/**
 * Created by Sam on 2019/5/9.
 */
const obj = {
    get foo () {},
    set foo(x) {},
};

// console.log(obj.foo.name);
const des = Object.getOwnPropertyDescriptor(obj, 'foo');
console.log(des.get.name);
console.log(des.set.name);