<script setup lang="ts">

import {toRef} from 'vue'
import {ElMessage} from 'element-plus';

const props = defineProps({
    drawerVisible: {
        type: Boolean,
        default: false
    },
    drawerTitle: {
        type: String,
        default: ''
    },
    drawerFormData: {
        type: Object,
        default: () => ({})
    }
})

const showDrawer = toRef(props, 'drawerVisible')

const form = toRef(props, 'drawerFormData')

const emit = defineEmits(['update:drawerVisible'])

const submitForm = () => {
    ElMessage.success('提交成功')
}

const handleClose = () => {
    showDrawer.value = false
    emit('update:drawerVisible', false)
}
</script>

<template>
    <el-drawer
        v-model="showDrawer"
        :title="drawerTitle"
        size="40%"
        :before-close="handleClose">
        <el-form :model="form">
            <el-form-item label="账号" prop="username" required>
                <el-input v-model="form.username" placeholder="请输入用户名" />
            </el-form-item>
            <el-form-item label="姓名" prop="name" required>
                <el-input v-model="form.name" placeholder="请输入姓名" />
            </el-form-item>
            <el-form-item label="公民身份号码" prop="idCard" required>
                <el-input v-model="form.idCard" placeholder="请输入公民身份号码" />
            </el-form-item>
            <el-form-item label="联系电话" prop="phone" required>
                <el-input v-model="form.phone" placeholder="请输入联系电话" />
            </el-form-item>
            <el-form-item label="地址" prop="address" required>
                <el-input v-model="form.address" placeholder="请输入地址" type="textarea" />
            </el-form-item>
            <el-form-item label="密码" prop="password" required>
                <el-input v-model="form.password" placeholder="请输入密码" type="password"
                          show-password />
            </el-form-item>
            <el-form-item label="确认密码" prop="refPassword" required>
                <el-input v-model="form.refPassword" placeholder="请再次输入密码" type="password"
                          show-password />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm"> 提交 </el-button>
                <el-button @click="handleClose"> 取消</el-button>
            </el-form-item>
        </el-form>
    </el-drawer>
</template>

<style scoped>

</style>
