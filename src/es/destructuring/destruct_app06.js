/**
 * Created by Sam on 2019/5/6.
 */
const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
    console.log('key: ' + key + ", value: " + value);
}

for (let [key] of map) {
    console.log('key' + " is " + key);
}

for (let [, value] of map) {
    console.log('value' + " is " + value);
}
