<script setup lang="ts">
import {onMounted} from 'vue';
import NavAside from '../components/LayoutComponents/NavAside.vue';
import NavHeader from '../components/LayoutComponents/NavHeader.vue';
import NavMain from '../components/LayoutComponents/NavMain.vue';
import NavFooter from '../components/LayoutComponents/NavFooter.vue';
import WaterMark from '../components/WaterMark/WaterMark.vue';

// 页面加载时
onMounted(() => {
});
</script>

<template>
    <div class="common-layout">
        <el-container>
            <!--  侧边菜单栏-->
            <nav-aside/>
            <el-container>
                <!--  头部内容-->
                <nav-header/>
                <!--  展示内容-->
                <nav-main/>
                <!--  底部内容-->
                <nav-footer/>
            </el-container>
        </el-container>
        <!--  水印-->
        <water-mark/>
    </div>
</template>

<style scoped></style>
