/**
 * Created by Sam on 2019/5/8.
 */
console.log([NaN].find(v => Number.isNaN(NaN)));
console.log([null, NaN].findIndex(v => Number.isNaN(NaN)));