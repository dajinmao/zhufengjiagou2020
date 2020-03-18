let Promise = require('./promise');
let promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('1s后输出');
    },1000);
})
//发布订阅模式。支持一个promise可以执行then多次，等会状态改变后 会让then中的函数执行
promise.then((data)=>{ //onfulfilled 成功
    console.log('res1',data); 
},(err)=>{             //onrejected 失败
    console.log(err);
});
promise.then((data)=>{ //onfulfilled 成功
    console.log('res2',data); 
},(err)=>{             //onrejected 失败
    console.log(err);
})