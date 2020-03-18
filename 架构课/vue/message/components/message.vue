<template>
<transition>
    <div v-show="visible">{{message}} {{type}} </div>
</transition>
</template>
<script>
export default {
    data() {
        return {
            message: '', //在初始化组件时会传入message 和type
            type: '',
            visible: false,
            duration:5000
        }
    },
    mounted() {
        if(this.duration>0){
            this.timer = setTimeout(() => {
                this.$destroy(); //销毁当前实例
                this.$el.parentNode.removeChild(this.$el); //销毁dom元素
            }, this.duration);
        }
    }
}
</script>
<style scoped>
.v-enter{
    opacity: 0;
}
.v-enter-active{
    transition: 1s linear;
}
.v-enter-to{
    opacity:1;
}

</style>>