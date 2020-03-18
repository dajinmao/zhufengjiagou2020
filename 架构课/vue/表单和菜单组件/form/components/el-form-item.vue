<template>
    <div>
        <label v-if="label">{{label}}</label>
        <!-- el-input组件 -->
        <slot></slot>
        {{errorMessage}}
    </div>
</template>
<script>
import Schema from 'async-validator';
export default {
    name: 'el-form-item',
    inject:['elForm'],
    data(){
        return{
            errorMessage:''
        }
    },
    props:{
        label:{ //标签
            type:String,
            default:''
        },
        prop:String //当前校验哪个属性,例：prop=name
    },
    mounted (){
        // 监听子组件el-input的输入事件
        this.$on('validate',function(){
            this.validate();
        });
    },
    methods:{
        validate(){
            if(this.prop){
                //获取校验规则
                let rule = this.elForm.rules[this.prop];
                let newValue = this.elForm.model[this.prop];
                //el-form使用了async验证库
                let descriptor = {  //当前属性的描述
                    [this.prop] : rule
                };
                let schema = new Schema(descriptor);    //通过描述信息创建一个骨架
                return schema.validate({[this.prop]:newValue},(err,res)=>{
                    if(err){
                        this.errorMessage = err[0].message;
                    }else{
                        console.log(res);
                        this.errorMessage = '';
                    }
                })
            }
        }
    }
}
</script>