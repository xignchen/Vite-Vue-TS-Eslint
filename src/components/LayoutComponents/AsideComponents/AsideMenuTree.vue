<script setup lang="ts">
import {computed} from "vue"
import {useRoute} from "vue-router"
import MenuItem from "./MenuComponents/MenuItem.vue"
import store from "../../../store"
import {menuItems} from "@/utils/menu"

const route = useRoute()

const isCollapse = computed(() => {
    return store.state.isCollapse
})

const handleOpen = () => {
    // console.log(key, keyPath)
}

const handleClose = () => {
    // console.log(key, keyPath)
}

const handSelect = () => {
    // console.log('index', index)
    // console.log('indexPath', indexPath)
    // console.log('item', item)
}
</script>

<template>
    <el-scrollbar>
        <el-menu
            :default-active="route.path"
            class="el-menu-vertical-demo dark-mode"
            :collapse="isCollapse"
            unique-opened
            @open="handleOpen"
            @close="handleClose"
            @select="handSelect"
        >
            <menu-item v-for="item in menuItems" :key="item.path" :item="item"/>
        </el-menu>
    </el-scrollbar>
</template>

<style scoped></style>
