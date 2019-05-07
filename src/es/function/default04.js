/**
 * Created by Sam on 2019/5/7.
 */
let x = 99;
function foo(p = x + 1) {
    console.log(p)
}
foo();
x = 100;
foo();