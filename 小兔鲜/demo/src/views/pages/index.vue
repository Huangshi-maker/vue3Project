<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <ul class="headernav flex-float">
                    <li>
                        <router-link class="nav text" to="/">请先登录</router-link>
                    </li>
                    <li>
                        <router-link class="nav text" to="/">免费注册</router-link>
                    </li>
                    <li>
                        <router-link class="nav text" to="/">我的订单</router-link>
                    </li>
                    <li>
                        <router-link class="nav text" to="/">会员中心</router-link>
                    </li>
                    <li>
                        <router-link class="nav text" to="/">帮助中心</router-link>
                    </li>
                    <li>
                        <router-link class="nav text" to="/about">关于我们</router-link>
                    </li>
                    <li>
                        <router-link class="nav icon flex" to="/">
                            <el-icon>
                                <Iphone />
                            </el-icon>手机版
                        </router-link>
                    </li>

                </ul>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>


<script>


import { reactive, toRefs } from "vue"


export default {
    name: "index",
    setup() {
        const data = reactive({

        })






        return {
            ...toRefs(data)
        }
    }
}


</script>



<style scoped>
.el-header {
    height: 50px;
    background-color: rgb(177, 177, 231);
    position: relative;
}

.el-main {
    height: 100vh;
    background-color: aliceblue;
}

.el-footer {
    height: 100px;
    background-color: rgb(177, 177, 231);
}

.headernav {
    position: absolute;
    right: 50px;
}

.headernav li {
    padding-top: 10px;
    list-style: none;
    cursor: pointer;
}

.nav:hover {
    color: greenyellow;
}

.nav {
    padding: 0px 20px;
    list-style: none;
    text-decoration: none;
    color: aliceblue;
    font-size: 14px;
}

.nav.text {
    border-right: 1px solid rgb(117, 115, 115);
}
</style>