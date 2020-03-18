<template>
    <div v-if="isShow">
        这是子组件的弹框
        <div><slot name="header"></slot></div>
        ---------
        <div><slot name="footer" :isShow="isShow" a="a" b="b"></slot></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isShow: true
        }
    },
    mounted(){
        //（'监听事件'，[fn]）
        // this.$bus.$on('监听事件',function(params){
        //     console.log(params,'my-dialog');
        // });
        // this.$bus.$on('listen', arg=>{
        //     console.log(arg,'my-dialog');
        // });
        this.$nextTick(()=>{
            this.$bus.$emit('父','触发父');
        });
    },
    methods: {
        change() {
            this.isShow = !this.isShow;
        }
    }
}
</script>