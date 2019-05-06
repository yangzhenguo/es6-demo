/**
 * Created by Sam on 2019/5/6.
 */
const node = {
    loc: {
        start: {
            line: 1,
            column: 5
        }
    }
};
let { loc, loc: { start, start: { line } } } = node;
console.log(loc, start, line)