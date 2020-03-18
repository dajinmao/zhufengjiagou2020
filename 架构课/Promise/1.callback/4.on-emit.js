let fs = require('fs');
//订阅：on   发布:emit
//订阅一件事就是当此事发生时，触发对应的函数
let e = {
    _obj:{},
    _callback:[],
    on(callback){ //订阅，就是将回调函数放到数组中
        this._callback.push(callback);
    },
    emit(key,value){
        this._obj[key] = value;
        this._callback.forEach(fn=>{ //让订阅的数组中的方法依次执行、
            fn(this._obj);
        })
    }
}
//只要发布了就应该让订阅的事情执行
e.on(function(obj){  //每发布一次都会触发此函数
    console.log('get one');
});
e.on(function(obj){  //每发布一次都会触发此函数
    console.log('get one');
    if(Object.keys(obj).length === 2){
        console.log(obj);
    }
})
fs.readFile('./age.txt','utf8',function(error,data){
    e.emit('age',data);
});
fs.readFile('./name.txt','utf8',function(error,data){
    e.emit('name',data);
})

//发布订阅没有关联。