<template>
  <div>
    <h1> Hello World</h1>
    <p v-text="name"></p>
    <p>{{ name }}</p>
    <p v-html="info"></p>
    <p v-bind:data="data">我有属性data</p>
    <p class="text" :class="{ 'red': isred }">我是红色的</p>
    <ul>
      <li v-for="(item, index) in userlsit " :key="index">
        学生姓名：{{ item.username }}
        学生年龄：{{ item.userage }}
      </li>
    </ul>
  </div>
</template>

<script>

import { reactive, toRefs } from "vue"

export default {
  name: 'HomeView',
  setup() {
    const data = reactive({
      name: "小红",
      age: 20,
      info: "<i>我是斜体字</i>",
      data: 2,
      isred: true,
      userlsit: [{
        username: "小明",
        userage: 10
      },
      {
        username: "小明",
        userage: 10
      },
      {
        username: "小明",
        userage: 10
      },
      {
        username: "小明",
        userage: 10
      },
      {
        username: "小明",
        userage: 10
      },]
    })


    return {
      ...toRefs(data)
    }
  }
}
</script>

<style>
.red {
  color: red;
}
</style>