<script setup lang="ts">
import { computed } from "vue";
import store from "../../../store";

const subTitle = computed(() => {
  return store.state.subTitle;
});
</script>

<template>
  <el-header>
    <img
      src="../../../assets/svgs/vite.svg"
      class="logo-img"
      alt="Logo"
      width="100"
      height="30"
    />
    <transition name="el-fade-in-linear" mode="out-in">
      <span v-if="!store.state.isCollapse" class="logo-title">{{
        subTitle
      }}</span>
    </transition>
  </el-header>
</template>

<style scoped></style>
