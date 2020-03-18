//1、promise 是一个类,类中需要传入一个executor 执行器,默认会立即执行
//2.promise内部提供两个方法，更改promise 的状态，3个状态是：等待、成功、失败。
//resolve触发成功 (成功的内容)，reject 触发失败 (失败的原因)，不传参数即为undefined
//3、Promise 是为了解决异步问题，如恶魔金字塔，并发异步处理
//每个promise实例都有一个then方法，分别是成功和失败的回调
const PENDING = 'PENDING';
const RESOLVED = 'RESOLVED';
const REJECTED = 'REJECTED';

class Promise {
    constructor(executor){ //宏变量
        this.status = PENDING; //默认是等待态
        this.value = undefined;//成功的原因
        this.reason = undefined;//失败的原因
        this.onResolvedCallbacks = [];  //存放成功的回调函数
        this.onRejectedCallbacks = [];  //存放失败的回调函数

        let resolve = (value) => {
            if(this.status === PENDING){//保证只有状态是等待态的时候，才能更改状态
                this.value = value;
                this.status = RESOLVED;
                //需要让成功的方法一次执行
                this.onResolvedCallbacks.forEach(fn => fn());
            }
        }
        let reject = (reason) =>{
            if(this.status === PENDING){
                this.reason = reason;
                this.status = REJECTED;
                this.onRejectedCallbacks.forEach(fn=>fn());
            }

        }
        try{
            executor(resolve,reject); // 执行executor 传入成功和失败。默认立即执行
        }catch(e){
            console.log('catch',e);
            reject(e);   //如果内部出错直接将err手动的调用reject方法向下传递
        }

    }
    then(onfulfilled,onrejected){
        if(this.status === RESOLVED){
            onfulfilled(this.value);
        }
        if(this.status === REJECTED){
            onrejected(this.reason);
        }
        if(this.status === PENDING){
            //这时候executor肯定有异步逻辑
            this.onResolvedCallbacks.push(()=>{
                //todos...切片编程
                onfulfilled(this.value);  //就是执行上面的fn()
            });
            this.onRejectedCallbacks.push(()=>{
                onrejected(this.reason);
            })
        }
    }
}
module.exports = Promise;