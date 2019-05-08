/**
 * Created by Sam on 2019/5/8.
 */
function typeOf() {
    return Array.from(arguments, i => typeof i);
}

console.log(typeOf(undefined, [], null, 12, 'abc', NaN));