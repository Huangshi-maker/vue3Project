<template lang="">
    <div style="width: 100%;height:100%">
      <el-button type="primary" @click="dialogstate = 1,dialogFormVisible=true,form={}">新增</el-button>
        <el-table :data="filterTableData" style="height:90%" >
    <el-table-column label="月份" prop="month"  style="width:200px;text-align:center; "/>
    <el-table-column label="入境人数" prop="entrynums" />
    <el-table-column label="出境人数" prop="exitnums" />

    <el-table-column align="center">
      <template #header>
        <el-input v-model="search" size="small" placeholder="输入开始模糊搜索" width="200"/>
      </template>
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.row)"
          >编辑</el-button
        >
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>

  <el-dialog v-model="dialogFormVisible" :title="dialogstate == 1 ? '新增':'编辑'" >
    <el-form class="dialog" :model="form" ref="userform" >
      <el-form-item label="月份" prop="month" label-width="67px">
        <el-input v-model="form.month" autocomplete="off" :disabled="dialogstate == 0 ? true : false" />
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
        <el-button type="primary" @click="handleclickCominSubmit"
          >确认</el-button
        >
      </span>
    </template>
  </el-dialog>



    </div>
</template>
<script>
import { ref, computed, } from 'vue';
import { getcomeinData, editComminData, deleteComminData, addComminData } from '@/until/api';

export default {
  setup() {

    const userform = ref(null)
    const search = ref('')
    const tableData = ref([])
    const form = ref({
      id: null,
      month: '',
      entrynums: '',
      exitnums: ''
    })
    const dialogstate = ref(1)   // 0编辑，1新增
    const dialogFormVisible = ref(false)
    

    const handleEdit = (row) => {
      dialogstate.value = 0
      dialogFormVisible.value = true
      console.log(row.month);
      form.value.id = row.id
      form.value.month = row.month
      form.value.entrynums = row.entrynums
      form.value.exitnums = row.exitnums
    }


    const handleDelete = (row) => {
      deleteComminData(row).then(res => {
        if (res.code == 200) {
          ElMessage({
            message: res.message,
            type: 'success',
          })
          getdata()
        }


      })
    }
    const filterTableData = computed(() =>
      tableData.value.filter(
        (data) =>
          !search.value ||
          data.month.toLowerCase().includes(search.value.toLowerCase())
      )
    )

    const getdata = () => {

      getcomeinData().then(res => {
        if (res.meta.status === 200) {
          ElMessage({
            message: '数据获取成功',
            type: 'success',
          })
          tableData.value = res.data
        }

      })
    }

    const handleclickCominSubmit = () => {

      if (dialogstate.value == 0) {
        editComminData(form).then(res => {
          if (res.code == 200) {
            getdata()
          }
        })
      }
      if (dialogstate.value == 1) {
        addComminData(form).then(res => {
          if (res.code == 200) {
            getdata()
          }
        })
      }

      dialogFormVisible.value = false
    }



    getdata()


    return {
      tableData,
      search,
      handleEdit,
      handleDelete,
      filterTableData,
      dialogFormVisible,
      form,
      userform,
      handleclickCominSubmit,
      getcomeinData,
      dialogstate

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