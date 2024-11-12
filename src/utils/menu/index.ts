/*
 * @name: 标题
 * @path: 路径
 * @icon: 图标
 * @target: 跳转方式  _blank或_self，默认_self，携带target参数代表跳转外部链接，path为链接地址
 * @children: 子菜单
 */

export const menuItems = [
    {
        name: '首页',
        path: '/',
        icon: 'House'
    },
    {
        name: '查询统计',
        path: '/queryStatistics',
        icon: 'DataBoard',
        children: [
            {
                name: '查询',
                path: '/queryStatistics/query',
                icon: 'Search',
                children: [
                    {
                        name: '查询1',
                        path: '/queryStatistics/query/query1',
                        icon: 'Search'
                    },
                    {
                        name: '查询2',
                        path: '/queryStatistics/query/query2',
                        icon: 'Search'
                    }
                ]
            },
            {
                name: '统计',
                path: '/queryStatistics/statistics',
                icon: 'Histogram',
                children: [
                    {
                        name: '统计1',
                        path: '/queryStatistics/statistics/statistics1',
                        icon: 'Histogram'
                    },
                    {
                        name: '统计2',
                        path: '/queryStatistics/statistics/statistics2',
                        icon: 'Histogram'
                    }
                ]
            }
        ]
    },
    {
        name: '系统设置',
        path: '/setting',
        icon: 'Setting',
        children: [
            {
                name: '用户管理',
                path: '/user',
                icon: 'User'
            },
            {
                name: '角色管理',
                path: '/role',
                icon: 'UserFilled'
            },
            {
                name: '菜单管理',
                path: '/menu',
                icon: 'Menu'
            },
            {
                name: '消息管理',
                path: '/message',
                icon: 'Message'
            },
            {
                name: '错误日志',
                path: '/errorLog',
                icon: 'Failed'
            }
        ]
    },
    {
        name: '代码编辑器',
        path: '/codemirror',
        icon: 'Notebook',
    },
    {
        name: '百度',
        path: 'https://www.baidu.com',
        icon: 'Search',
        target: '_blank'
    }
]
