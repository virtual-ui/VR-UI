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
            { text: '首页', link: '/pages/guide/Home' },
            { text: '指南', link: '/pages/guide/' },
            { text: '文档', link: 'http://github.com/virtual-ui/VR-UI.git' },
            { text: 'GitHab', link: 'https://github.com/virtual-ui/VR-UI.git' }
        ],
        sidebar: [
            {
                title: '开发指南',
                collapsable: false,
                children: [
                    '/pages/guide/Home',
                    '/pages/guide/Introduce',
                    '/pages/guide/GetStart',
                ]
            },
            {
                title:"组件",
                collapsable: false,
                children:[
                    {
                        title:'通用',
                        collapsable: false,
                        children:[
                            '/pages/component/Button',
                            '/pages/component/Icon',
                            '/pages/component/Link'
                        ]
                    }
                ]
            }
        ]
    }
};
