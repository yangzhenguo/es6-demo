/**
 * Created by Sam on 2019/5/6.
 */
var { x = 3 } = 1;
console.log(x)
var {x, y = 5} = {x: 1};
console.log(x, y)
var {x: y = 3} = {};
console.log(x, y)