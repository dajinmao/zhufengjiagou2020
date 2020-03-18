function isType(type){
    return function(content){
        return Object.prototype.toString.call(content) === `[object ${type}]`;
    }
}
let isString = isType('String');
console.log(isString('hello')); //true
let isNumber = isType('Number');
console.log(isNumber(1234)); //true