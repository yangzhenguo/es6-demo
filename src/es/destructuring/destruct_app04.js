/**
 * Created by Sam on 2019/5/6.
 */
let jsonData = {
    id: 42,
    status: "OK",
    data: [867, 5309]
};

const result = {};

let { id, status, data: number} = jsonData;
console.log(id, status, number);

({ id: result.code, status: result.text, data: [ result.firstNum, result.lastNum ] } = jsonData)
console.log(result)