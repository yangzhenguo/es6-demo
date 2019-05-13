/**
 * Created by Sam on 2019/5/9.
 */
let arr = Array.from({length: 100}, () => Math.random()*100 << 0);

console.log(arr.map((item, index, array) => String(item).link('http://www.baidu.com/' + item)));
