<template>
    <div id="app">
        <button @click="change">按钮</button>
        <myDialog ref="dialog" >
            <!-- 老版本写法 -->
            <!-- 插槽中的数据默认使用当前组件的父级数据 -->
            <div slot="header">header   {{msg}}</div>
            <!-- 新版本写法 -->    
            <template v-slot:footer="{a,b,isShow}">footer {{a}}\{{b}}\{{isShow}}</template>

        </myDialog>
    </div>
</template>
<script>
import myDialog from './components/my-dialog.vue';
export default {
    data(){
        return{
            msg:'HI'
        }
    },
    components:{
        myDialog
    },
    mounted() {
        //发布子组件中的事件
        // this.$bus.$emit('监听事件','App.vue');
        // //触发根实例上的事件
        // this.$bus.$on('listen', arg=>{
        //     console.log(arg,'App.vue');
        // });
        //在父组件中监听事件，子组件中不会触发到该事件,因为父组件还没挂载
        this.$bus.$on('父',arg=>{
            console.log(arg);
        })



    },
    methods:{
        change(){
            //可以获取当前组件中的任何属性，但不要通过这样方式去改变组件的属性
            //ref 的用法，在普通元素上可以获取dom元素
            //在v-for里面，获取的是一组dom/组件实例
            //在组件上使用，获取的是当前组件的实例
            this.$refs.dialog.change();//调用了my-dislog组件中的方法
        }
    }
}
</script>