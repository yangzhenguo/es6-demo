/**
 * Created by Sam on 2019/5/6.
 */
function example() {
    return [1, 2, 3]
}

let [a, b, c] = example()
console.log(a, b, c)

function example1() {
    return {
        foo: 1,
        bar: 2
    }
}
console.log(example1())
let { foo, bar } = example1()
console.log(foo, bar)