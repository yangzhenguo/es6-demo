/**
 * Created by Sam on 2019/5/9.
 */
let lastWord = 'last word';

const a = {
    'first word': 'hello',
    [lastWord]: 'world',
};
console.log(a['first word']);
console.log(a[lastWord]);
console.log(a['last word']);