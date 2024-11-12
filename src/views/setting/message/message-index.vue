<script setup lang="ts">
import {reactive, ref} from "vue"
import {getMessageList} from "./api.ts"
import {ElMessage} from "element-plus";

const formInline = reactive({
    content: ""
})

const tableData = ref([])
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(0)


const getTableData = () => {
    getMessageList().then(res => {
        tableData.value = res.data
        total.value = res.total
    })
}

const handleSearch = () => {
    currentPage.value = 1
    getTableData()
}

const handleCurrentChange = (val: number) => {
    currentPage.value = val
    getTableData()
}

const handleSizeChange = (val: number) => {
    currentPage.value = 1
    pageSize.value = val
    getTableData()
}

const addMessage = () => {
    ElMessage.success("发送消息")
}
</script>

<template>
    <div class="page">
        <div class="form">
            <el-form inline :model="formInline">
                <el-form-item label="消息内容">
                    <el-input v-model="formInline.content" placeholder="请输入消息内容" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleSearch">
                        <el-icon style="vertical-align: middle">
                            <Search/>
                        </el-icon>
                        <span style="vertical-align: middle"> 查询 </span>
                    </el-button>
                    <el-button type="success" @click="addMessage">
                        <el-icon style="vertical-align: middle">
                            <ChatDotRound/>
                        </el-icon>
                        <span style="vertical-align: middle"> 发送 </span>
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
                <el-table-column prop="title" label="标题" align="center" />
                <el-table-column prop="content" label="内容" align="center" />
                <el-table-column prop="createTime" label="发送时间" align="center" />
            </el-table>
        </div>
        <div class="pagination">
            <el-pagination
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[10, 20, 50, 100, 500]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total" />
        </div>
    </div>
</template>

<style scoped></style>
