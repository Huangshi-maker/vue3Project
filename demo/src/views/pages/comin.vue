<template lang="">
    <div style="width: 100%;height:100%">
        <el-table :data="filterTableData" style="height:90%" >
    <el-table-column label="月份" prop="month"  style="width:200px;text-align:center; "/>
    <el-table-column label="入境人数" prop="entrynums" />
    <el-table-column label="出境人数" prop="exitnums" />

    <el-table-column align="center">
      <template #header>
        <el-input v-model="search" size="small" placeholder="输入开始模糊搜索" width="200px"/>
      </template>
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button
        >
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
    </div>
</template>
<script>
import { ref, computed, } from 'vue';
import { getcomeinData } from '@/until/api';

export default {
    setup() {


        const search = ref('')
        const tableData = ref([])


        const handleEdit = (index, row) => {
            console.log(index, row);
        }
        const handleDelete = (scope) => {
            console.log(scope);
        }
        const filterTableData = computed(() =>
            tableData.value.filter(
                (data) =>
                    !search.value ||
                    data.name.toLowerCase().includes(search.value.toLowerCase())
            )
        )
        getcomeinData().then(res => {
            if (res.meta.status === 200) {
                ElMessage({
                    message: '数据获取成功',
                    type: 'success',
                })
                tableData.value = res.data
            }
            console.log(res);
        })



        return {
            tableData,
            search,
            handleEdit,
            handleDelete,
            filterTableData

        }
    }

}
</script>
<style lang="">

</style>