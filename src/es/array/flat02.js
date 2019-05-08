/**
 * Created by Sam on 2019/5/8.
 */
console.log([1, 2, [3, 4]].flat());
console.log([1, 2, [3, [4, 5]]].flat());
console.log([1, 2, [3, [4, 5]]].flat(2));
console.log([1, 2, [3, [4, 5]]].flat(Infinity));