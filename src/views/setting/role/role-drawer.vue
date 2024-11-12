<script setup lang="ts">
import {ref, toRef, onMounted} from "vue"
import {getMenuList} from "./api.ts"

const props = defineProps({
    drawerVisible: {
        type: Boolean,
        default: false
    },
    drawerTitle: {
        type: String,
        default: ""
    },
    drawerFormData: {
        type: Object,
        default: () => ({})
    }
})

const showDrawer = toRef(props, "drawerVisible")
const form = toRef(props, "drawerFormData")
const emit = defineEmits(["update:drawerVisible"])
const treeData = ref([])

const getMenuTree = () => {
    getMenuList().then(res => {
        treeData.value = res.data
    })
}

onMounted(() => {
    getMenuTree()
})

const submitForm = () => {
    // console.log(form.value)
    showDrawer.value = false
    emit("update:drawerVisible", false)
}

// 关闭抽屉
const closeDrawer = () => {
    showDrawer.value = false
    emit("update:drawerVisible", false)
}
</script>

<template>
    <el-drawer
        v-model="showDrawer"
        :title="drawerTitle"
        :modal="false"
        append-to-body
        size="40%"
        :before-close="closeDrawer"
    >
        <el-form :model="form">
            <el-form-item label="角色代码" required>
                <el-input v-model="form.id" placeholder="请填写角色代码" autocomplete="off" />
            </el-form-item>
            <el-form-item label="角色名称" required>
                <el-input v-model="form.name" placeholder="请填写角色名称" autocomplete="off" />
            </el-form-item>
            <el-form-item label="角色描述" required>
                <el-input v-model="form.description" placeholder="请填写角色描述" autocomplete="off" />
            </el-form-item>
            <el-form-item label="角色状态" required>
                <el-switch
                    v-model="form.status"
                    :active-value="1"
                    :inactive-value="0"
                />
            </el-form-item>
            <el-form-item label="角色权限" required>
                <el-tree
                    :data="treeData"
                    show-checkbox
                    node-key="id"
                    :default-checked-keys="form.permissions"
                    :props="{ children: 'children', label: 'name' }" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm"> 确定</el-button>
                <el-button @click="closeDrawer"> 取消</el-button>
            </el-form-item>
        </el-form>
    </el-drawer>
</template>

<style scoped>

</style>
