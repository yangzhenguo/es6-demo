/**
 * Created by Sam on 2019/5/6.
 */
let [foo, [[bar], baz]] = [1, [[2], 3]]
console.log(foo, bar, baz)

let [ , , third] = ['foo', 'bar', 'baz']
console.log(third)

let [x, , y] = [1, 2, 3]
console.log(x, y)

let [head, ...tail] = [
    1, 2, 3, 4]
console.log(head, tail)

let [a, b, ...z] = ['a']
console.log(a, b, z)