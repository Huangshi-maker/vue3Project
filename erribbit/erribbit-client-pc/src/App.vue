<template lang="">
    <div>
        <!-- 使用A模块的state数据 -->
    <p>{{$store.state.moduleA.username}}</p>
        <!-- 使用A模块的getters数据 -->
        <p>{{$store.getters.newName}}</p>

        <!-- 使用B模块的state数据 -->
    <p>{{$store.state.moduleB.username}}</p>
            <!-- 使用B模块的getters数据 -->
        <p>{{$store.getters['moduleB/newName']}}</p>
    </div>
</template>
<script>
export default {
    name: 'App',

}
</script>
<style lang="">

</style>