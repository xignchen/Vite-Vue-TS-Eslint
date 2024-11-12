<script setup lang="ts">
import store from './store';
import {computed, onMounted} from 'vue';
import zhCn from 'element-plus/es/locale/lang/zh-cn.mjs'
import en from 'element-plus/es/locale/lang/en.mjs'
import { ElMessage } from 'element-plus'

const locale = computed( () => {
    return store.state.language === 'zhCn' ? zhCn : en
})

const size = computed(() => store.state.size)

onMounted(() => {
    // 监听主题变化
    if (store.state.isDark) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    // 判断是生产环境还是开发环境
    if ( import.meta.env.MODE === 'production' ) {
        //监听用户敲击键盘事件
        window.addEventListener('keydown', handleKeydown);
        //阻止右键打开菜单
        document.oncontextmenu = function (event) {
            event.preventDefault();
        };
        // 无限debugger
        setInterval(() => {
            debugger;
        }, 1e3)
    }
});


// 禁用调试模式
const handleKeydown = (event) => {
    //如果键盘敲击f12就阻止f12打开，然后弹框提醒
    if (event.key === 'F12') {
        event.preventDefault(); // 阻止F12的默认行为
        ElMessage('检测非法调试，F12已被禁用');
    }
}
</script>

<template>
    <el-config-provider :locale="locale" :size="size">
        <router-view />
    </el-config-provider>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
