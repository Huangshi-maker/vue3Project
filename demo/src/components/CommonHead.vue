<template lang="">
    <el-header >
        <p>管理系统</p>
        <div class="userInfo">
            <span v-if="loginuser.name">欢迎您，{{loginuser.name}}</span>
            <el-dropdown>
    <span class="el-dropdown-link">
      <img src="../assets/images/user.png" alt="">

    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item path="/usercenter" @click="handleToPersonel">个人中心</el-dropdown-item>
        <el-dropdown-item path="/login" @click="handleLogout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>

        </div>
</el-header>
</template>L
<script >
import { useRouter } from 'vue-router';
import { ref } from 'vue'
import { useStore } from 'vuex';

export default {
    setup() {
        const router = useRouter()
        const handleLogout = () => {
            localStorage.removeItem("loginData")
            store.commit("setUserinfo", {})
            router.push('/login')
        }
        const handleToPersonel = () => {

            router.push('/usercenter')
        }
        const store = useStore()

        const loginuser = ref({
            username: '',
            password: '',
            name: '',

        })

        loginuser.value = store.state.userInfo

        return { handleLogout, handleToPersonel, loginuser }
    }



}
</script>
<style lang="less" scoped>
.el-header {
    width: 100%;
    height: 60px;
    padding-right: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #272822;
    color: #fff;



    p {
        font-size: 20px;
    }

    .userInfo {
        display: flex;
        align-items: center;

        span {
            font-size: 20px;
            margin-right: 10px;

        }

        img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
        }
    }

}
</style>