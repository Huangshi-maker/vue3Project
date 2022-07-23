<template>

    <div>
        <el-breadcrumb>
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>账号列表</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="page-content">
            <div class="flex">
                <div class="input-box">
                    <el-input v-model="searchParams.query" placeholder="输入关键字" class="input-with-select">
                        <template #append>
                            <el-button @click="searchList">
                                <el-icon>
                                    <Search />
                                </el-icon>
                            </el-button>
                        </template>
                    </el-input>
                </div>
                <el-button type="primary" @click="addUser">新建用户</el-button>
            </div>

            <el-table :data="userList" style="width: 100%">
                <el-table-column prop="username" label="姓名" />
                <el-table-column prop="email" label="邮箱" width="180" />
                <el-table-column prop="mobile" label="电话" />
                <el-table-column prop="role_name" label="角色" />
                <el-table-column prop="mg_state" label="状态">
                    <template #default="scope">
                        <el-switch v-model="scope.row.mg_state" @change="switchChange(scope.row)" />
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template #default="scope">
                        <el-button type="primary" @click="editRow(scope.row)">编辑</el-button>
                        <el-button type="danger" @click="delRow(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>


        <!-- 新增弹窗 -->
        <div class="dialog">
            <el-dialog v-model="dialogFormVisible" title="新建用户">
                <el-form :model="formdata" :rules="rules" ref="userForm">
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="formdata.username" placeholder="请输入用户名称" />
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="formdata.password" placeholder="请输入密码" />
                    </el-form-item>
                    <el-form-item label="邮箱" prop="email">
                        <el-input v-model="formdata.email" placeholder="请输入邮箱" />
                    </el-form-item>
                    <el-form-item label="手机号" prop="mobile">
                        <el-input v-model="formdata.mobile" placeholder="请输入电话" />
                    </el-form-item>

                </el-form>
                <template #footer>
                    <div class="flex">
                        <el-button type="" @click="btn_cancel">取消</el-button>
                        <el-button type="primary" @click="submitForm(userForm)">确定</el-button>
                    </div>
                </template>
            </el-dialog>
        </div>

        <!-- 修改弹窗 -->
        <div class="dialog">
            <el-dialog v-model="dialogFormEdVisible" title="编辑此用户">
                <el-form :model="formdata2" :rules="rules2" ref="userForm2">
                    <el-form-item label="邮箱" prop="email">
                        <el-input v-model="formdata2.email" placeholder="请输入邮箱" />
                    </el-form-item>
                    <el-form-item label="手机号" prop="mobile">
                        <el-input v-model="formdata2.mobile" placeholder="请输入电话" />
                    </el-form-item>

                </el-form>
                <template #footer>
                    <div class="flex">
                        <el-button type="" @click="btn_cancel">取消</el-button>
                        <el-button type="primary" @click="submitEdForm(userForm2)">确定</el-button>
                    </div>
                </template>
            </el-dialog>
        </div>


        <div class="pageNums">
            <el-pagination small background layout="prev, pager, next" :total="50" class="mt-4"
                @update:current-page="handleCurrentChange" @current-change="searchList" />
        </div>
    </div>
</template>


<script>
import { toRefs, reactive, ref } from "vue"
import { userListApi, userAddApi, userChangeStateApi, userChangeInfoApi, userDeleteApi, } from "../../util/request.js"

export default {
    name: "roles",
    setup() {
        const data = reactive({
            keyWord: "",
            searchParams: {
                query: "",
                pagesize: "3",
                pagenum: 1
            },
            userList: [],
            dialogFormVisible: false,
            dialogFormEdVisible: false,

            formdata: {
                username: "",
                password: "",
                email: "",
                mobile: ""
            },
            formdata2: {
                id: "",
                email: "",
                mobile: ""
            },

            rules: {
                username: [
                    {
                        required: true,
                        message: '此项为必填项',
                        trigger: 'blur'
                    }
                ],
                password: [
                    {
                        required: true,
                        message: '此项为必填项',
                        trigger: 'blur'
                    }
                ],
                email: [
                    {
                        required: false,
                        pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$/,
                        message: '请填写正确的邮箱',
                        trigger: 'blur'
                    }
                ],
                mobile: [
                    {
                        required: false,
                        pattern: /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/,
                        message: '请填写正确的手机号',
                        trigger: 'blur'
                    }
                ]
            },
            rules2: {
                email: [
                    {
                        required: false,
                        pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$/,
                        message: '请填写正确的邮箱',
                        trigger: 'blur'
                    }
                ],
                mobile: [
                    {
                        required: false,
                        pattern: /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/,
                        message: '请填写正确的手机号',
                        trigger: 'blur'
                    }
                ]
            }
        })

        const searchList = () => {
            userListApi(data.searchParams).then(res => {
                if (res.data) {
                    // console.log("用户数据", res);
                    data.userList = res.data.users
                }
            })
        }
        const addUser = () => {
            data.dialogFormVisible = true

        }
        // 新增提交
        const submitForm = (formEl) => {
            formEl.validate(res => {
                if (!res) {

                }

                userAddApi(data.formdata).then(res => {
                    if (res.data) {
                        data.dialogFormVisible = false
                        data.formdata = {
                            username: "",
                            password: "",
                            email: "",
                            mobile: ""
                        }
                        searchList()
                    }
                })
            })
        }
        // 修改提交
        const submitEdForm = (formEl) => {
            formEl.validate(res => {
                if (!res) {
                    return
                }
                userChangeInfoApi(data.formdata2).then(res => {
                    if (res.data) {
                        data.dialogFormEdVisible = false
                        searchList()
                    }
                })

            })
        }


        const handleCurrentChange = (val) => {
            data.searchParams.pagenum = val
            // console.log(val);

        }

        const switchChange = (row) => {
            console.log("操作的那条数据", row);
            userChangeStateApi(row).then(res => {
                if (res.data) {
                    searchList()
                }
            })
        }

        const editRow = row => {

            //展示新建表单
            data.dialogFormEdVisible = true;
            data.formdata2.email = row.email
            data.formdata2.mobile = row.mobile
            data.formdata2.id = row.id

        }
        const btn_cancel = () => {
            data.dialogFormEdVisible = false;
            data.dialogFormVisible = false;
        }

        const delRow = row => {
            userDeleteApi(row).then(res => {
                if (!res.data) {
                    searchList()
                }
            })
        }
        searchList()
        const userForm = ref()
        const userForm2 = ref()
        return {
            ...toRefs(data),
            searchList,
            addUser,
            submitForm,
            submitEdForm,
            userForm,
            userForm2,
            handleCurrentChange,
            switchChange,
            editRow,
            delRow,
            btn_cancel
        }
    }


}
</script>

<style scoped>
.input-box {
    width: 200px;
    margin-right: 30px;
}


</style>