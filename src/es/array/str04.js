/**
 * Created by Sam on 2019/5/8.
 */
const str = 'x\uD83D\uDE80y';

console.log(str);

console.log(str.split('').reverse().join(''));

console.log([...str].reverse().join(''));