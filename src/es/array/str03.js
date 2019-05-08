/**
 * Created by Sam on 2019/5/8.
 */
const fs = require('fs');
const file = fs.readFileSync(__filename).toString();
function length(str) {
    return [...str].length;
}
console.log(length('x\uD83D\uDE80y'));
console.log(file.length, length(file));
console.log(file);