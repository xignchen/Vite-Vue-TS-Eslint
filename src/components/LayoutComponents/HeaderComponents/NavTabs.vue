<script setup lang="ts">
import {computed, watch} from 'vue'
import draggable from 'vuedraggable'
import store from '../../../store'
import {useRoute, useRouter} from 'vue-router'

const route = useRoute()
const router = useRouter()
/*
draggable 对CSS样式没有什么要求万物皆可拖拽
:list="state.list"         //需要绑定的数组
ghost-class="ghost"        //被替换元素的样式
chosen-class="chosenClass" //选中元素的样式
animation="300"            //动画效果
@start="onStart"           //拖拽开始的事件
@end="onEnd"               //拖拽结束的事件
*/
const tabsItem = computed(() => {
    return store.state.tabs
})

watch(route, (newVal) => {
    // console.log(newVal)
    if (newVal.path === '/login') {
        return
    }
    if (newVal.query) {
        router.push({path: newVal.path, query: newVal.query})
    } else {
        router.push({path: newVal.path})
    }
    // 判断当前路由是否已经添加到标签页中
    if (!tabsItem.value.some(item => item.path === newVal.path)) {
        // 没有则添加
        // 添加到标签页数组中
        tabsItem.value.push({
            name: newVal.meta.title,
            path: newVal.path,
            query: newVal.query,
            closable: true,
        })
    } else {
        // 更新当前标签页的索引
        tabsItem.value.forEach(item => {
            if (item.path === newVal.path && item.query !== newVal.query) {
                item.query = newVal.query
            }
        })
    }
    // 更新标签页数组
    store.dispatch('updateTabs', tabsItem.value)
})

const removeTabs = (item) => {
    // 判断当前标签页是否可以关闭
    if (!item.closable) return
    // 判断当前关闭的标签页是否是当前标签页
    if (item.path === route.path) {
        // 不是最后一个
        // 获取当前关闭的标签页的索引
        let index = tabsItem.value.findIndex(item => item.path === route.path)
        // 获取当前关闭的标签页的下一个标签页
        let nextItem = tabsItem.value[index - 1]
        // console.log(nextItem)
        // 跳转到下一个标签页
        if (nextItem.query) {
            router.push({path: nextItem.path, query: nextItem.query})
        } else {
            router.push({path: nextItem.path})
        }
    }
    // 删除当前关闭的标签页
    tabsItem.value.splice(tabsItem.value.indexOf(item), 1)
    // console.log(tabsItem.value)
    store.dispatch('updateTabs', tabsItem.value)
}

//拖拽开始的事件
const onStart = () => {
    // console.log("开始拖拽")
}

//拖拽结束的事件
const onEnd = () => {
    // console.log("结束拖拽")
    store.dispatch('updateTabs', tabsItem.value)
}
</script>

<template>
    <div class="tabs-btn">
        <draggable
            :list="tabsItem"
            item-key="path"
            ghost-class="ghost"
            chosen-class="chosenClass"
            draggable=".item"
            filter=".unmover"
            animation="300"
            @start="onStart"
            @end="onEnd"
        >
            <template #item="{ element }">
                <div
                    class="tab-item"
                    :class="{
            active: element.path === route.path,
            unmover: !element.closable,
            item: element.closable,
          }"
                >
          <span
              @click="router.push({ path: element.path, query: element.query })"
          >{{ element.name }}</span
          >
                    <el-icon
                        class="close-icon"
                        v-if="element.closable"
                        @click="removeTabs(element)"
                    >
                        <CircleClose
                        />
                    </el-icon>
                </div>
            </template>
        </draggable>
    </div>
</template>

<style scoped>
.tabs-btn {
    width: 100%;
    height: 2.5em;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    overflow: hidden;
    border-bottom: 1px solid var(--el-menu-border-color);
    background-color: var(--el-color-primary-light-9);
    box-sizing: border-box;
}

.tabs-btn > div {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
}

.tab-item {
    height: 100%;
    border: 1px solid var(--el-border-color);
    padding: 4px 8px;
    cursor: pointer;
    margin: 5px;
    font-size: 0.8em;
    white-space: nowrap;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}

.ghost {
    border: solid 1px var(--el-color-primary);
}

.chosenClass {
}

.active {
    color: var(--el-color-primary);
    border: solid 1px var(--el-color-primary);
    font-weight: bold;
}

.close-icon {
    margin-left: 8px;
}
</style>
