<template>
    <div>
        <el-form
         :model="ruleForm"
         :rules="rules"
         ref="ruleForm"
        >
        <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password"></el-input>
            <!-- 与下面写法等价 -->
            <!-- <el-input :value="ruleForm.password" @input="v => ruleForm.password = v" ></el-input> -->
        </el-form-item>
        <el-form-item>
            <button @click="submitForm()">提交表单</button>
        </el-form-item>
        </el-form>
    </div>
</template>
<script>
import elInput from './components/el-input.vue';
import elForm from './components/el-form.vue';
import elFormItem from './components/el-form-item.vue';

export default {
    data(){
        return{
            ruleForm:{
                username:'',
                password:''
            },
            rules:{
                username:[
                    {required:true,message:'请输入用户名'},
                    {min:3,max:10,message:'长度在3-10个字符'}
                ],
                password:[
                    {required:true,message:'请输入密码'},
                    {min:3,max:10,message:'长度在3-10个字符'}
                ]
            }

        };
    },
    components:{
        elInput,
        elForm,
        elFormItem
    },
    methods:{
        submitForm(){
            this.$refs['ruleForm'].validate(valid => {
                console.log(valid);
                if(valid) {
                    alert('成功');
                } else {
                    alert('失败');
                    return false;
                }
            })
        }
    }
}
</script>