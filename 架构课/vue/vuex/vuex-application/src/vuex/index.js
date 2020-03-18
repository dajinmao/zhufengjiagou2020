let Vue;
let forEach = (obj,callback) => {
    Object.keys(obj).forEach(key=>{
        callback(key,obj[key]);
    })
}

// forEach({a:1,b:2},(key,value) => {
//     console.log(key,value);
// });
class Store {   //用户获取的是这个Store类的实例
    constructor(options){
        //options：用户new 实例时传入的所有属性
        //console.log(options);// state,getters,mutations,actions...
        this.vm = new Vue({  //创建vue实例，保证装填更新可以刷新视图
            data:{ // 默认这个状态会被使用Object.defineProperty重新定义
                state:options.state
            }
        });
        let getters = options.getters;  //获取用户传入的getters
        this.getters = {};
        forEach(getters,(getterName,value) => {
            Object.defineProperty(this.getters, getterName, {
                get: () => {
                    return value(this.state);
                }
            })
        })
    }
    get state(){    //获取实例上的state属性就会执行此方法
        return this.vm.state;
    }
}
//_Vue : 官方api
const install = (_Vue) =>{  // _Vue:vue 的构造函数
    Vue = _Vue;
    //放到Vue的原型上是不对的，因为默认会给所有的实例增加
    // 只从当前的根实例开始，所有根实例的子组件才有$store方法

    //组件的创建过程，先父后子，先创建new Vue根组件再创建App组件
    Vue.mixin({//抽离公共逻辑,放一些方法
        beforeCreate(){
            //把父组件的store属性放到每个组件的实力上
            if(this.$options.store){ //根实例
                this.$store = this.$options.store;
            }else{//非根实例
                this.$store = this.$parent && this.$parent.$store;
            }
        }
    });
}



export default {
    Store,
    install
}