/**
 * Created by Sam on 2019/5/9.
 */
let propKey = 'foo';

let obj = {
    [propKey]: true,
    ['a' + 'bc']: 123,
};
console.log(obj);