<template>
    <div>

        <!-- 面包屑 -->
        <el-breadcrumb>
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>角色列表</el-breadcrumb-item>
        </el-breadcrumb>


        <div class="page-content">

            <div class="flex">
                <el-button type="primary" @click="addRolse">新建角色</el-button>
            </div>
            <el-table :data="rolesList" style="width: 100%">


                <el-table-column prop="roleName" label="角色名" />
                <el-table-column prop="roleDesc" label="角色描述" />
                <el-table-column label="操作">
                    <template #default="scop">
                        <el-button type="primary" @click="editRow(scop.row)">编辑</el-button>
                        <el-button type="danger" @click="delRow(scop.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>

        {{ formdata.formRoleName }}
        <div class="dialog">
            <el-dialog v-model="dialogFormVisible" title="新建角色">
                <el-form :model="formdata" :rules="rules" ref="rolesForm">
                    <el-form-item label="角色名" prop="roleName">
                        <el-input v-model="formdata.roleName" placeholder="请输入角色名" />
                    </el-form-item>
                    <el-form-item label="角色描述" prop="roleDesc">
                        <el-input type="text" v-model="formdata.roleDesc" placeholder="请输入角色描述" />
                    </el-form-item>
                </el-form>
                <template #footer>
                    <div class="flex">
                        <el-button type="" @click="btn_cancel">取消</el-button>
                        <el-button type="primary" @click="submitRolesForm2(rolesForm)">确定</el-button>
                    </div>
                </template>
            </el-dialog>
        </div>
    </div>
</template>


<script>
import { reactive, toRefs, ref } from 'vue'
import { rolsListApi, rolsAddApi,rolsEdApi,delrolsApi } from "../../util/request.js"

export default {
    name: "roles",
    setup() {
        const data = reactive({

            rolesList: [],
            formdata: {
                id:"",
                roleName: "",
                roleDesc: ""
            },
            dialogFormVisible: false,



            rules:{
                roleName:{
                    required: true,
                    message: '此项为必填项',                
                    trigger: 'blur'                      
                }
            }


        })



        const getList = () => {
            rolsListApi().then(res => {
                data.rolesList = res.data
            })
        }
        const addRolse = () => {
            data.dialogFormVisible = true
        }

        const submitRolesForm = (formEl) => {
            formEl.validate(res => {
                if (!res) {

                }
                rolsAddApi(data.formdata).then(res => {
                    if (res.data) {
                        data.dialogFormVisible = false
                        data.formdata = {
                            roleName: "",
                            roleDesc: ""
                        }
                        getList()
                    }
                })
            })
            
        }

        const editRow = row => {
            data.dialogFormVisible = true
            data.formdata.roleName = row.roleName,
            data.formdata.roleDesc = row.roleDesc
            data.formdata.id = row.id
        }
         const submitRolesForm2 = (formEl)=> {
            formEl.validate(res => {
                if (!res) {

                }
                rolsEdApi(data.formdata).then(res => {
                    if (res.data) {
                        data.dialogFormVisible = false
                        data.formdata = {
                            roleName: "",
                            roleDesc: ""
                        }
                        getList()
                    }
                })
            })
            
        }

        const delRow = (row) => {
            delrolsApi(row).then(res=>{
                if(!res.data){
                        getList()
                    }
            })
        }
        const btn_cancel = () => {
            data.dialogFormVisible = false;
        }

        const rolesForm = ref()

        getList()
        return {
            ...toRefs(data),
            getList,
            editRow,
            delRow,
            rolesForm,
            addRolse,
            submitRolesForm,
            submitRolesForm2,
            btn_cancel,

        }
    }
}
</script>