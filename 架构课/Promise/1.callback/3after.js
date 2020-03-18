let fs = require('fs');
//异步的解决方案最早是基于回调函数的，不能用try catch 来解决异常
//node中的回调函数的第一个参数，永远是error。error first
//读取文件是异步的，
function after(times,callback){
    let renderObj = {};
    return function(key,value){ //指 out
        renderObj[key] = value;
        if(--times == 0){
            callback(renderObj);
        }
        console.log(renderObj);
    }
}

let out = after(2,function(renderObj){
    console.log('out');
})
fs.readFile('./age.txt','utf8',function(error,data){
    console.log(data);
    out('age',data);
});
fs.readFile('./name.txt','utf8',function(error,data){
    console.log(data);
    out('name',data);
})