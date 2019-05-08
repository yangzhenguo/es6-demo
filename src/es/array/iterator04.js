/**
 * Created by Sam on 2019/5/8.
 */
const go = function*() {
    yield 1;
    yield 2;
    yield 3;
};
console.log([...go()]);
console.log(typeof go()[Symbol.iterator] === 'function')