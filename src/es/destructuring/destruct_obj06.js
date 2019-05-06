/**
 * Created by Sam on 2019/5/6.
 */
let obj = {
    p: [
        'Hello',
        {
            y: 'World'
        }
    ]
}
let { p, p: [ x, { y } ] } = obj;
console.log(p, x, y)