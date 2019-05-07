/**
 * Created by Sam on 2019/5/7.
 */
function log(x, y) {
    y = y || 'World';
    console.log(x, y)
}

log('Hello');
log('Hello', 'China');
log('Hello', '')

function log2(x, y) {
    if (typeof y === 'undefined') {
        y = 'World'
    }
    console.log(x, y)
}
log2('Hello', '')