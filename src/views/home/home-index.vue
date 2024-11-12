<script setup lang="ts">
import {onMounted} from "vue"
import {
    getEchartsData1,
    getEchartsData2,
    getEchartsData3,
    getEchartsData4,
    getEchartsData5,
    getEchartsData6,
    getEchartsData7,
    getEchartsData8,
    getEchartsData9,
    getEchartsData10,
    getEchartsData11,
    getEchartsData12,
    getEchartsData13
} from "./home-index.ts"

onMounted(() => {
    getEchartsData1()
    getEchartsData2()
    getEchartsData3()
    getEchartsData4()
    getEchartsData5()
    getEchartsData6()
    getEchartsData7()
    getEchartsData8()
    getEchartsData9()
    getEchartsData10()
    getEchartsData11()
    getEchartsData12()
    getEchartsData13()
})
</script>

<template>
    <div class="page">
        <div class="content">
            <el-row :gutter="20">
                <el-col :span="6">
                    <div class="grid-content ep-bg-purple" id="chart1"></div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content ep-bg-purple" id="chart2"></div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content ep-bg-purple" id="chart3"></div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content ep-bg-purple" id="chart4"></div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="16">
                    <div class="grid-content ep-bg-purple" id="chart5"></div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content ep-bg-purple" id="chart6"></div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8">
                    <div class="grid-content ep-bg-purple" id="chart7"></div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content ep-bg-purple" id="chart8"></div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content ep-bg-purple" id="chart9"></div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content ep-bg-purple" id="chart10"></div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="4">
                    <div class="grid-content ep-bg-purple" id="chart11"></div>
                </el-col>
                <el-col :span="16">
                    <div class="grid-content ep-bg-purple" id="chart12"></div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content ep-bg-purple" id="chart13"></div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<style scoped>
.el-row {
    margin-bottom: 20px;
}

.el-row:last-child {
    margin-bottom: 0;
}

.el-col {
    border-radius: 4px;
}

.grid-content {
    border-radius: 4px;
    min-height: 260px;
}

.ep-bg-purple {
    border: 1px solid var(--el-border-color);
    background-color: var(--el-fill-color-light);
}
</style>
