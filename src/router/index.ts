import {createRouter, createWebHashHistory} from "vue-router";

import login from "../views/login/login-index.vue";

const routes = [
    {
        path: "/login",
        name: "Login",
        component: login
    },
    {
        path: "/layout",
        name: "Layout",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("../views/layout.vue"),
        redirect: "/",
        children: [
            {
                path: "/",
                name: "Home",
                component: () => import('../views/home/home-index.vue'),
                meta: { title: '首页' },
            },
            {
               path: '/setting',
               name: 'Setting',
               meta: { title: '系统设置' },
               children: [
                   {
                       path: "/user",
                       name: "User",
                       component: () => import('../views/Setting/user/user-index.vue'),
                       meta: { title: '用户管理', keepAlive: true },
                   },
                   {
                       path: "/role",
                       name: "Role",
                       component: () => import('../views/Setting/role/role-index.vue'),
                       meta: { title: '角色管理', keepAlive: true },
                   },
                   {
                       path: "/menu",
                       name: "Menu",
                       component: () => import('../views/setting/menu/menu-index.vue'),
                       meta: { title: '菜单管理', keepAlive: true },
                   },
                   {
                       path: "/message",
                       name: "Message",
                       component: () => import('../views/setting/message/message-index.vue'),
                       meta: { title: '消息管理', keepAlive: true },
                   },
                   {
                       path: "/errorLog",
                       name: "errorLog",
                       component: () => import('../views/setting/error-log/error-log-index.vue'),
                       meta: { title: '错误日志', keepAlive: true },
                   },
                   {
                       path: "/profile",
                       name: "Profile",
                       component: () => import('../views/setting/profile/profile-index.vue'),
                       meta: { title: '个人信息', keepAlive: true },
                   },
               ]
            },
            {
                path: "/codemirror",
                name: "codemirror",
                component: () => import('../views/codemirror/codemirror-index.vue'),
                meta: { title: '代码编辑器' },
            },
            {
                path: "/404",
                name: "404",
                component: () => import('../views/error-page/404.vue'),
                meta: { title: '404' },
            },
            {
                path: "/:pathMatch(.*)*",
                name: "NotFound",
                component: () => import('../views/error-page/NotFound.vue'),
                meta: { title: 'NotFound' },
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {

    const token = localStorage.getItem('token');

    // 判断是否需要登录权限
    if (!token && to.path !== '/login') {
        next('/login')
    }else{
        next()
    }
})

export default router
