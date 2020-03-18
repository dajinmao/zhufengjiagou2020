//generator 生成器，生成(返回)的是迭代器
//普通函数执行时无法停止，generator可以暂停
/*
function * read(){
    let a = yield 1;// 产出。遇到yield就停止执行 
    console.log('a:'+a);
    let b = yield 2;
    console.log('b:'+b);
    let c = yield 3;
    console.log('c:'+c);

}
let it = read(); //it 是迭代器，包含一个next方法
it.next('a');    //遇到yield 1 停止，没有给a赋值，第一次传递的参数是无意义的。
it.next('b');    //next传递的参数 会给上次yield的返回值
it.next('c');
*/

const fs = require('fs');
const util = require('util');
let reader = util.promisify(fs.readFile);
function * read(){
    let content = yield reader('./age.txt','utf8');
    let name = yield reader(content,'utf8');
    return name; 
}

//tj
function co(it){
    return new Promise((resolve,reject)=>{
        //异步迭代，需要next函数
        function next(r){
            let {value,done} = it.next(r);
            if(done){
                resolve(value);
            }else{
                Promise.resolve(value).then(data=>{
                    next(data);
                },reject);
            }
        }
        next();//递归
    })
}
co(read()).then(data=>{
    console.log(data);
});

//测试
/*function * test(){
    try {
        yield 123;
    } catch (e) {
        console.log('error:' + e);
    }
}
let it = test();
it.next();
it.throw('something is wrong');
*/


/*let it = read();
let {value} = it.next();  //这里执行的是 yield reader('./1.callback/age.txt','utf8');
value.then(data=>{
    let {value} = it.next(data);
    value.then(data=>{
        let {value,done} = it.next(data);
        console.log(value,done);
    })
})
*/


//async和await,编译出来的结果就是generator+co
async function test(){  //async函数返回的就是一个Promise

    //try {
        let res = await new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve('async');
            }, 1000);
        });
        console.log(res);//成功时输出res
  //  } catch (e) {
    //}
}
test().catch(e => {
    console.log('error:' + e);//失败时输出e
})