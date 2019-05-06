/**
 * Created by Sam on 2019/5/6.
 */
const { toString, toFixed } = 123;
console.log(toString === Number.prototype.toString)
console.log(toString.call(1), toFixed.call(1.327, 2))