<script setup lang="ts">
import {reactive, ref} from "vue"
import {getUserList} from "./api.ts"
import UserDrawer from "./user-drawer.vue"

const formInline = reactive({
    username: "",
    name: "",
    idCard: "",
    phone: ""
})

const tableData = ref([])
const drawerVisible = ref(false)
const drawerTitle = ref("")
const drawerFormData = ref({})
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(0)

const getTableData = () => {
    getUserList(formInline).then(res => {
        tableData.value = res.data
        total.value = res.total
    })
}

const handleSearch = () => {
    // 处理搜索逻辑
    currentPage.value = 1
    getTableData()
}

const handleCurrentChange = (val: number) => {
    // 处理分页逻辑
    currentPage.value = val
    getTableData()
}

const handleSizeChange = (val: number) => {
    // 处理分页逻辑
    currentPage.value = 1
    pageSize.value = val
    getTableData()
}

const handleEdit = (row: object) => {
    // 处理编辑逻辑
    drawerVisible.value = true
    drawerTitle.value = "编辑用户"
    drawerFormData.value = row
}

const handleDelete = () => {
    // 处理删除逻辑
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
                <el-form-item label="账号">
                    <el-input v-model="formInline.username" placeholder="请输入账号" clearable />
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input v-model="formInline.name" placeholder="请输入姓名" clearable />
                </el-form-item>
                <el-form-item label="公民身份号码">
                    <el-input v-model="formInline.idCard" placeholder="请输入公民身份号码" clearable />
                </el-form-item>
                <el-form-item label="联系电话">
                    <el-input v-model="formInline.phone" placeholder="请输入联系电话" clearable />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleSearch">
                        <el-icon style="vertical-align: middle">
                            <Search/>
                        </el-icon>
                        <span style="vertical-align: middle"> 查询 </span>
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="table">
            <el-table
                :data="tableData"
                border
                empty-text="暂无数据"
                height="calc(100vh - 16em)"
                style="width: 100%">
                <el-table-column type="index" label="序号" width="55" align="center" />
                <el-table-column prop="username" label="账号" align="center" />
                <el-table-column prop="name" label="姓名" align="center" />
                <el-table-column prop="idCard" label="证件号码" align="center" />
                <el-table-column prop="phone" label="联系电话" align="center" />
                <el-table-column prop="address" label="住址" align="center" />
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
        <div class="pagination">
            <el-pagination
                background
                @current-change="handleCurrentChange"
                @size-change="handleSizeChange"
                :current-page="currentPage"
                :page-size="pageSize"
                :page-sizes="[10, 20, 50, 100, 500]"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total" />
        </div>

        <!--  编辑-->
        <user-drawer
            :drawer-visible="drawerVisible"
            :drawer-title="drawerTitle"
            :drawer-form-data="drawerFormData"
            @update:drawer-visible="switchDrawer"/>
    </div>
</template>

<style scoped>

</style>
