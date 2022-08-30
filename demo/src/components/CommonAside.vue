<template lang="">
<el-aside width="200px">
    <div>
        <el-menu
        :router="true"
        class="el-menu-vertical-demo"
        :default-active="route.path"
        style="background-color:#545c64;"
      >

      <el-menu-item index="/index" >
          <el-icon><setting /></el-icon>
          <span>首页</span>
        </el-menu-item>

        <el-menu-item index="2" >
          <el-icon><setting /></el-icon>
          <span>操作日志</span>
        </el-menu-item>

        <el-sub-menu index="/">
          <template #title>
            <el-icon><location /></el-icon>
            <span>数据管理</span>
          </template>

            <el-menu-item index="/comin"  >入境管理</el-menu-item>


            <el-menu-item index="/stratifiedManagement" >分层管理</el-menu-item>

        </el-sub-menu>





      </el-menu>
    </div>
    </el-aside>
</template>
<script>
import { useRoute, useRouter } from 'vue-router';
export default {
  setup() {

    const router = useRouter()
    const route = useRoute()
    console.log(route.path);



    const handle = () => {


    }
    return {
      handle,
      router,
      route

    }
  }


}
</script>
<style lang="less" scoped>
.el-menu {
  .el-menu-item:hover {
    background-color: skyblue;
  }

  .el-sub-menu {
    background-color: #545c64;


    .el-menu-item {
      background-color: #545c64;

    }


    :deep(.el-sub-menu__title:hover) {
      background-color: skyblue;
    }
  }

}
</style>