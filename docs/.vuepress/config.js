module.exports = {
    description: 'A UI library, built with Vue-Cli 3.0',
    lange: 'zh-CN', // 语言
    markdown: { // markdown 配置
        lineNumbers: true
    },
    head: [
        ['link', { rel: 'icon', href: '/images/favicon.ico' }]
    ],
    base: '/',
    themeConfig: {
        logo: '/images/logo.png',
        nav: [
            {text:'作者',
                items: [
                    { text: 'py-hang', link: 'https://github.com/py-hang'},
                    { text: 'chenxinhong-del', link: 'https://github.com/chenxinhong-del' },
            ]},
            { text: '资源',
                items:[
                    {text:'插件 Plugins',link:'/pages/source/plugins'},
                    {text:'特效 effect',link:'/pages/source/effect'},
            ]},
            { text: '文档', link: 'http://github.com/virtual-ui/VR-UI.git' },
            { text: 'GitHab', link: 'https://github.com/virtual-ui/VR-UI.git' }
        ],
        sidebar: [
            {
                title: '开发指南',
                // collapsable: false,
                children: [
                    '/pages/guide/Introduce',
                    '/pages/guide/GetStart',
                ]
            },
            {
                title:"组件",
                // collapsable: false,
                children:[
                    {
                        title:'通用',
                        // collapsable: false,
                        children:[
                            '/pages/component/Button',
                            '/pages/component/Icon',
                            '/pages/component/Link'
                        ]
                    },
                    {
                        title:'布局',
                        collapsable:false,
                        children:[
                            '/pages/component/Grid',
                            '/pages/component/Layout'
                        ]
                    }
                ]
            }
        ]
    }
};
