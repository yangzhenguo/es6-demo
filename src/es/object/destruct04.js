/**
 * Created by Sam on 2019/5/9.
 */
function baseFunc({a, b}) {

}

function wrapperFunc({x, y, ...rest}) {
    return baseFunc(rest);
}