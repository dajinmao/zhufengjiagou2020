<template>
    <div>
        <slot></slot>
    </div>
    
</template>
<script>
export default {
    name: 'el-form',
    provide(){
        return {elForm:this}
    },
    props:{
        model:{  // model=ruleForm (App.vue)
            type:Object,
            default:()=>{} //保证组件间的数据是独立的  
        },
        rules:Object

    },
    methods:{
        async validate(cb){
            //调用所有的form-item的validate方法 看是否通过
            let children = this.$children;
            let arr = [];
            function findFormItem(children){
                children.forEach(child => {
                    if(child.$options.name === 'el-form-item'){
                      arr.push(child);  
                    }
                    if(child.$children){
                        findFormItem(child.$children);
                    }
                });
            }
            findFormItem(children);
            try {
                await Promise.all(arr.map(child => {
                    child.validate();
                }))
                cb(true);
            }catch {
                cb(false);
            }
            
        }
    }
}
</script>