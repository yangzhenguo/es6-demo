/**
 * Created by Sam on 2019/5/9.
 */
console.log((new Function()).name);
let doSomething = function () {

};
console.log(doSomething.bind().name);