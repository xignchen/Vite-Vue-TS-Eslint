// store.js
import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  state() {
    return {
      language: 'zhCn', // 语言
      size: 'default', // 布局大小
      userInfo: {}, // 用户信息
      systemTitle: '后台管理系统', // 系统标题
      subTitle: '管理平台', // 系统副标题
      isCollapse: false, // 菜单展开折叠
      isDark: false, // 暗黑模式切换
      tabs: [
        // 默认打开首页
        {
          name: '首页',
          path: '/',
          closable: false
        }
      ], // tabs数组
    };
  },
  mutations: {
    setLanguage(state, language) {
      state.language = language;
    },
    setSize(state, size) {
      state.size = size;
    },
    // 设置用户信息
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
    // 设置系统标题
    setSystemTitle(state, title) {
      state.systemTitle = title;
    },
    // 设置系统内标题
    setSubTitle(state, title) {
      state.subTitle = title;
    },
    // 设置是否展开菜单
    setIsCollapse(state, isCollapse) {
      state.isCollapse = isCollapse;
    },
    // 设置是否开启暗黑模式
    setIsDark(state, isDark) {
      state.isDark = isDark;
    },
    setTabs(state, tabs) {
      state.tabs = tabs;
    },
  },
  actions: {
    updateLanguage({ commit }, language) {
      commit('setLanguage', language);
    },
    updateSize({ commit }, size) {
      commit('setSize', size);
    },
    // 更新用户信息
    updateUserInfo({ commit }, userInfo) {
      commit('setUserInfo', userInfo);
    },
    // 更新系统标题
    updateSystemTitle({ commit }, title) {
      commit('setSystemTitle', title);
    },
    // 更新系统内标题
    updateSubTitle({ commit }, title) {
      commit('setSubTitle', title);
    },
    // 更新是否展开菜单
    updateIsCollapse({ commit }, isCollapse) {
      commit('setIsCollapse', isCollapse);
    },
    // 更新是否开启暗黑模式
    updateIsDark({ commit }, isDark) {
      commit('setIsDark', isDark);
    },
    updateTabs({ commit }, tabs) {
      commit('setTabs', tabs);
    }
  },
  getters: {
  },
  plugins: [createPersistedState({
    storage: window.localStorage, // 或者localStorage
  })]
});
