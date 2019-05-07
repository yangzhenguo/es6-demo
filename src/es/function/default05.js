/**
 * Created by Sam on 2019/5/7.
 */
function throwIfMissing() {
    throw new Error('Missing parameter')
}

function foo(mustBeProvided = throwIfMissing()) {
    return mustBeProvided;
}

console.log(foo(12))
console.log(foo())