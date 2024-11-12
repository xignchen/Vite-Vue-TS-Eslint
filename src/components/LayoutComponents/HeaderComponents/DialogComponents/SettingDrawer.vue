<script setup lang="ts">

import {toRef} from 'vue'

const props = defineProps({
    drawerVisible: {
        type: Boolean,
        default: false,
    },
})

const showDrawer = toRef(props, 'drawerVisible')
</script>

<template>
    <el-drawer
        v-model="showDrawer"
        title="系统设置"
        :modal="false"
        size="30%">
        <div></div>
    </el-drawer>
</template>

<style scoped></style>
