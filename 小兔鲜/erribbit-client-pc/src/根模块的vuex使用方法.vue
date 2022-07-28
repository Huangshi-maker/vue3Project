<template lang="">
  <div>
    App
    <!-- 使用根模块的state数据 -->
    <p>{{$store.state.username}}</p>
    <!-- 使用根模块gettes的数据 -->
    <p>{{$store.getters.newname}}</p>
    <button type="primary" size="default" @click="mutationsFn">clickme</button>

  </div>

</template>
<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup () {
    // 使用vuex仓库
    const store = useStore()
    // 使用根模块state数据
    console.log(store.state.username)
    // 使用根模块的getters的数据
    console.log(store.getters.newname)
    // 提交根模块mutations函数
    const mutationsFn = () => {
      // store.commit('updateName')

      // 调用根模块actions函数
      store.dispatch('updateName')
    }

    return {
      mutationsFn
    }
  }

}
</script>
