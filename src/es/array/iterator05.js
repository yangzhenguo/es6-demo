/**
 * Created by Sam on 2019/5/8.
 */
function canIterable(obj) {
    if (null === obj || undefined === obj) {
        return false;
    }
    return typeof obj[Symbol.iterator] === 'function';
}

const go = function*() {
    yield 1;
    yield 2;
    yield 3;
};
console.log([...go()]);
console.log(canIterable(go));
console.log(canIterable());
console.log(canIterable(undefined));
console.log(canIterable(null));
console.log(canIterable(''));
console.log(canIterable(123));