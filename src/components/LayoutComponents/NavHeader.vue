<script setup lang="ts">
import store from '../../store'
import SettingDropdown from './HeaderComponents/SettingDropdown.vue'
import DarkSwitch from './HeaderComponents/DarkSwitch.vue'
import NavBreadcrumb from './HeaderComponents/NavBreadcrumb.vue'
import MenuCollapse from './HeaderComponents/MenuCollapse.vue'
import NavTabs from './HeaderComponents/NavTabs.vue'
import SwitchLanguage from './HeaderComponents/SwitchLanguage.vue'
import SwitchSize from './HeaderComponents/SwitchSize.vue'
</script>

<template>
  <el-header>
    <div class="header-top">
      <div class="header-top-left">
        <div>
          <!--        菜单折叠按钮-->
          <menu-collapse />
        </div>
        <div class="m-l-1">
          <!--        路由面包屑-->
          <nav-breadcrumb />
        </div>
      </div>
      <div class="header-top-right">
        <!--  个人登录信息-->
        <div class="m-r-1">
           <span style="font-size: 0.95em; letter-spacing: 5px;">{{ store.state.userInfo.name }},欢迎您!</span>
        </div>
        <div class="m-r-1">
          <!--        组件大小切换-->
          <switch-size />
        </div>
        <div class="m-r-1">
          <!--        语言切换-->
          <switch-language />
        </div>
        <div class="">
          <!--  暗黑模式切换-->
          <dark-switch />
        </div>
        <!--  系统功能-->
        <setting-dropdown />
      </div>
    </div>
    <!--        菜单tabs-->
    <nav-tabs />
  </el-header>
</template>

<style scoped></style>
