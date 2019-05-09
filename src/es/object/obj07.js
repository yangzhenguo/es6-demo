/**
 * Created by Sam on 2019/5/9.
 */
let ms = {};
function getItem(key) {
    return key in ms ? ms[key] : null;
}

function setItem(key, value) {
    ms[key] = value;
}

function clear() {
    ms = {}
}

module.exports = {
    getItem,
    setItem,
    clear
}