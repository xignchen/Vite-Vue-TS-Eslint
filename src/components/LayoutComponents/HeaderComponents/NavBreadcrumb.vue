<script setup lang="ts">
import {onMounted, ref, watch} from 'vue'
import {useRoute} from 'vue-router'

const route = useRoute()

const breads = ref([])

const calcBreads = () => {
    //让每一页都可以跳转首页
    // let temp = [{ to: "/", title: "首页" }]

    let r = route.matched
        .filter((v) => v.meta.title) //当点击的是没有子菜单的导航项时,过滤掉matched对象数组中的第二项
        .map((v, i) => {
            // console.log(v)
            // console.log(i)
            if (i === route.matched.filter((v) => v.meta.title).length) {
                return {to: v.path, title: v.meta.title} //提取path和title生成我们需要的数据格式
            } else {
                return {to: '', title: v.meta.title} //提取path和title生成我们需要的数据格式
            }
        })

    breads.value = [...r] //让面包屑以首页开头  => 首页 / 账号管理 / 账号添加
}

onMounted(() => {
    calcBreads()
})

//监听路由变化
watch(route, () => {
    //面包屑
    calcBreads()
})
</script>

<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item
            v-for="bread in breads"
            :key="bread.title"
            :to="bread.to"
        >
            {{ bread.title }}
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<style scoped></style>
