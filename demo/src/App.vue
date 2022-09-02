<template>
  <router-view></router-view>

</template>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li {
  list-style: none;
}

html,
body {
  height: 100%;
  width: 100%;
  min-width: 1920px;

}

@media (max-width: 1919px) and (min-width: 768px) {
  html {
    zoom: 80%;
  }
}

#app {
  height: 100%;
  margin: 0 auto;
}
</style>
