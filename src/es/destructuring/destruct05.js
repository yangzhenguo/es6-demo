/**
 * Created by Sam on 2019/5/6.
 */
function* fibs() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b]
    }
}
let [first, second, third, fourth, fifth, sixth] = fibs();
console.log(sixth)