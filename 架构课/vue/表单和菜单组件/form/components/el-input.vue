<template>
    <input type="text" :value="value" @input="handleInput" />    
</template>
<script>
export default {
    name: 'el-input',
    props: {
        value:String
    },
    methods: {
        handleInput(e){
            this.$emit('input',e.target.value);
            let parent = this.$parent; //不一定是el-form-item
            while(parent){
                let name = parent.$options.name;
                if(name === 'el-form-item'){
                    break;
                }else{
                    parent = parent.$parent;
                }
            
            }
            if(parent){
                parent.$emit('validate'); //通知el-form-item触发validate事件
                
            }
        }
    }
}
</script>