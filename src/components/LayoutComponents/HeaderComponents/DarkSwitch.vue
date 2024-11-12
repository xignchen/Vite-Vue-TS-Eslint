<script setup lang="ts">
import {computed, ref} from 'vue'
import {Moon, Sunny} from '@element-plus/icons-vue'
import store from '../../../store'

const isDark = ref(
    computed(() => {
        return store.state.isDark
    }),
)

const changeDark = () => {
    //获取html根节点，当根节点上有class=‘dark’时，变为暗黑模式
    let html = document.documentElement
    //判断HTML标签是否有类名dark
    //当按钮为关闭时，设置根节点的className为'',当暗黑模式按钮开启时，根节点的className设置为'dark'
    if(isDark.value) {
        html.className = ''
    } else {
        html.className = 'dark'
    }

    //将isDark的值更新到vuex中
    store.dispatch('updateIsDark', !isDark.value)
}
</script>

<template>
    <el-switch v-model="isDark" size="large" inline-prompt @change="changeDark">
        <template #active-action>
            <el-icon>
                <Moon/>
            </el-icon>
        </template>
        <template #inactive-action>
            <el-icon>
                <Sunny/>
            </el-icon>
        </template>
    </el-switch>
</template>

<style scoped></style>
