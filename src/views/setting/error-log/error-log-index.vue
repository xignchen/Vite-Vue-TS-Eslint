<script setup lang="ts">
import {reactive, ref} from "vue"
import {ElMessage} from "element-plus"

const formInline = reactive({
    date: []
})

const tableData = ref([])
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(0)

const getTableData = async () => {
    // 发送请求获取表格数据
}

const handleSearch = () => {
    // 处理搜索逻辑
    currentPage.value = 1
    getTableData()
}

const handleCurrentChange = (page: number) => {
    currentPage.value = page
    // 处理分页逻辑
    getTableData()
}

const handleSizeChange = (size: number) => {
    currentPage.value = 1
    pageSize.value = size
    // 处理分页逻辑
    getTableData()
}

const handleSelect = (row: any) => {
    ElMessage.success(row)
    // 处理选中行逻辑
}

</script>

<template>
    <div class="page">
        <div class="form">
            <el-form inline :model="formInline">
                <el-form-item label="时间">
                    <el-date-picker
                        v-model="formInline.date"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始时间"
                        end-placeholder="结束时间"
                    />
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
                style="width: 100%"
            >
                <el-table-column type="index" label="序号" width="55" align="center"/>
                <el-table-column prop="bh" label="日志编号" align="center"/>
                <el-table-column prop="api" label="报错接口" align="center"/>
                <el-table-column prop="error" label="报错内容" align="center"/>
                <el-table-column prop="time" label="报错时间" align="center"/>
                <el-table-column fixed="right" label="操作" width="120" align="center">
                    <template #default="{ row }">
                        <el-button type="text" @click="handleSelect(row)"> 查看</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="pagination">
            <el-pagination
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :currentPage="currentPage"
                :page-size="pageSize"
                :page-sizes="[10, 20, 50, 100, 500]"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total"
            />
        </div>
    </div>
</template>

<style scoped>

</style>
