/**
 * Created by Sam on 2019/5/5.
 */
var a = []
for(var i=0; i<10; i++) {
    a[i] = function() {
        console.log(i)
    }
}
a[6]();