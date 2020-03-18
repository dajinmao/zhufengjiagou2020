function say(who){
    console.log('后洗脸');
}
Function.prototype.before = function(callback){
    return (...args) => { //箭头函数没有this指向，会向上级作用于查找
        callback();//先调用谁就先执行谁
        this(...args); //即 say().谁调用这个方法，this就指向谁，这里this指的是 say
    }
}
let newSay = say.before(function(){
    console.log('先刷牙');
});
newSay('我');