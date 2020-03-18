//遵循Promise/A+规范。https://promisesaplus.com/
//1、promise 是一个类,类中需要传入一个executor 执行器,默认会立即执行
//2.promise内部提供两个方法，更改promise 的状态，3个状态是：等待、成功、失败。
//resolve触发成功 (成功的内容)，reject 触发失败 (失败的原因)，不传参数即为undefined
//3、Promise 是为了解决异步问题，如恶魔金字塔，并发异步处理
//4、Promise 一旦成功了就不能失败，如果失败了就不能成功，只能存在一种状态。失败的情况：reject、抛出异常

let Promise = require('./promise');
let promise = new Promise((resolve,reject)=>{
    // throw new Error('抛出错误');
    // reject('失败'); //或者抛出异常： throw new Error('失败')
    resolve('成功'); 
})
//then 接收一个成功回调和失败回调
promise.then((data)=>{ //onfulfilled 成功
    console.log('res',data); 
},(err)=>{             //onrejected 失败
    console.log(err);
})
//promise 有可能是别人写的一个函数