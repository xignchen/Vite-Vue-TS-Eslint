<script setup lang="ts">
import {ref, toRef, onMounted} from "vue"
import {getMenuList} from "./api.ts"
import ElIconPicker from "../../../components/ElIconPicker/ElIconPicker.vue"

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
const menuOptions = ref([])

const emit = defineEmits(["update:drawerVisible"])

onMounted(() => {
    getMenuItems()
})

const getMenuItems = () => {
    getMenuList().then(res => {
        menuOptions.value = res.data
    })
}

const submitForm = () => {
    // 处理表单提交逻辑
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
        size="40%"
        :before-close="closeDrawer"
    >
        <el-form :model="form">
            <el-form-item label="上级菜单" prop="parentId">
                <el-cascader
                    style="width: 100%"
                    v-model="form.parentId"
                    :options="menuOptions"
                    :props="{ checkStrictly: true, value: 'id', label: 'name' }"
                    placeholder="请选择上级菜单"
                    clearable/>
            </el-form-item>
            <el-form-item label="菜单名称" prop="name" required>
                <el-input v-model="form.name" placeholder="请输入菜单名称"/>
            </el-form-item>
            <el-form-item label="菜单路径" prop="path" required>
                <el-input v-model="form.path" placeholder="请输入菜单路径"/>
            </el-form-item>
            <el-form-item label="菜单图标" prop="icon" required>
                <!--        <el-input v-model="form.icon" placeholder="请输入菜单图标" />-->
                <el-icon-picker v-model="form.icon"/>
            </el-form-item>
            <el-form-item label="菜单排序" prop="sort" required>
                <el-input-number v-model="form.sort"/>
            </el-form-item>
            <el-form-item label="菜单状态" prop="status" required>
                <el-switch
                    v-model="form.status"
                    :active-value="1"
                    :inactive-value="0"
                />
            </el-form-item>
            <el-form-item label="备注" prop="remark">
                <el-input v-model="form.remark" type="textarea" placeholder="请输入菜单备注"/>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm">提交</el-button>
                <el-button @click="closeDrawer"> 取消</el-button>
            </el-form-item>
        </el-form>
    </el-drawer>
</template>

<style scoped>

</style>
