/**
 * Created by Sam on 2019/5/6.
 */
var constantize = obj => {
    Object.freeze(obj);
    Object.keys(obj).forEach(key => {
        typeof obj[key] === 'object' && constantize(obj[key])
    })
}