<template lang="">
<div class="main-Container">
    <div class="usercenterContainer">
        <el-form :model="form" label-width="120px">
    <el-form-item label="姓名">
      <el-input v-model="form.name" style="width:215px" />
    </el-form-item>
    <el-form-item label="所属职位">
      <el-select v-model="form.jobType"  placeholder="请选择你的职位类型">
        <el-option selected label="前端工程师" value="前端工程师" />
        <el-option label="后端工程师" value="后端工程师" />
        <el-option label="UI工程师" value="UI工程师" />
        <el-option label="需求工程师" value="需求工程师" />
      </el-select>
    </el-form-item>

    <el-form-item label="当前角色" >
      <el-select v-model="form.roles"  placeholder="请选择你的角色类型">
        <el-option label="admin" value="admin" />
        <el-option label="editor" value="editor" />
        <el-option label="user" value="user" />
      </el-select>
    </el-form-item>
    <el-form-item label="性别">
      <el-radio-group v-model="form.usersex">
        <el-radio label="男" />
        <el-radio label="女" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="个人描述">
      <el-input v-model="form.userDesc" type="textarea" maxlength="50" show-word-limit="true" rows="5" style="width:45%;" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
  <div class="changeImage">
  <el-upload
    class="avatar-uploader"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"
  >
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
    <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
  </el-upload>
  </div>

    </div>
    </div>
</template>
<script>

import { ref } from 'vue'
import { useStore } from 'vuex'
import { editUser } from '@/until/api'


export default {
  setup() {
    const form = ref({
      username: '',
      name: '',
      jobType: '',
      roles: '',
      usersex: '',
      userDesc: '',
    })
    let value = '前端工程师'
    const store = useStore()

    const getuserinfo = () => {
      form.value.username = store.state.userInfo.username
      form.value.jobType = store.state.userInfo.job
      form.value.name = store.state.userInfo.name
      form.value.roles = store.state.userInfo.roles
      form.value.usersex = (store.state.userInfo.usersex == 1 ? '男' : '女')
      form.value.userDesc = store.state.userInfo.desc
    }
    getuserinfo()


    const imageUrl = ref('')

    const handleAvatarSuccess = (res, file) => {
      this.imageUrl = URL.createObjectURL(file.raw);
    }
    const beforeAvatarUpload = (file) => {
      const isJPG = file.type === 'image/jpeg/png';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }

    const onSubmit = () => {
      editUser(form.value).then(res => {
        store.commit('setUserinfo', res.data)
        console.log(store.state.userInfo);
      })
    }


    return {
      form,
      imageUrl,
      handleAvatarSuccess,
      beforeAvatarUpload
      , value,
      onSubmit
    }

  }
}

</script>
<style lang="less">
.main-Container {
  display: flex;
  justify-content: center;
  align-items: center;

  .usercenterContainer {
    position: relative;


    width: 70%;

    .el-form-item {
      margin-top: 40px;
    }

    .changeImage {
      position: absolute;
      right: 10%;
      top: 10%;
    }
  }
}

.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>