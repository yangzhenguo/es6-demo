/**
 * Created by Sam on 2019/5/6.
 */
function move({ x = 0, y = 0 } = {}) {
    return [x, y]
}
console.log(move({x: 3, y: 8}))
console.log(move({x: 3}))
console.log(move({}))
console.log(move())