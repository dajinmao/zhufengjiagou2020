import Vue from 'vue';
import App from './App';

Vue.prototype.$bus = new Vue();//每个Vue实例都具备这些 $on,$emit,$off
let vm = new Vue({
    el: '#app',
    render: h=>h(App)
});
vm.$bus.$emit('listen','根实例');