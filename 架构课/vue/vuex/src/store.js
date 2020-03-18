import Vue from 'vue'
import Vuex from './vuex'

Vue.use(Vuex) //默认会执行当前插件的install方法

export default new Vuex.Store({   //new Vuex.Store({}) :通过vuex中的一个属性Store  创建一个store的实例  
  state: {    //单一数据源
    age:10
  },
  getters:{   //相当于计算属性
    myAge(state){
      return state.age + 20;
    }
  },
  //更新状态的唯一方式就是Mutation
  mutations: {  //修改state中状态的方法，在严格模式下只能同步更改
    //payload 载荷，承载的数据
    syncChange(state,payload){
      state.age+=payload;
    }
  },
  actions: {  //异步更改状态
    asyncChange({commit},payload){
      setTimeout(() => {
        //actions提交的是mutations
        commit('syncChange',payload)
      }, 1000);
    }
  },
  modules: {
  }
})
