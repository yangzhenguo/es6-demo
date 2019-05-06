/**
 * Created by Sam on 2019/5/6.
 */
var {x = 3} = {x: undefined};
console.log(x)

var {y = 3} = {y: null};
console.log(y)