/**
 * Created by Sam on 2019/5/6.
 */
var tmp = new Date();

function f() {
    console.log(tmp);
    if (false) {
        var tmp = 'hello world';
    }
}
f();