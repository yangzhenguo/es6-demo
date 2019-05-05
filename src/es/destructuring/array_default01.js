/**
 * Created by Sam on 2019/5/6.
 */
let [foo = true] = [];
let [x, y = 'b'] = ['a']
let [a, b = 'b'] = ['a', undefined]

console.log(foo, x, y, a, b)