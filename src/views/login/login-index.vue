<script setup lang="ts">
import {User, Unlock} from '@element-plus/icons-vue'
import {reactive} from 'vue'
import {useRouter} from 'vue-router'
import {ElMessage} from 'element-plus'
import store from '../../store'

const router = useRouter()

const loginForm = reactive({
    username: '',
    password: '',
})

const doLogin = () => {
    console.log(loginForm)
    window.localStorage.setItem('token', '123456')
    store.dispatch('updateUserInfo', {
        username: loginForm.username,
        password: loginForm.password,
        name: '管理员'
    })
    ElMessage.success('登录成功')
    // 登录成功后跳转到首页
    setTimeout(() => {
        router.push('/layout')
    }, 1000)
}
</script>

<template>
    <div>
        <!--    登录-->
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>{{ store.state.systemTitle }}</span>
                </div>
            </template>
            <el-form :model="loginForm">
                <el-form-item>
                    <el-input
                        v-model="loginForm.username"
                        :prefix-icon="User"
                        clearable
                    />
                </el-form-item>
                <el-form-item>
                    <el-input
                        type="password"
                        v-model="loginForm.password"
                        show-password
                        :prefix-icon="Unlock"
                    />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="doLogin">登&emsp&emsp录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<style scoped></style>
