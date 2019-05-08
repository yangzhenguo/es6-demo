/**
 * Created by Sam on 2019/5/8.
 */
Number.prototype[Symbol.iterator] = function* () {
    let i = 0;
    let num = this.valueOf();
    while (i < num) {
        yield i++;
    }
};

console.log([...10]);