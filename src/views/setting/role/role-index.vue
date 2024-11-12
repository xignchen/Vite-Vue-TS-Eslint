<script setup lang="ts">
import {reactive, ref} from "vue"
import {getRoleList} from "./api.ts"
import RoleDrawer from "./role-drawer.vue"
import {ElMessage} from "element-plus"

const formInline = reactive({
    roleName: ""
})

const tableData = ref([])
const drawerVisible = ref(false)
const drawerTitle = ref("")
const drawerFormData = ref({})

const handleSearch = () => {
    // 处理搜索逻辑
    getRoleList(formInline).then(res => {
        tableData.value = res.data
    })
}

const handleEdit = (row: object) => {
    // 处理编辑逻辑
    drawerVisible.value = true
    drawerTitle.value = ""
    drawerFormData.value = row
}

const handleDelete = (row: object) => {
    ElMessage.success(row)
    // 处理删除逻辑
}

const addRole = () => {
    drawerVisible.value = true
    drawerTitle.value = "新增角色"
    drawerFormData.value = {}
}

const switchDrawer = (visible: boolean) => {
    drawerVisible.value = visible
    if (!visible) {
        handleSearch()
    }
}
</script>

<template>
    <div class="page">
        <div class="form">
            <el-form inline :model="formInline" class="demo-form-inline">
                <el-form-item label="角色名称">
                    <el-input v-model="formInline.roleName" placeholder="角色名称" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleSearch">
                        <el-icon style="vertical-align: middle">
                            <Search/>
                        </el-icon>
                        <span style="vertical-align: middle"> 查询 </span>
                    </el-button>
                    <el-button type="success" @click="addRole">
                        <el-icon style="vertical-align: middle">
                            <Plus/>
                        </el-icon>
                        <span style="vertical-align: middle"> 新增 </span>
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="table">
            <el-table
                :data="tableData"
                border
                empty-text="暂无数据"
                height="calc(100vh - 14em)"
                style="width: 100%"
            >
                <el-table-column type="index" label="序号" width="55" align="center" />
                <el-table-column prop="name" label="角色名称" align="center" />
                <el-table-column prop="num" label="角色代码" align="center" />
                <el-table-column prop="id" label="角色ID" align="center" />
                <el-table-column prop="description" label="角色描述" align="center" />
                <el-table-column prop="status" label="角色状态" align="center" />
                <el-table-column fixed="right" width="200" label="操作" align="center">
                    <template #default="scope">
                        <el-button type="primary" link @click="handleEdit(scope.row)">
                            <el-icon style="vertical-align: middle">
                                <Edit/>
                            </el-icon>
                            <span style="vertical-align: middle"> 编辑 </span>
                        </el-button>
                        <el-button type="danger" link @click="handleDelete(scope.row)">
                            <el-icon style="vertical-align: middle">
                                <Delete/>
                            </el-icon>
                            <span style="vertical-align: middle"> 删除 </span>
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <!--  新增、编辑-->
        <role-drawer
            :drawer-visible="drawerVisible"
            :drawer-title="drawerTitle"
            :drawer-form-data="drawerFormData"
            @update:drawer-visible="switchDrawer"/>
    </div>
</template>

<style scoped></style>
