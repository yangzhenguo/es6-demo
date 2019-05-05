/**
 * Created by Sam on 2019/5/6.
 */
function f() {
    console.log('I am outside')
}

(function () {
    if (false) {
        function f() {
            console.log('I am inside')
        }
    }

    f();
}())