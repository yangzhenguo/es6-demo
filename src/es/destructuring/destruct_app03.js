/**
 * Created by Sam on 2019/5/6.
 */
function f1([x, y, z]) {
    return [x, y, z]
}
console.log(f1([1, 2, 3]))

function f2({x, y, z}) {
    return [x, y, z]
}
console.log(f2({y: 2, x: 1, z: 3}))