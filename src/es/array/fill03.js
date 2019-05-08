/**
 * Created by Sam on 2019/5/8.
 */
let arr = new Array(3).fill({name: 'Mike'});
arr[0].name = 'Ben';
console.log(arr);

let new_arr = new Array(3).fill([]);
new_arr[0].push(5);
console.log(new_arr);