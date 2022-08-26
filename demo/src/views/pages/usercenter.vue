<template lang="">
<div class="main-Container">
    <div class="usercenterContainer">
        <el-form :model="form" label-width="120px">
    <el-form-item label="用户名">
      <el-input v-model="form.userName" style="width:215px" />
    </el-form-item>
    <el-form-item label="所属组别">
      <el-select v-model="form.userRegion" placeholder="请选择你的所属组别">
        <el-option label="小组一" value="group1" />
        <el-option label="小组二" value="group2" />
      </el-select>
    </el-form-item>
    <el-form-item label="账号注册日期">
      <el-col :span="5">
        <el-date-picker
          v-model="form.date1"
          type="date"
          placeholder="请选择一个日期"
          style="width: 100%"
        />
      </el-col>
      <el-col :span="1" class="text-center">
        <span class="text-gray-500">-</span>
      </el-col>
      <el-col :span="5">
        <el-time-picker
          v-model="form.date2"
          placeholder="请选择一个时间"
          style="width: 100%"
        />
      </el-col>
    </el-form-item>
    <el-form-item label="账号当前状态">
      <el-switch v-model="form.userState" />
    </el-form-item>
    <el-form-item label="操作类型">
      <el-checkbox-group v-model="form.userType">
        <el-checkbox label="线上操作" name="type" />
        <el-checkbox label="协助操作" name="type" />
        <el-checkbox label="线下操作" name="type" />
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="性别">
      <el-radio-group v-model="form.userSex">
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

export default {

    setup() {
        const form = ref({
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: '',
        })



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


        return {
            form,
            imageUrl,
            handleAvatarSuccess,
            beforeAvatarUpload
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