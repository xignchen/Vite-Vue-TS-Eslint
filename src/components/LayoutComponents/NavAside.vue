<script setup lang="ts">
import AsideHeader from './AsideComponents/AsideHeader.vue'
import AsideMenuTree from './AsideComponents/AsideMenuTree.vue'
</script>

<template>
  <el-aside width="220">
    <aside-header />
    <!--导航菜单-->
    <aside-menu-tree class="aside-menu-tree" />
  </el-aside>
</template>

<style scoped></style>
