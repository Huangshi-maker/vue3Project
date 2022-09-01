<template lang="">
    <div class="loginContainer">
      <div class="box">
        <el-form
    ref="ruleFormRef"
    :model="loginForm"
    status-icon
    class="demo-ruleForm login_box "
    :rules="rules"

  >
    <el-form-item label="用户名" prop="username">
      <el-input v-model="loginForm.username"  autocomplete="off" />
    </el-form-item>
    <el-form-item label="密&nbsp;&nbsp;&nbsp;&nbsp;码" prop="password">
      <el-input
        v-model="loginForm.password"
        type="password"
        autocomplete="off"
      />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="handleLogin(ruleFormRef)"
        >登录</el-button
      >
      <el-button @click="handleregister">注册</el-button>
      <el-button @click="resetForm(ruleFormRef)">重置</el-button>
    </el-form-item>
  </el-form>

</div>
    </div>
</template>
<script>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { loginApi, addUser } from '../until/api.js'
import store from '@/store/index.js';

export default {


  setup() {
    const loginForm = ref({
      username: '',
      password: '',
    })
    const router = useRouter()
    const ruleFormRef = ref(null)
    const resetForm = (formEl) => {
      if (!formEl)
        return
      formEl.resetFields()
    }
    const handleLogin = () => {
      ruleFormRef.value.validate((valid) => {
        if (valid) {
          loginApi(loginForm.value).then((res) => {
            if (res.meta.status == 200) {
              store.commit('setUserinfo', res.data)
              localStorage.setItem("loginData", JSON.stringify(res.data))
              router.push('/index')
            }
            else {
              ElMessage({
                message: res.meta.msg,
                type: 'error',
              })

            }
          })
        }
        else{
          ElMessage({
            message: '输入不符合要求，请重新输入',
            type: 'error',
          })
          return false;
        }
      })


    }
    const handleregister = () => {
      ruleFormRef.value.validate((valid) => {
        if (valid) {
          addUser(loginForm.value).then(res => {
            if (res.code == 200) {
              ElMessage({
                message: res.message,
                type: 'success',
              })
            }
            if (res.code == 400) {
              ElMessage({
                message: res.message,
                type: 'error',
              })
            }
          })
        } else {
          ElMessage({
            message: '输入不符合要求，请重新输入',
            type: 'error',
          })
          return false;
        }
      });
    }









    const rules = reactive({
      username: [
        { required: true, message: '用户名不为空', trigger: 'change' },
        { min: 5, max: 10, message: '长度为5-10个字符串', trigger: 'change' },
      ],
      password: [
        {
          required: true,
          message: '请输入密码',
          trigger: 'change',
        },
      ],
    })

    return {
      loginForm,
      resetForm,
      ruleFormRef,
      handleLogin,
      handleregister,
      rules

    }
  }

}
</script>
<style lang="less" scoped>
.loginContainer {

  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .box {
    width: 20%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    position: relative;
    overflow: hidden;



    .login_box,
    .regist_box {
      position: absolute;
    }

    .el-form {
      width: 100%;
      padding: 40px 30px;
      background-color: #c6e2ff;

      :deep(.el-form-item__content) {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>