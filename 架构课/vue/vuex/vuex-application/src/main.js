import Vue from 'vue'
import App from './App.vue'
import store from './store.js' //引入了一个store文件，默认导入，默认导出

Vue.config.productionTip = false

new Vue({
  name:'root',
  store,  //在初始化时，注册了一个store属性,内部会将这个属性放到每个组件的$store 上
  render: h => h(App)
}).$mount('#app')
