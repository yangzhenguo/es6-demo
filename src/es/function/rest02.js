/**
 * Created by Sam on 2019/5/7.
 */
function push(array, ...items) {
    items.forEach(function(item) {
        array.push(item);
        console.log(item);
    });
}

var a = [];
push(a, 1, 2, 3)