//generator 生成器，生成(返回)的是迭代器
//普通函数执行时无法停止，generator可以暂停
function * read(){
    yield 1;// 产出。遇到yield就停止执行 
    yield 2
    yield 3;
    yield 4;
}
let it = read(); //it 是迭代器，包含一个next方法
// console.log(it); //Object [Generator] {}
console.log(it.next());  //  {value: 1,done:false}
console.log(it.next());  //  {value: 2,done:false}
console.log(it.next());  //  {value: 3,done:false}
console.log(it.next());  //  {value: 4,done:false} 
console.log(it.next());  //  {value:  undefined,done:true} 函数执行完成