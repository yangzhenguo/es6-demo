/**
 * Created by Sam on 2019/5/11.
 */
let p = new Promise((i, j)=>{
    setTimeout(()=>{

    }, 1000)
});
p.then(()=>{
    console.log(1)
}, ()=>{
    console.log(2)
}).catch(()=>{
    console.log(3)
});