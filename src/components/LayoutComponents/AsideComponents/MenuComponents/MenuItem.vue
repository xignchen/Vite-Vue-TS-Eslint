<script setup lang="ts" name="menuItem">
import {toRef} from 'vue'

const props = defineProps({
    item: {
        type: Object,
        default: () => ({}),
    },
})

const itemMenus = toRef(props, 'item')
// console.log(item)
</script>

<template>
    <el-sub-menu
        popper-class="dark-mode"
        v-if="itemMenus.children && itemMenus.children.length > 0"
        :index="itemMenus.path"
        :key="itemMenus.path"
    >
        <template #title>
            <el-icon>
                <component :is="itemMenus.icon"/>
            </el-icon>
            <span>{{ itemMenus.name }}</span>
        </template>
        <menu-item
            v-for="child in itemMenus.children"
            :key="child.path"
            :item="child"
        />
    </el-sub-menu>
    <el-menu-item v-else-if="itemMenus.target" :index="itemMenus.path">
        <template #title>
            <a :href="itemMenus.path" :target="itemMenus.target">
                <el-icon>
                    <component :is="itemMenus.icon"/>
                </el-icon>
                <span>{{ itemMenus.name }}</span>
            </a>
        </template>
    </el-menu-item>
    <router-link v-else :to="itemMenus.path" :key="itemMenus.path">
        <el-menu-item :index="itemMenus.path">
            <el-icon>
                <component :is="itemMenus.icon"/>
            </el-icon>
            <template #title>
                <span>{{ itemMenus.name }}</span>
            </template>
        </el-menu-item>
    </router-link>
</template>

<style scoped></style>
