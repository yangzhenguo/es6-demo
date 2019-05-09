/**
 * Created by Sam on 2019/5/9.
 */
const obj = {
    *m() {
        yield 'Hello World'
    }
}

let g = obj.m();
console.log(g.next())

for (let item of obj.m()) {
    console.log(item);
}