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
        <el-button size="small" @click="handleEdit(scope.row)"
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

  <el-dialog v-model="dialogFormVisible" title="编辑" >
    <el-form class="dialog" :model="form" ref="userform" >
      <el-form-item label="月份" prop="month" label-width="67px">
        <el-input v-model="form.month" autocomplete="off" disabled="true" />
      </el-form-item>
      <el-form-item label="入境人数" prop="entrynums">
        <el-input v-model="form.entrynums" autocomplete="off" />
      </el-form-item>
      <el-form-item label="出境人数" prop="exitnums" >
        <el-input v-model="form.exitnums" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确认</el-button
        >
      </span>
    </template>
  </el-dialog>



    </div>
</template>
<script>
import { ref, computed, } from 'vue';
import { getcomeinData } from '@/until/api';

export default {
  setup() {

    const userform = ref(null)
    const search = ref('')
    const tableData = ref([])
    const form = ref({
      month: '',
      entrynums: '',
      exitnums: ''



    })
    const dialogFormVisible = ref(false)


    const handleEdit = (row) => {
      dialogFormVisible.value = true
      console.log(row.month);
      form.value.month = row.month
      form.value.entrynums = row.entrynums
      form.value.exitnums = row.exitnums
    }


    const handleDelete = (scope) => {
      console.log(scope);
    }
    const filterTableData = computed(() =>
      tableData.value.filter(
        (data) =>
          !search.value ||
          data.month.toLowerCase().includes(search.value.toLowerCase())
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
      filterTableData,
      dialogFormVisible,
      form,
      userform

    }
  }

}
</script>
<style lang="less" scoped>
/deep/ .el-dialog {
  width: 30%;

  .el-dialog__body {
    display: flex;
    justify-content: center;


    .dialog {
      width: 50%;
    }
  }


}
</style>