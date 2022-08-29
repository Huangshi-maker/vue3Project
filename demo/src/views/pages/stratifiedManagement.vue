<template lang="">
    <div style="width: 100%;height:100%">
        <el-table :data="filterTableData" style="height:90%" >
    <el-table-column label="层级" prop="level"  style="width:200px;text-align:center; "/>
    <el-table-column label="人数" prop="nums" />

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
      <el-form-item label="层级" prop="level" >
        <el-input v-model="form.level" autocomplete="off" disabled="true"/>
      </el-form-item>
      <el-form-item label="人数" prop="nums">
        <el-input v-model="form.nums" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="handleclickEdit"
          >确认</el-button
        >
      </span>
    </template>
  </el-dialog>



    </div>
</template>
<script>
import { ref, computed, } from 'vue';
import { getstratifiedManagementData, editManData } from '@/until/api';

export default {
    setup() {

        const userform = ref(null)
        const search = ref('')
        const tableData = ref([])
        const form = ref({
            id: null,
            level: '',
            nums: '',
        })
        const dialogFormVisible = ref(false)


        const handleEdit = (row) => {
            dialogFormVisible.value = true
            form.value.id = row.id
            form.value.level = row.level
            form.value.nums = row.nums
        }


        const handleDelete = (scope) => {
            console.log(scope);
        }
        const filterTableData = computed(() =>
            tableData.value.filter(
                (data) =>
                    !search.value ||
                    data.level.toLowerCase().includes(search.value.toLowerCase())
            )
        )
        const getdata = () => {

            getstratifiedManagementData().then(res => {
                console.log(res);
                if (res.meta.status === 200) {
                    ElMessage({
                        message: '数据获取成功',
                        type: 'success',
                    })
                    tableData.value = res.data
                }



            })
        }
        const handleclickEdit = () => {
            editManData(form).then(res => {

                if (res.code == 200) {
                    getdata()

                }
            })

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
            handleclickEdit

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