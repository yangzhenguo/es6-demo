/**
 * Created by Sam on 2019/5/7.
 */
function log({x, y = 5} = {}) {
    console.log(x, y)
}

log({});
log({x: 1});
log({x: 1, y: 2});
log();