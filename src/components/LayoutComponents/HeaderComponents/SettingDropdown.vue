<script setup lang="ts">
import {ref} from 'vue'
import {Lock, Setting, SwitchButton, User} from '@element-plus/icons-vue'
import {loginOut} from '../../../utils/common.ts'
import SettingDrawer from './DialogComponents/SettingDrawer.vue'

const drawerVisible = ref(false)

const handleCommand = (e: any) => {
    switch (e) {
        case 'a':
            break
        case 'b':
            break
        case 'c':
            drawerVisible.value = true
            break
        // 退出登录
        case 'd':
            loginOut()
            break
    }
}
</script>

<template>
    <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
            <svg
                t="1725871314102"
                class="icon"
                viewBox="0 0 1821 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="14348"
                width="50"
                height="50"
            >
                <path
                    d="M1283.733333 773.6c9.466667-14.133333 16.533333-27.2 24.8-42.533333 2.4-3.6 3.6-7.066667 4.666667-10.666667 5.866667-11.866667 10.666667-23.6 15.333333-35.466667 2.4-4.666667 3.6-9.466667 5.866667-15.333333 3.6-11.866667 7.066667-22.533333 10.666667-34.266667 1.2-5.866667 3.6-10.666667 4.8-16.533333 2.4-11.866667 4.666667-24.8 7.066666-36.666667 1.2-5.866667 2.4-10.666667 2.4-15.333333 2.4-17.733333 3.6-35.466667 3.6-54.4 0-267.2-217.6-484.933333-484.933333-484.933333C609.6 27.466667 392 245.066667 392 512.266667c0 17.733333 1.2 36.666667 3.6 54.4 1.2 5.866667 1.2 10.666667 2.4 16.533333 1.2 10.666667 3.6 23.6 5.866667 35.466667 1.2 5.866667 2.4 11.866667 4.666666 16.533333 3.6 11.866667 7.066667 23.6 10.666667 34.266667 1.2 4.666667 3.6 9.466667 5.866667 15.333333 4.8 11.866667 9.466667 24.8 15.333333 35.466667 1.2 3.6 3.6 7.066667 4.666667 10.666666 7.333333 14.666667 15.733333 28.933333 24.8 42.533334l1.2 1.2C557.6 908.533333 706.666667 996 876.933333 996c170.266667 0 319.333333-88.666667 405.6-221.2l1.2-1.2zM876.933333 259.2c98.133333 0 178.533333 80.4 178.533334 178.533333-1.2 98.133333-80.4 177.333333-178.533334 177.333334-98.133333 0-178.533333-80.4-178.533333-178.533334 0-96.933333 80.4-177.333333 178.533333-177.333333zM582.4 815.066667C633.333333 699.2 748 622.266667 876.933333 622.266667s243.6 76.933333 294.533334 192.8c-76.933333 74.533333-180.933333 119.466667-294.533334 119.466666-114.666667 0-218.8-44.933333-294.533333-119.466666z m0 0"
                    fill="#BFCBD9"
                    p-id="14349" />
              </svg>
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item command="a" :icon="User">个人信息</el-dropdown-item>
                <el-dropdown-item command="b" :icon="Lock">修改密码</el-dropdown-item>
                <el-dropdown-item command="c" :icon="Setting"
                >系统设置
                </el-dropdown-item
                >
                <el-dropdown-item command="d" :icon="SwitchButton" divided
                >退出登录
                </el-dropdown-item
                >
            </el-dropdown-menu>
        </template>
    </el-dropdown>

    <setting-drawer :drawerVisible="drawerVisible"/>
</template>

<style scoped></style>
