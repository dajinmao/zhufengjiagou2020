let obj = {
    name: {
        name: 'byj'
    },
    arr: ['a','b','c']
}
//兼容性差，可以代理13种方法
//definePProperty:只能特定的属性进行拦截
let handler = {
    //target就是原对象，key就是当前取的哪个值
    get(target,key) {
        // console.log('收集依赖');
        if(typeof target[key] === 'object' && target[key] !== null){
            //递归代理，只有取到对应值时才会进行代理
            return new Proxy(target[key],handler);
        }
        //Reflect 反射：
        return Reflect.get(target,key);//等同于与下面写法
        // return target[key]
    },
    set(target,key,value){
        //判断当前是新增还是修改
        let oldValue = target[key];
        console.log(key,oldValue,value);
        if(!oldValue){
            console.log('add');
        }else if(oldValue !== value){
            console.log('update');
        }
        return Reflect.set(target,key,value);
        // return target[key] = value; //设置时如果不成功不会报错，对象不可配置
    }
}
let proxy = new Proxy(obj,handler)
//递归代理之前
// proxy.name = '123';   //触发更新，调用了set()
// console.log(proxy.name); //触发更新、收集依赖、123

//递归代理之后,懒代理
// proxy.name.name = '2345';
// console.log(proxy.name.name); // 2345
//数组的处理
proxy.arr.push(123);