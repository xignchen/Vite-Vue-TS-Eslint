<script setup lang="ts"></script>

<template>
  <el-main>
    <el-scrollbar>
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </el-scrollbar>
  </el-main>
</template>

<style scoped></style>
