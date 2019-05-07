/**
 * Created by Sam on 2019/5/7.
 */
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(15));
console.log(Number.isNaN('15'));
console.log(Number.isNaN(true));
console.log(Number.isNaN(9 / NaN));
console.log(Number.isNaN('true' / 0));
console.log(Number.isNaN('true' / 'true'));