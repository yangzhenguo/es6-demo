/**
 * Created by Sam on 2019/5/8.
 */
function length1(str) {
    return Array.from(str).length;
}

function length2(str) {
    return [...str].length;
}

function length3(str) {
    let sum = 0;
    for (let i of str) {
        sum++;
    }
    return sum;
}

console.log(length1('\uD842\uDFB7'));
console.log(length2('\uD842\uDFB7'));
console.log(length3('\uD842\uDFB7'));