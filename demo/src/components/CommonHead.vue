<template lang="">
    <el-header >
        <p>管理系统</p>
        <div class="userInfo">
            <span>欢迎你,黄诗</span>
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

export default {
    setup() {
        const router = useRouter()
        const handleLogout = () => {
            router.push('/login')
        }
        const handleToPersonel = () => {
            router.push('/usercenter')
        }

        return { handleLogout, handleToPersonel }
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