<template>
    <div class="common-layout">
        <el-container>
            <el-header class="commom-header flex-float">

                <div class="flex">
                    <img class="logo" src="../../assets/logo.png" alt="">
                    <h1 class="title">商铺后台管理系统</h1>
                </div>
                <el-button type="danger" @click="loginOut">退出</el-button>
            </el-header>
            <el-container>
                <el-aside class="common-aside" width="200px">
                    <el-menu background-color="none" text-color="#fff" border="none" :router="true">
                        <el-sub-menu index="1">
                            <template #title>
                                <el-icon>
                                    <Avatar />
                                </el-icon>
                                <span>账号管理</span>
                            </template>
                            <el-menu-item-group>

                                <el-menu-item index="/user">
                                    <el-icon>
                                        <Menu />
                                    </el-icon>账号列表
                                </el-menu-item>
                            </el-menu-item-group>
                        </el-sub-menu>

                        <el-sub-menu index="2">
                            <template #title>
                                <el-icon>
                                    <Stamp />
                                </el-icon>
                                <span>角色管理</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="/roles">
                                    <el-icon>
                                        <Expand />
                                    </el-icon>角色列表
                                </el-menu-item>
                            </el-menu-item-group>
                        </el-sub-menu>

                        <el-sub-menu index="3">
                            <template #title>
                                <el-icon>
                                    <Stamp />
                                </el-icon>
                                <span>商品管理</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="/goods">
                                    <el-icon>
                                        <Expand />
                                    </el-icon>商品列表
                                </el-menu-item>
                            </el-menu-item-group>
                        </el-sub-menu>

                    </el-menu>


                    <!-- <router-link to="/index">角色列表</router-link>
                    <router-link to="/user">用户列表</router-link> -->
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import { useStore } from "vuex"
import { useRouter } from "vue-router"
export default {
    naem: "layOut",
    setup() {
        const store = useStore()
        const router = useRouter()
        const loginOut = () => {
            localStorage.removeItem("loginData")
            store.commit("setUserInfo", {})
            router.push({
                path: "/login"
            })

        }


        return {
            loginOut
        }
    }

}
</script>

<style>
.el-container {
    height: 100vh;
    overflow: hidden;
}

.commom-header {
    background-color: rgb(48, 55, 65);
}

.common-aside {
    background-color: rgb(48, 55, 65);
    
}

.el-side{
    border-right:1px solid #dcdfe6;
    overflow-x: hidden;
}

.logo {
    width: 80px;
    height: 80px;
}

.title {
    color: #fff;
}

.el-main {
    background: #efefef;
}

</style>