<template lang="">
    <div class="common-layout">
        <el-container class="lay-container">
            <CommonAside/>
            <el-container class="r-container">
                <CommonHead/>
                <el-main style="flex-basis:0">
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
  </div>
</template>
<script>

import CommonAside from '@/components/CommonAside.vue';
import CommonHead from '@/components/CommonHead.vue';

export default {
    name: 'Home',
    components: {
        CommonAside,
        CommonHead,

    }

}
</script>
<style lang="less" scoped>
.el-container {
    height: 100%;
    flex-wrap: nowrap;

}

.common-layout {
    margin: 0 auto;
        .r-container {
            flex-direction: column;

        }



    height: 100%;

    .el-container {
        height: 100%;

        .el-aside {
            height: 100%;
            background-color: #545c64;

        }

        :deep(.el-menu) {
            border-right: none;
        }

    }

    .el-main {
        padding: 20px;
    }
}
</style>