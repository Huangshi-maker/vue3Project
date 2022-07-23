<template>



  <!-- //展示路由对应的组件 -->
  <router-view />
</template>

<style>
/*flex布局类名*/
.flex-float {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flex {
  display: flex;
  align-items: center;
}

* {
  margin: 0;
  padding: 0;
}


.page-content {
  box-shadow: boder-box;
  display: block;
  widows: 100%;
  padding: 20px;
  background: #fff;
  margin-top: 30px;
}

.pageNums {
  display: flex;
  justify-content: center;
  padding: 25px 30px;
  margin-bottom: 25px;
}
</style>
