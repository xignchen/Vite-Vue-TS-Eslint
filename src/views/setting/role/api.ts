export const getRoleList = () => {
    // return axios.get("/role/list", { params });
    return Promise.resolve({
        code: 1,
        message: 'success',
        total: 2,
        data: [
            {
                id: 1,
                name: '管理员',
                num: 0,
                status: 1,
                description: '拥有所有权限',
            },
            {
                id: 2,
                name: '普通用户',
                num: 1,
                status: 1,
                description: '拥有基础菜单权限',
            }
        ]
    })
}

export const getMenuList = () => {
    // return axios.get("/menu/list", { params });
    return Promise.resolve({
        code: 1,
        message: 'success',
        total: 2,
        data: [
            {
                id: '1',
                parentId: null,
                name: '首页',
                path: '/',
                icon: 'House',
                sort: '1',
                status: 1,
            },
            {
                id: '2',
                parentId: null,
                name: '查询统计',
                path: '/queryStatistics',
                icon: 'DataBoard',
                sort: '2',
                status: 1,
                children: [
                    {
                        id: '21',
                        parentId: '2',
                        name: '查询',
                        path: '/queryStatistics/query',
                        icon: 'Search',
                        sort: '21',
                        status: 1,
                        children: [
                            {
                                id: '211',
                                parentId: '21',
                                name: '查询1',
                                path: '/queryStatistics/query/query1',
                                icon: 'Search',
                                sort: '211',
                                status: 1,
                            },
                            {
                                id: '212',
                                parentId: '21',
                                name: '查询2',
                                path: '/queryStatistics/query/query2',
                                icon: 'Search',
                                sort: '212',
                                status: 1,
                            }
                        ]
                    },
                    {
                        id: '22',
                        parentId: '2',
                        name: '统计',
                        path: '/queryStatistics/statistics',
                        icon: 'Histogram',
                        sort: '22',
                        status: 1,
                        children: [
                            {
                                id: '221',
                                parentId: '22',
                                name: '统计1',
                                path: '/queryStatistics/statistics/statistics1',
                                icon: 'Histogram',
                                sort: '221',
                                status: 1,
                            },
                            {
                                id: '222',
                                parentId: '22',
                                name: '统计2',
                                path: '/queryStatistics/statistics/statistics2',
                                icon: 'Histogram',
                                sort: '222',
                                status: 1,
                            }
                        ]
                    }
                ]
            },
            {
                id: '3',
                parentId: null,
                name: '系统设置',
                path: '/setting',
                icon: 'Setting',
                sort: '3',
                status: 1,
                children: [
                    {
                        id: '31',
                        parentId: '3',
                        name: '用户管理',
                        path: '/user',
                        icon: 'User',
                        sort: '31',
                        status: 1,
                    },
                    {
                        id: '32',
                        parentId: '3',
                        name: '角色管理',
                        path: '/role',
                        icon: 'UserFilled',
                        sort: '32',
                        status: 1,
                    },
                    {
                        id: '33',
                        parentId: '3',
                        name: '菜单管理',
                        path: '/menu',
                        icon: 'Menu',
                        sort: '33',
                        status: 1,
                    },
                    {
                        id: '34',
                        parentId: '3',
                        name: '消息管理',
                        path: '/message',
                        icon: 'Message',
                        sort: '34',
                        status: 1,
                    },
                    {
                        id: '35',
                        parentId: '3',
                        name: '错误日志',
                        path: '/errorLog',
                        icon: 'Failed',
                        sort: '35',
                        status: 1,
                    }
                ]
            },
        ]
    })
}

export default {
    getRoleList,
    getMenuList
}
