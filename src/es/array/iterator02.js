/**
 * Created by Sam on 2019/5/8.
 */
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3,
    [Symbol.iterator]: function* () {
        for (let i in new Array(this.length).fill(0)) {
            yield this[i];
        }
    }
};

console.log([...arrayLike]);