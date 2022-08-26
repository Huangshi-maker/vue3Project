<template lang="">
    <div class="loginContainer">
        <el-form
    ref="ruleFormRef"
    :model="loginForm"
    status-icon
    label-width="120px"
    class="demo-ruleForm"
  >
    <el-form-item label="用户名" prop="username">
      <el-input v-model="loginForm.username"  autocomplete="off" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="loginForm.password"
        type="password"
        autocomplete="off"
      />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="handleLogin(ruleFormRef)"
        >登陆</el-button
      >
      <el-button @click="resetForm(ruleFormRef)">重置</el-button>
    </el-form-item>
  </el-form>

    </div>
</template>
<script>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { loginApi } from '../until/api.js'
export default {


  setup() {
    const loginForm = ref({
      username: 'admin',
      password: '123456'
    })
    const router = useRouter()
    const ruleFormRef = ref(null)
    const resetForm = (formEl) => {
      if (!formEl)
        return
      formEl.resetFields()
    }
    const handleLogin = (ruleFormRef) => {
      loginApi(loginForm).then((data) => {
        console.log(data);
        if (data) {
          router.push('/index')

        }
        else {

        }
      })

    }

    return {
      loginForm,
      resetForm,
      ruleFormRef,
      handleLogin
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

  .el-form {
    padding: 30px;
    border: 1px solid red;
    display: flex;
    justify-content: center;
    flex-direction: column;

  }
}
</style>